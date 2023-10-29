export const createProductEmbedding = async ({ record, api, logger, connections }) => {
  // only run if the product does not have an embedding, or if the title or body have changed
  if (!record.descriptionEmbedding || record.changed("title") || record.changed("body")) {
    try {
      // get an embedding for the product title + description using the OpenAI connection
      const response = await connections.openai.embeddings.create({ input: `${record.title}: ${record.body}`, model: "text-embedding-ada-002" });
      const embedding = response.data[0].embedding;

      // write to the Gadget Logs
      logger.info({ id: record.id }, "got product embedding");

      // use the internal API to store vector embedding in Gadget database, on shopifyProduct model
      await api.internal.shopifyProduct.update(record.id, { shopifyProduct: { descriptionEmbedding: embedding } });
    } catch (error) {
      logger.error({ error }, "error creating embedding");
    }
  }
};