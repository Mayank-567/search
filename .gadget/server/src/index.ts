/**
* This is the Gadget server side types library for:
*
*   ____                      _     
*  / ___|  ___  __ _ _ __ ___| |__  
*  \___ \ / _ \/ _` | '__/ __| '_ \ 
*   ___) |  __/ (_| | | | (__| | | |
*  |____/ \___|\__,_|_|  \___|_| |_|
*                                   
*
* Built for environment `Development` at version 3
* Framework version: ^0.2.0
* Edit this app here: https://search.gadget.dev/edit
*/
import type { Client } from "@gadget-client/search";
import { FastifyLoggerInstance } from "fastify";

export * from "./AccessControlMetadata";
export * from "./AmbientContext";
export * from "./AppConfigs";
export * from "./AppConfiguration";
export * from "./AppConnections";
export * from "./effects";
export * as DefaultEmailTemplates from "./email-templates";
export * from "./emails";
export { InvalidStateTransitionError } from "./errors";
export * from "./global-actions";
export * from "./routes";
export * from "./state-chart";
export * from "./types";
/**
 * @internal
 */
import { Globals, actionContextLocalStorage } from "./globals";
export * from "./models/Session";
export * from "./models/ShopifyGdprRequest";
export * from "./models/ShopifyProduct";
export * from "./models/ShopifyProductImage";
export * from "./models/ShopifyShop";
export * from "./models/ShopifySync";
export * from "./auth";

/**
 * An instance of the Gadget logger
 */
let logger: FastifyLoggerInstance;
/**
 * An instance of the Gadget API client that has admin permissions
 */
let api: Client;

/**
 * This is used internally to set the rootLogger.
 * @internal
 */
export const setLogger = (rootLogger: FastifyLoggerInstance) => {
  Globals.logger = rootLogger;
  logger = rootLogger;
};

/**
 * This is used internally to set the client Instance
 * @internal
 */
export const setApiClient = (client: Client) => {
  api = client;
}

export {
  api, logger
};

/**
 * @internal
 */
export {
  Globals,
  actionContextLocalStorage
};
