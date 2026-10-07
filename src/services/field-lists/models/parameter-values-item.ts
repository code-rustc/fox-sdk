import * as core from '../../../core';

/**
 * Cast schema for the ParameterValuesItem model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const parameterValuesItem = core.cast.identity<ParameterValuesItem>();

export type ParameterValuesItem = string | number;

export const parameterValuesItemResponse = core.cast.identity<ParameterValuesItem>();

export const parameterValuesItemRequest = core.cast.identity<ParameterValuesItem>();
