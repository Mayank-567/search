// All the generated types for the "Shopify Product Image" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyProductImage } from "@gadget-client/search";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyProductImageServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly alt: true;
      readonly shopifyCreatedAt: true;
      readonly height: true;
      readonly position: true;
      readonly source: true;
      readonly shopifyUpdatedAt: true;
      readonly width: true;
      readonly productId: true;
    readonly product: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyProductImage` model. */
export interface CreateShopifyProductImageActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyProductImage` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyProductImage, DefaultShopifyProductImageServerSelection>>;
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
  context: CreateShopifyProductImageActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyProductImage` model. */
export interface UpdateShopifyProductImageActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyProductImage` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyProductImage, DefaultShopifyProductImageServerSelection>>;
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
  context: UpdateShopifyProductImageActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyProductImage` model. */
export interface DeleteShopifyProductImageActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyProductImage` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyProductImage, DefaultShopifyProductImageServerSelection>>;
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
  context: DeleteShopifyProductImageActionContext;
};


  