import { FieldOverrideInput } from './field-override-input';

/**
 * List of field overrides.

If duplicate overrides are supplied, it is the value of the last such duplicate that will be applied when the request is processed.

Note that field overrides are not supported by all request types. Please refer to [this table](#tag/Requests/operation/postRequest) for details.

 */
export type FieldOverridesInput = FieldOverrideInput[];
