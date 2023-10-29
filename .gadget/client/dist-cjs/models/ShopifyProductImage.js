"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ShopifyProductImage_exports = {};
__export(ShopifyProductImage_exports, {
  DefaultShopifyProductImageSelection: () => DefaultShopifyProductImageSelection,
  ShopifyProductImageManager: () => ShopifyProductImageManager
});
module.exports = __toCommonJS(ShopifyProductImage_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
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
        return await (0, import_api_client_core.findOneRunner)(
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
        const record = await (0, import_api_client_core.findOneRunner)(
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
        return await (0, import_api_client_core.findManyRunner)(
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
        const list = await (0, import_api_client_core.findManyRunner)(
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
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyProductImages",
          DefaultShopifyProductImageSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyProductImageSelection,
  ShopifyProductImageManager
});
//# sourceMappingURL=ShopifyProductImage.js.map
