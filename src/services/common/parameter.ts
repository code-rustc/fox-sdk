import * as core from '../../core';
import { ParameterType, parameterType } from '../field-lists/models/parameter-type';
import {
  ParameterValuesItem,
  parameterValuesItem,
  parameterValuesItemRequest,
  parameterValuesItemResponse,
} from '../field-lists/models/parameter-values-item';
import { ParameterValues } from './parameter-values';

/**
 * Parameter values for a field list input item.
 */
export interface Parameter {
  '@type': ParameterType;
  /** The name of the parameter. */
  parameter: string;
  /** A list of parameter values. The values can be either strings (max length: 32 characters) or integers, depending on the parameter type. */
  values: ParameterValuesItem[];
}

export namespace Parameter {
  export type _Type = ParameterType;
  export type Values = ParameterValues;
}

/**
 * Cast schema for the Parameter model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const parameter = core.cast.identity<Parameter>();

/**
 * Cast schema for mapping API responses to the Parameter application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const parameterResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'parameter', 'values']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      parameter: raw['parameter'],
      values: raw['values'],
    };
  },
  ['@type', 'parameter', 'values'],
);

/**
 * Cast schema for mapping the Parameter application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const parameterRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], parameter: raw['parameter'], values: raw['values'] };
  },
  ['@type', 'parameter', 'values'],
);
