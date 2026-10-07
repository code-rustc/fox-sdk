import * as core from '../../core';
import { DataDlOptionsType, dataDlOptionsType } from '../requests/models/data-dl-options-type';

export interface DataDlOptions {
  /** JSON-LD type */
  _type: 'DataDl';
}

export namespace DataDlOptions {
  export type _Type = DataDlOptionsType;
}

/**
 * Cast schema for the DataDlOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const dataDlOptions = core.cast.identity<DataDlOptions>();

/**
 * Cast schema for mapping API responses to the DataDlOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const dataDlOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'] };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the DataDlOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const dataDlOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'] };
  },
  ['@type'],
);
