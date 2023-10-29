/**
* This is the Gadget API client library for:
*
*   ____                      _
*  / ___|  ___  __ _ _ __ ___| |__
*  \___ \ / _ \/ _` | '__/ __| '_ \
*   ___) |  __/ (_| | | | (__| | | |
*  |____/ \___|\__,_|_|  \___|_| |_|
*
*
* Built for environment "Development" at version 3
* API docs: https://docs.gadget.dev/api/search
* Edit this app here: https://search.gadget.app/edit
*/
export { BrowserSessionStorageType, GadgetClientError, GadgetConnection, GadgetInternalError, GadgetOperationError, GadgetRecord, GadgetRecordList, GadgetValidationError, InvalidRecordError } from "@gadgetinc/api-client-core";
export type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, ClientOptions, InvalidFieldError, Select } from "@gadgetinc/api-client-core";
export * from "./Client.js";
export * from "./types.js";
declare global {
    interface Window {
        gadgetConfig: {
            apiKeys: {
                shopify: string;
            };
            environment: string;
            env: Record<string, any>;
            authentication?: {
                signInPath: string;
                redirectOnSuccessfulSignInPath: string;
            };
        };
    }
}
