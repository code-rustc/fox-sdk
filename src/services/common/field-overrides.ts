import { FieldOverride } from './field-override';

/**
 * The list of field overrides defined for this security. If `requestType` is provided, this list is restricted to those field overrides which are applicable to the request type.
 */
export type FieldOverrides = FieldOverride[];
