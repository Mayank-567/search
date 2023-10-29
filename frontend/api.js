import { Client } from "@gadget-client/search";

export const api = new Client({ environment: window.gadgetConfig.environment });
