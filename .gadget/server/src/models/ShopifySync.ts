// All the generated types for the "Shopify Sync" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifySync } from "@gadget-client/search";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifySyncServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly state: true;
      readonly errorDetails: true;
      readonly domain: true;
      readonly errorMessage: true;
      readonly syncSince: true;
      readonly force: true;
      readonly models: true;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `run` action on the `shopifySync` model. */
export interface RunShopifySyncActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifySync` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifySync, DefaultShopifySyncServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: RunShopifySyncActionContext;
};


    
/** All the data passed to an effect or precondition within the `complete` action on the `shopifySync` model. */
export interface CompleteShopifySyncActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifySync` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifySync, DefaultShopifySyncServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: CompleteShopifySyncActionContext;
};


    
/** All the data passed to an effect or precondition within the `error` action on the `shopifySync` model. */
export interface ErrorShopifySyncActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifySync` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifySync, DefaultShopifySyncServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: ErrorShopifySyncActionContext;
};


  