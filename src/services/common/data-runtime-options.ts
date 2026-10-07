import * as core from '../../core';
import {
  DataRuntimeOptionsType,
  dataRuntimeOptionsType,
} from '../requests/models/data-runtime-options-type';
import {
  DataRuntimeOptionsPrecision,
  dataRuntimeOptionsPrecision,
} from '../requests/models/data-runtime-options-precision';

/**
 * Runtime options for data requests.
 */
export interface DataRuntimeOptions {
  /** JSON-LD type */
  '@type': DataRuntimeOptionsType;
  /** Allows you to set the output decimal precision for numeric fields in the request. */
  precision?: DataRuntimeOptionsPrecision | undefined;
}

export namespace DataRuntimeOptions {
  export type _Type = DataRuntimeOptionsType;
  export type Precision = DataRuntimeOptionsPrecision;
}

/**
 * Cast schema for the DataRuntimeOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const dataRuntimeOptions = core.cast.identity<DataRuntimeOptions>();

/**
 * Cast schema for mapping API responses to the DataRuntimeOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const dataRuntimeOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'precision']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'], precision: raw['precision'] };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the DataRuntimeOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const dataRuntimeOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], precision: raw['precision'] };
  },
  ['@type'],
);
