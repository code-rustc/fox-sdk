import * as core from '../../core';
import {
  RequestDataFieldListType,
  requestDataFieldListType,
} from '../requests/models/request-data-field-list-type';
import {
  DataFieldListInputItem,
  dataFieldListInputItem,
  dataFieldListInputItemRequest,
  dataFieldListInputItemResponse,
} from './data-field-list-input-item';
import { DataFieldListInputItems } from './data-field-list-input-items';

/**
 * The POST payload required to create a new Data field list directly within a Request.
 */
export interface RequestDataFieldList {
  /** JSON-LD type */
  '@type': RequestDataFieldListType;
  /** A list of field name IRIs conforming to `https://api.bloomberg.com/eap/catalogs/bbg/fields/{field}`, with optional data-specific properties. */
  contains: DataFieldListInputItems;
}

export namespace RequestDataFieldList {
  export type _Type = RequestDataFieldListType;
}

/**
 * Cast schema for the RequestDataFieldList model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestDataFieldList = core.cast.identity<RequestDataFieldList>();

/**
 * Cast schema for mapping API responses to the RequestDataFieldList application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestDataFieldListResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'contains']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'], contains: raw['contains'] };
  },
  ['@type', 'contains'],
);

/**
 * Cast schema for mapping the RequestDataFieldList application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestDataFieldListRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], contains: raw['contains'] };
  },
  ['@type', 'contains'],
);
