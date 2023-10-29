import type { AmbientContext } from "./AmbientContext";
import type { ActionTrigger, ActionExecutionScope } from "./types";

/** All the data passed to an effect or precondition within the `globalShopifySync` global action. */
export interface GlobalShopifySyncGlobalActionContext extends AmbientContext {
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects, or returning data from this global action by setting `scope.result`.
  * For global actions, `scope.result` is returned to the client at the end of action execution.
  */
  scope: ActionExecutionScope;
  /**
  * An object containing all the incoming params that have been defined for this global action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * The context of this global action. This context does not have a defined inner context.
  */
  context: GlobalShopifySyncGlobalActionContext;
};


