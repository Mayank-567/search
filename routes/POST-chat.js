import { RouteContext } from "gadget-server";
import { Readable } from "stream";
import { z } from "zod";
import { ConsoleCallbackHandler } from "langchain/callbacks";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { StructuredOutputParser } from "langchain/output_parsers";

// a parser for the specific kind of response we want from the LLM
const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    answer: z
      .string()
      .describe(
        "answer to the user's question, not including any product IDs, and only using product titles and descriptions"
      ),
    productIds: z
      .array(z.string())
      .describe(
        "IDs from input product JSON objects for the user to purchase, formatted as an array, or omitted if no products are applicable"
      ),
  })
);

const prompt = new PromptTemplate({
  template: `You are a helpful shopping assistant trying to match customers with the right product. You will be given a question from a customer and then maybe some JSON objects with the id, title, and description of products available for sale that roughly match the customer's question. Reply to the question suggesting which products to buy. Only use the product titles and descriptions in your response, do not use the product IDs in your response. If you are unsure or if the question seems unrelated to shopping, say "Sorry, I don't know how to help with that", and include some suggestions for better questions to ask. {format_instructions}
  Products: {products}

  Question: {question}`,
  inputVariables: ["question", "products"],
  partialVariables: { format_instructions: parser.getFormatInstructions() },
});

/**
 * Route handler for POST chat
 *
 * @param { RouteContext } route context - see: https://docs.gadget.dev/guides/http-routes/route-configuration#route-context
 *
 */
export default async function route({
  request,
  reply,
  api,
  logger,
  connections,
}) {
  const model = new OpenAI({
    temperature: 0,
    openAIApiKey: connections.openai.configuration.apiKey,
    configuration: {
      basePath: connections.openai.configuration.baseURL,
    },
    streaming: true,
  });

  const chain = new LLMChain({ llm: model, prompt, outputParser: parser });

  // embed the incoming message from the user
  const response = await connections.openai.embeddings.create({
    input: request.body.message,
    model: "text-embedding-ada-002",
  });

  // find similar product descriptions
  const products = await api.shopifyProduct.findMany({
    sort: {
      descriptionEmbedding: {
        cosineSimilarityTo: response.data[0].embedding,
      },
    },
    first: 4,
  });

  // capture products in Gadget's Logs
  logger.info(
    { products, message: request.body.message },
    "found products most similar to user input"
  );

  // Filter products with an 'active' status and then JSON-stringify
  // the structured product data to pass to the LLM
  const productString = products
    .filter((product) => product.status === "active")
    .map((product) =>
      JSON.stringify({
        id: product.id,
        title: product.title,
        description: product.body,
        noofdaysdelivery: product.noofdaysdelivery,
        sport: product.sport,
        status: product.status,
      })
    )
    .join("\n");

  // set up a new stream for returning the response from OpenAI
  // any data added to the stream will be streamed from Gadget to the route caller
  // in this case, the route caller is the frontend
  const stream = new Readable({ read() {} });

  try {
    // start to return the stream immediately
    await reply.send(stream);

    let tokenText = "";
    // invoke the chain and add the streamed response tokens to the Readable stream
    const resp = await chain.call(
      { question: request.body.message, products: productString },
      [
        new ConsoleCallbackHandler(),
        {
          // as the response is streamed in from OpenAI, stream it to the Gadget frontend
          handleLLMNewToken: (token) => {
            tokenText += token;
            // parse out some of the response formatting tokens
            if (
              tokenText.includes('"answer": "') &&
              !tokenText.includes('",\n')
            ) {
              stream.push(token);
            }
          },
        },
      ]
    );

    // grab the complete response to store records in Chat Log model
    const { answer, productIds } = resp.text;

    // select all the details of the recommended product if one was selected
    let selectedProducts = undefined;
    if (productIds) {
      try {
        selectedProducts = await api.shopifyProduct.findMany({
          select: {
            title: true,
            handle: true,
            images: {
              edges: {
                node: {
                  id: true,
                  source: true,
                },
              },
            },
            shop: {
              domain: true,
            },
          },
          filter: {
            id: {
              in: productIds,
            },
          },
        });

        // only return a single image!
        selectedProducts.forEach((product) => {
          if (product.images.edges.length > 1) {
            product.images.edges.splice(1);
          }
        });
      } catch (error) {
        logger.error({ error }, "error fetching data for selected product");

        // destroy the stream and push error message
        stream.destroy(error);
      }
    }

    logger.info(
      { answer, selectedProducts },
      "answer and products being sent to the frontend for display"
    );

    // send the selected product to the stream
    stream.push(JSON.stringify({ products: selectedProducts }));
    // close the stream
    stream.push(null);
  } catch (error) {
    // log error to Gadget Logs
    logger.error({ error: String(error) }, "error getting chat completion");

    // destroy the stream and push error message
    stream.destroy(error);
  }
}

route.options = {
  schema: {
    body: {
      type: "object",
      properties: {
        message: {
          type: "string",
        },
      },
      required: ["message"],
    },
  },
};
