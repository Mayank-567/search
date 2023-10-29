import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyProductImageSelection = {
  "__typename": true,
  "alt": true,
  "createdAt": true,
  "height": true,
  "id": true,
  "position": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "source": true,
  "updatedAt": true,
  "width": true
};
;
;
;
;
;
const apiIdentifier = "shopifyProductImage";
const pluralApiIdentifier = "shopifyProductImages";
class ShopifyProductImageManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyProductImage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyProductImage",
          id,
          DefaultShopifyProductImageSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductImageSelection
      }
    );
    /**
    * Finds one shopifyProductImage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyProductImage",
          id,
          DefaultShopifyProductImageSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: DefaultShopifyProductImageSelection
      }
    );
    /**
    * Finds many shopifyProductImage. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyProductImages",
          DefaultShopifyProductImageSelection,
          "shopifyProductImage",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductImageSelection
      }
    );
    /**
    * Finds the first matching shopifyProductImage. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyProductImages",
          DefaultShopifyProductImageSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductImageSelection
      }
    );
    /**
    * Finds the first matching shopifyProductImage. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyProductImages",
          DefaultShopifyProductImageSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductImageSelection
      }
    );
  }
}
export {
  DefaultShopifyProductImageSelection,
  ShopifyProductImageManager
};
//# sourceMappingURL=ShopifyProductImage.js.map
