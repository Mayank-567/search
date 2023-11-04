export const createProductEmbedding = async ({
  record,
  api,
  logger,
  connections,
}) => {
  console.log("here is the record from utils", record);
  // only run if the product does not have an embedding, or if the title or body or noofdaysdelivery(metafield) or sport(metafield) have changed
  if (
    !record.descriptionEmbedding ||
    record.changed("title") ||
    record.changed("body") ||
    record.changed("noofdaysdelivery") ||
    record.changed("sport")
  ) {
    try {
      // get an embedding for the product title + description + no of delivery days + sport using the OpenAI connection
      const response = await connections.openai.embeddings.create({
        input: `${record.title}: Estimated delivery in ${record.noofdaysdelivery} days - It is used for ${record.sport} sport - ${record.body}`,
        model: "text-embedding-ada-002",
      });
      const embedding = response.data[0].embedding;

      // write to the Gadget Logs
      logger.info({ id: record.id }, "got product embedding");

      // use the internal API to store vector embedding in Gadget database, on shopifyProduct model
      await api.internal.shopifyProduct.update(record.id, {
        shopifyProduct: { descriptionEmbedding: embedding },
      });
    } catch (error) {
      logger.error({ error }, "error creating embedding");
    }
  }
};
