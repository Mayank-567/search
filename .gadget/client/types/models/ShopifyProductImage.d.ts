import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyProductImage, ShopifyProductImageSort, ShopifyProductImageFilter, AvailableShopifyProductImageSelection } from "../types.js";
export declare const DefaultShopifyProductImageSelection: {
    readonly __typename: true;
    readonly alt: true;
    readonly createdAt: true;
    readonly height: true;
    readonly id: true;
    readonly position: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly source: true;
    readonly updatedAt: true;
    readonly width: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyProductImage". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyProductImageOrDefault<Options extends Selectable<AvailableShopifyProductImageSelection>> = DeepFilterNever<Select<ShopifyProductImage, DefaultSelection<AvailableShopifyProductImageSelection, Options, typeof DefaultShopifyProductImageSelection>>>;
/** Options that can be passed to the `ShopifyProductImageManager#findOne` method */
export interface FindOneShopifyProductImageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
}
/** Options that can be passed to the `ShopifyProductImageManager#maybeFindOne` method */
export interface MaybeFindOneShopifyProductImageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
}
/** Options that can be passed to the `ShopifyProductImageManager#findMany` method */
export interface FindManyShopifyProductImagesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyProductImageSort | ShopifyProductImageSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProductImageFilter | ShopifyProductImageFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyProductImageManager#findFirst` method */
export interface FindFirstShopifyProductImageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyProductImageSort | ShopifyProductImageSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProductImageFilter | ShopifyProductImageFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyProductImageManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyProductImageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductImageSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyProductImageSort | ShopifyProductImageSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProductImageFilter | ShopifyProductImageFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyProductImage" */
export declare class ShopifyProductImageManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyProductImage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyProductImageOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyProductImageOptions>): Promise<GadgetRecord<SelectedShopifyProductImageOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyProductImage";
        modelApiIdentifier: "shopifyProductImage";
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: FindOneShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
    };
    /**
 * Finds one shopifyProductImage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyProductImageOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyProductImageOptions>): Promise<GadgetRecord<SelectedShopifyProductImageOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyProductImage";
        modelApiIdentifier: "shopifyProductImage";
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: MaybeFindOneShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
    };
    /**
 * Finds many shopifyProductImage. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyProductImagesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyProductImagesOptions>): Promise<GadgetRecordList<SelectedShopifyProductImageOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyProductImages";
        modelApiIdentifier: "shopifyProductImage";
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: FindManyShopifyProductImagesOptions;
        schemaType: Query["shopifyProductImage"];
    };
    /**
 * Finds the first matching shopifyProductImage. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyProductImageOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyProductImageOptions>): Promise<GadgetRecord<SelectedShopifyProductImageOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyProductImages";
        modelApiIdentifier: "shopifyProductImage";
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: FindFirstShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
    };
    /**
 * Finds the first matching shopifyProductImage. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyProductImageOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyProductImageOptions>): Promise<GadgetRecord<SelectedShopifyProductImageOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyProductImages";
        modelApiIdentifier: "shopifyProductImage";
        defaultSelection: typeof DefaultShopifyProductImageSelection;
        selectionType: AvailableShopifyProductImageSelection;
        optionsType: MaybeFindFirstShopifyProductImageOptions;
        schemaType: Query["shopifyProductImage"];
    };
}
