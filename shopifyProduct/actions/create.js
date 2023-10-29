import { applyParams, preventCrossShopDataAccess, save, ActionOptions, CreateShopifyProductActionContext } from "gadget-server";
import { createProductEmbedding } from "../utils";

/**
 * @param { CreateShopifyProductActionContext } context
 */
export async function run({ params, record, logger, api }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { CreateShopifyProductActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  await createProductEmbedding({ record, api, logger, connections });
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
