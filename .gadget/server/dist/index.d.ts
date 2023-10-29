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
declare let logger: FastifyLoggerInstance;
/**
 * An instance of the Gadget API client that has admin permissions
 */
declare let api: Client;
export { api, logger };
