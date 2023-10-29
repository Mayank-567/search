import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifySync, ShopifySyncSort, ShopifySyncFilter, AvailableShopifySyncSelection, RunShopifySyncInput, Scalars, CompleteShopifySyncInput, ErrorShopifySyncInput } from "../types.js";
export declare const DefaultShopifySyncSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly domain: true;
    readonly errorDetails: true;
    readonly errorMessage: true;
    readonly force: true;
    readonly id: true;
    readonly models: true;
    readonly state: true;
    readonly syncSince: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifySync". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifySyncOrDefault<Options extends Selectable<AvailableShopifySyncSelection>> = DeepFilterNever<Select<ShopifySync, DefaultSelection<AvailableShopifySyncSelection, Options, typeof DefaultShopifySyncSelection>>>;
/** Options that can be passed to the `ShopifySyncManager#findOne` method */
export interface FindOneShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
}
/** Options that can be passed to the `ShopifySyncManager#maybeFindOne` method */
export interface MaybeFindOneShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
}
/** Options that can be passed to the `ShopifySyncManager#findMany` method */
export interface FindManyShopifySyncsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySyncSort | ShopifySyncSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySyncFilter | ShopifySyncFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifySyncManager#findFirst` method */
export interface FindFirstShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySyncSort | ShopifySyncSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySyncFilter | ShopifySyncFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifySyncManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySyncSort | ShopifySyncSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySyncFilter | ShopifySyncFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface RunShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
}
export interface CompleteShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
}
export interface ErrorShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedRunShopifySyncVariables = {
    shopifySync?: RunShopifySyncInput;
    startReason?: (Scalars['String'] | null) | null;
};
/**
 * The inputs for executing run on shopifySync.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type RunShopifySyncVariables = RunShopifySyncInput;
/**
 * The return value from executing run on shopifySync.
 * "Is a GadgetRecord of the model's type."
 **/
export type RunShopifySyncResult<Options extends RunShopifySyncOptions> = SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>;
/**
  * Executes the run action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function runShopifySync<Options extends RunShopifySyncOptions>(variables: RunShopifySyncVariables, options?: LimitToKnownKeys<Options, RunShopifySyncOptions>): Promise<RunShopifySyncResult<Options>>;
declare function runShopifySync<Options extends RunShopifySyncOptions>(variables: FullyQualifiedRunShopifySyncVariables, options?: LimitToKnownKeys<Options, RunShopifySyncOptions>): Promise<RunShopifySyncResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCompleteShopifySyncVariables = {
    shopifySync?: CompleteShopifySyncInput;
};
/**
 * The inputs for executing complete on shopifySync.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CompleteShopifySyncVariables = CompleteShopifySyncInput;
/**
 * The return value from executing complete on shopifySync.
 * "Is a GadgetRecord of the model's type."
 **/
export type CompleteShopifySyncResult<Options extends CompleteShopifySyncOptions> = SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>;
/**
  * Executes the complete action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function completeShopifySync<Options extends CompleteShopifySyncOptions>(id: string, variables: CompleteShopifySyncVariables, options?: LimitToKnownKeys<Options, CompleteShopifySyncOptions>): Promise<CompleteShopifySyncResult<Options>>;
declare function completeShopifySync<Options extends CompleteShopifySyncOptions>(id: string, variables: FullyQualifiedCompleteShopifySyncVariables, options?: LimitToKnownKeys<Options, CompleteShopifySyncOptions>): Promise<CompleteShopifySyncResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedErrorShopifySyncVariables = {
    shopifySync?: ErrorShopifySyncInput;
};
/**
 * The inputs for executing error on shopifySync.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type ErrorShopifySyncVariables = ErrorShopifySyncInput;
/**
 * The return value from executing error on shopifySync.
 * "Is a GadgetRecord of the model's type."
 **/
