// All the generated types for the "Session" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, Session } from "@gadget-client/search";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultSessionServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly state: true;
      readonly shopId: true;
    readonly shop: false;
      readonly shopifySID: true;
      readonly roles: true;
  };

