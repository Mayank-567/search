import type { OperationContext } from "@urql/core";
import { GadgetConnection, GadgetTransaction, InternalModelManager } from "@gadgetinc/api-client-core";
import type { ClientOptions as ApiClientOptions, AnyClient } from '@gadgetinc/api-client-core';
import type { DocumentNode } from 'graphql';
import type { Scalars } from "./types";
import { SessionManager } from "./models/Session.js";
import { ShopifyGdprRequestManager } from "./models/ShopifyGdprRequest.js";
import { ShopifyProductManager } from "./models/ShopifyProduct.js";
import { ShopifyProductImageManager } from "./models/ShopifyProductImage.js";
import { ShopifyShopManager } from "./models/ShopifyShop.js";
import { ShopifySyncManager } from "./models/ShopifySync.js";
import { CurrentSessionManager } from "./models/CurrentSession.js";
type InternalModelManagers = {
    session: InternalModelManager;
    shopifyGdprRequest: InternalModelManager;
    shopifyProduct: InternalModelManager;
    shopifyProductImage: InternalModelManager;
    shopifyShop: InternalModelManager;
    shopifySync: InternalModelManager;
};
type ClientOptions = Omit<ApiClientOptions, "environment"> & {
    environment?: string;
};
/**
 * Root object used for interacting with the "Search" API. `Client` has `query` and `mutation` functions for executing raw GraphQL queries and mutations, as well as `ModelManager` objects for manipulating models with a JavaScript API. Client also wraps a `connection`, which implements the transport layer if you need access to that.
 * */
export declare class Client implements AnyClient {
    connection: GadgetConnection;
    session: SessionManager;
    shopifyGdprRequest: ShopifyGdprRequestManager;
    shopifyProduct: ShopifyProductManager;
    shopifyProductImage: ShopifyProductImageManager;
    shopifyShop: ShopifyShopManager;
    shopifySync: ShopifySyncManager;
    currentSession: CurrentSessionManager;
    /**
    * Namespaced object for accessing models via the Gadget internal APIs, which provide lower level and higher privileged operations directly against the database. Useful for maintenance operations like migrations or correcting broken data, and for implementing the high level actions.
    *
    * Returns an object of model API identifiers to `InternalModelManager` objects.
    *
    * Example:
    * `api.internal.user.findOne(...)`
    */
    internal: InternalModelManagers;
    developmentApiRoot: string;
    productionApiRoot: string;
    applicationId: string;
    constructor(options?: ClientOptions);
    /** Executes the globalShopifySync global action. */
    globalShopifySync: {
        (variables: {
            apiKeys?: ((Scalars['String'] | null))[];
            syncSince?: Date | Scalars['ISO8601DateString'] | null;
            models?: ((Scalars['String'] | null))[];
            force?: (Scalars['Boolean'] | null) | null;
            startReason?: (Scalars['String'] | null) | null;
        }): Promise<any>;
        type: "globalAction";
        operationName: "globalShopifySync";
        namespace: null;
        variablesType: {
            apiKeys?: ((Scalars['String'] | null))[];
            syncSince?: Date | Scalars['ISO8601DateString'] | null;
            models?: ((Scalars['String'] | null))[];
            force?: (Scalars['Boolean'] | null) | null;
            startReason?: (Scalars['String'] | null) | null;
        } | undefined;
        variables: {
            "apiKeys": {
                required: false;
                type: "[String!]";
            };
            "syncSince": {
                required: false;
                type: "DateTime";
            };
            "models": {
                required: false;
                type: "[String!]";
            };
            "force": {
                required: false;
                type: "Boolean";
            };
            "startReason": {
                required: false;
                type: "String";
            };
        };
    };
    /** Run an arbitrary GraphQL query. */
    query(graphQL: string | DocumentNode, variables?: Record<string, any>, options?: Partial<OperationContext>): Promise<any>;
    /** Run an arbitrary GraphQL mutation. */
    mutate(graphQL: string | DocumentNode, variables?: Record<string, any>): Promise<any>;
    /** Start a transaction against the Gadget backend which will atomically commit (or rollback). */
    transaction: <T>(callback: (transaction: GadgetTransaction) => Promise<T>) => Promise<T>;
    /**
     * `fetch` function that works the same as the built-in `fetch` function, but automatically passes authentication information for this API client.
     *
     * @example
     * await api.fetch("https://myapp--development.gadget.app/foo/bar");
     *
     * @example
     * // fetch a relative URL from the endpoint this API client is configured to fetch from
     * await api.fetch("/foo/bar");
     **/
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    /**
    * Get a new direct upload token for file uploads to directly to cloud storage.
    * See https://docs.gadget.dev/guides/storing-files#direct-uploads-using-tokens for more information
    * @return { url: string, token: string } A `url` to upload one file to, and a token for that file to pass back to Gadget as an action input.
    */
    getDirectUploadToken: () => Promise<{
        url: string;
        token: string;
    }>;
    toString(): string;
    toJSON(): string;
}
export {};
