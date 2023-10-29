import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifySyncSelection = {
  "__typename": true,
  "createdAt": true,
  "domain": true,
  "errorDetails": true,
  "errorMessage": true,
  "force": true,
  "id": true,
  "models": true,
  "state": true,
  "syncSince": true,
  "updatedAt": true
};
;
;
;
;
;
;
;
;
const apiIdentifier = "shopifySync";
const pluralApiIdentifier = "shopifySyncs";
async function runShopifySync(variables, options) {
  const newVariables = disambiguateActionParams(
    this["run"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "runShopifySync",
    DefaultShopifySyncSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifySync": {
        value: newVariables.shopifySync,
        required: false,
        type: "RunShopifySyncInput"
      },
      "startReason": {
        value: newVariables.startReason,
        required: false,
        type: "String"
      }
    },
    options,
    null,
    false
  );
}
async function completeShopifySync(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["complete"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "completeShopifySync",
    DefaultShopifySyncSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifySync": {
        value: newVariables.shopifySync,
        required: false,
        type: "CompleteShopifySyncInput"
      }
    },
    options,
    null,
    false
  );
}
async function errorShopifySync(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["error"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "errorShopifySync",
    DefaultShopifySyncSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifySync": {
        value: newVariables.shopifySync,
        required: false,
        type: "ErrorShopifySyncInput"
      }
    },
    options,
    null,
    false
  );
}
class ShopifySyncManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifySync by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifySync",
          id,
          DefaultShopifySyncSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySyncSelection
      }
    );
    /**
    * Finds one shopifySync by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifySync",
          id,
          DefaultShopifySyncSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: DefaultShopifySyncSelection
      }
    );
    /**
    * Finds many shopifySync. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifySyncs",
          DefaultShopifySyncSelection,
          "shopifySync",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySyncSelection
      }
    );
    /**
    * Finds the first matching shopifySync. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifySyncs",
          DefaultShopifySyncSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySyncSelection
      }
    );
    /**
    * Finds the first matching shopifySync. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifySyncs",
          DefaultShopifySyncSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySyncSelection
      }
    );
    /**
    * Finds one shopifySync by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "shopifySyncs",
          "id",
          value,
          DefaultShopifySyncSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySyncSelection
      }
    );
    this.run = Object.assign(
      runShopifySync,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifySyncSelection,
        variables: {
          "shopifySync": {
            required: false,
            type: "RunShopifySyncInput"
          },
          "startReason": {
            required: false,
            type: "String"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkRun action with the given inputs.
    */
    this.bulkRun = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["run"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkRunShopifySyncs",
          DefaultShopifySyncSelection,
          "shopifySync",
          "shopifySyncs",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkRun"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkRunShopifySyncs",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifySyncs",
        isBulk: true,
        defaultSelection: DefaultShopifySyncSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkRunShopifySyncsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.complete = Object.assign(
      completeShopifySync,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifySyncSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifySync": {
            required: false,
            type: "CompleteShopifySyncInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkComplete action with the given inputs.
    */
    this.bulkComplete = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["complete"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkCompleteShopifySyncs",
          DefaultShopifySyncSelection,
          "shopifySync",
          "shopifySyncs",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkComplete"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkCompleteShopifySyncs",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifySyncs",
        isBulk: true,
        defaultSelection: DefaultShopifySyncSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCompleteShopifySyncsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.error = Object.assign(
      errorShopifySync,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifySyncSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifySync": {
            required: false,
            type: "ErrorShopifySyncInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkError action with the given inputs.
    */
    this.bulkError = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["error"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkErrorShopifySyncs",
          DefaultShopifySyncSelection,
          "shopifySync",
          "shopifySyncs",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkError"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkErrorShopifySyncs",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifySyncs",
        isBulk: true,
        defaultSelection: DefaultShopifySyncSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkErrorShopifySyncsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
  }
}
export {
  DefaultShopifySyncSelection,
  ShopifySyncManager
};
//# sourceMappingURL=ShopifySync.js.map
