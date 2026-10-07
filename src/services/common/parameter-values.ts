import { ParameterValuesItem } from '../field-lists/models/parameter-values-item';

/**
 * A list of parameter values. The values can be either strings (max length: 32 characters) or integers, depending on the parameter type.
 */
export type ParameterValues = ParameterValuesItem[];
