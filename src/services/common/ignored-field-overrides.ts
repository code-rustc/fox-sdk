import { FieldOverride } from './field-override';

/**
 * This only appears in the response if the request contains the optional `requestType` query parameter. It is the list of field overrides which are inapplicable to the request type provided.
 */
export type IgnoredFieldOverrides = FieldOverride[];
