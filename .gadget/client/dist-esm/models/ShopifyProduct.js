import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyProductSelection = {
  "__typename": true,
  "body": true,
  "createdAt": true,
  "descriptionEmbedding": true,
  "handle": true,
  "id": true,
  "productCategory": true,
  "productType": true,
  "publishedAt": true,
  "publishedScope": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "status": true,
  "tags": true,
  "templateSuffix": true,
  "title": true,
  "updatedAt": true,
  "vendor": true
};
;
;
;
;
;
const apiIdentifier = "shopifyProduct";
const pluralApiIdentifier = "shopifyProducts";
class ShopifyProductManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyProduct",
          id,
          DefaultShopifyProductSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductSelection
      }
    );
    /**
    * Finds one shopifyProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyProduct",
          id,
          DefaultShopifyProductSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: DefaultShopifyProductSelection
      }
    );
    /**
    * Finds many shopifyProduct. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyProducts",
          DefaultShopifyProductSelection,
          "shopifyProduct",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductSelection
      }
    );
    /**
    * Finds the first matching shopifyProduct. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyProducts",
          DefaultShopifyProductSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductSelection
      }
    );
    /**
    * Finds the first matching shopifyProduct. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyProducts",
          DefaultShopifyProductSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductSelection
      }
    );
  }
}
export {
  DefaultShopifyProductSelection,
  ShopifyProductManager
};
//# sourceMappingURL=ShopifyProduct.js.map