export type ErrorShopifySyncResult<Options extends ErrorShopifySyncOptions> = SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>;
/**
  * Executes the error action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function errorShopifySync<Options extends ErrorShopifySyncOptions>(id: string, variables: ErrorShopifySyncVariables, options?: LimitToKnownKeys<Options, ErrorShopifySyncOptions>): Promise<ErrorShopifySyncResult<Options>>;
declare function errorShopifySync<Options extends ErrorShopifySyncOptions>(id: string, variables: FullyQualifiedErrorShopifySyncVariables, options?: LimitToKnownKeys<Options, ErrorShopifySyncOptions>): Promise<ErrorShopifySyncResult<Options>>;
/** All the actions available at the collection level and record level for "shopifySync" */
export declare class ShopifySyncManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifySync by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifySyncOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySyncOptions>): Promise<GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifySync";
        modelApiIdentifier: "shopifySync";
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: FindOneShopifySyncOptions;
        schemaType: Query["shopifySync"];
    };
    /**
 * Finds one shopifySync by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifySyncOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySyncOptions>): Promise<GadgetRecord<SelectedShopifySyncOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifySync";
        modelApiIdentifier: "shopifySync";
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: MaybeFindOneShopifySyncOptions;
        schemaType: Query["shopifySync"];
    };
    /**
 * Finds many shopifySync. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifySyncsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySyncsOptions>): Promise<GadgetRecordList<SelectedShopifySyncOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifySyncs";
        modelApiIdentifier: "shopifySync";
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: FindManyShopifySyncsOptions;
        schemaType: Query["shopifySync"];
    };
    /**
 * Finds the first matching shopifySync. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifySyncOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySyncOptions>): Promise<GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifySyncs";
        modelApiIdentifier: "shopifySync";
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: FindFirstShopifySyncOptions;
        schemaType: Query["shopifySync"];
    };
    /**
 * Finds the first matching shopifySync. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifySyncOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySyncOptions>): Promise<GadgetRecord<SelectedShopifySyncOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifySyncs";
        modelApiIdentifier: "shopifySync";
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: MaybeFindFirstShopifySyncOptions;
        schemaType: Query["shopifySync"];
    };
    /**
  * Finds one shopifySync by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneShopifySyncOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifySyncOptions>): Promise<GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifySyncs";
        modelApiIdentifier: "shopifySync";
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: FindOneShopifySyncOptions;
        schemaType: Query["shopifySync"];
    };
    run: typeof runShopifySync & {
        type: "action";
        operationName: "runShopifySync";
        namespace: null;
        modelApiIdentifier: "shopifySync";
        modelSelectionField: "shopifySync";
        isBulk: false;
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: RunShopifySyncOptions;
        schemaType: Query["shopifySync"];
        variablesType: ((FullyQualifiedRunShopifySyncVariables | RunShopifySyncVariables)) | undefined;
        variables: {
            "shopifySync": {
                required: false;
                type: "RunShopifySyncInput";
            };
            "startReason": {
                required: false;
                type: "String";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: true;
    };
    /**
* Executes the bulkRun action with the given inputs.
*/
    bulkRun: {
        <Options extends RunShopifySyncOptions>(inputs: (FullyQualifiedRunShopifySyncVariables | RunShopifySyncVariables)[], options?: LimitToKnownKeys<Options, RunShopifySyncOptions>): Promise<RunShopifySyncResult<Options>[]>;
        type: "action";
        operationName: "bulkRunShopifySyncs";
        namespace: null;
        modelApiIdentifier: "shopifySync";
        modelSelectionField: "shopifySyncs";
        isBulk: true;
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: RunShopifySyncOptions;
        schemaType: Query["shopifySync"];
        variablesType: (FullyQualifiedRunShopifySyncVariables | RunShopifySyncVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkRunShopifySyncsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    complete: typeof completeShopifySync & {
        type: "action";
        operationName: "completeShopifySync";
        namespace: null;
        modelApiIdentifier: "shopifySync";
        modelSelectionField: "shopifySync";
        isBulk: false;
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: CompleteShopifySyncOptions;
        schemaType: Query["shopifySync"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedCompleteShopifySyncVariables | CompleteShopifySyncVariables)) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifySync": {
                required: false;
                type: "CompleteShopifySyncInput";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: true;
    };
    /**
* Executes the bulkComplete action with the given inputs.
*/
    bulkComplete: {
        <Options extends CompleteShopifySyncOptions>(inputs: (FullyQualifiedCompleteShopifySyncVariables | CompleteShopifySyncVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, CompleteShopifySyncOptions>): Promise<CompleteShopifySyncResult<Options>[]>;
        type: "action";
        operationName: "bulkCompleteShopifySyncs";
        namespace: null;
        modelApiIdentifier: "shopifySync";
        modelSelectionField: "shopifySyncs";
        isBulk: true;
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: CompleteShopifySyncOptions;
        schemaType: Query["shopifySync"];
        variablesType: (FullyQualifiedCompleteShopifySyncVariables | CompleteShopifySyncVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCompleteShopifySyncsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    error: typeof errorShopifySync & {
        type: "action";
        operationName: "errorShopifySync";
        namespace: null;
        modelApiIdentifier: "shopifySync";
        modelSelectionField: "shopifySync";
        isBulk: false;
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: ErrorShopifySyncOptions;
        schemaType: Query["shopifySync"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedErrorShopifySyncVariables | ErrorShopifySyncVariables)) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifySync": {
                required: false;
                type: "ErrorShopifySyncInput";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: true;
    };
    /**
* Executes the bulkError action with the given inputs.
*/
    bulkError: {
        <Options extends ErrorShopifySyncOptions>(inputs: (FullyQualifiedErrorShopifySyncVariables | ErrorShopifySyncVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, ErrorShopifySyncOptions>): Promise<ErrorShopifySyncResult<Options>[]>;
        type: "action";
        operationName: "bulkErrorShopifySyncs";
        namespace: null;
        modelApiIdentifier: "shopifySync";
        modelSelectionField: "shopifySyncs";
        isBulk: true;
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: ErrorShopifySyncOptions;
        schemaType: Query["shopifySync"];
        variablesType: (FullyQualifiedErrorShopifySyncVariables | ErrorShopifySyncVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkErrorShopifySyncsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
}
export {};
