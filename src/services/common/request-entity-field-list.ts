import * as core from '../../core';
import {
  RequestEntityFieldListType,
  requestEntityFieldListType,
} from '../requests/models/request-entity-field-list-type';
import {
  FieldListInputItem,
  fieldListInputItem,
  fieldListInputItemRequest,
  fieldListInputItemResponse,
} from './field-list-input-item';
import { FieldListInputItems } from './field-list-input-items';

/**
 * The inline POST payload required to create a new Entity field list.
 */
export interface RequestEntityFieldList {
  /** JSON-LD type */
  '@type': RequestEntityFieldListType;
  /** A list of field name IRIs conforming to `https://api.bloomberg.com/eap/catalogs/bbg/fields/{field}`. */
  contains: FieldListInputItems;
}

export namespace RequestEntityFieldList {
  export type _Type = RequestEntityFieldListType;
}

/**
 * Cast schema for the RequestEntityFieldList model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestEntityFieldList = core.cast.identity<RequestEntityFieldList>();

/**
 * Cast schema for mapping API responses to the RequestEntityFieldList application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestEntityFieldListResponse = core.cast.object(
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
 * Cast schema for mapping the RequestEntityFieldList application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestEntityFieldListRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], contains: raw['contains'] };
  },
  ['@type', 'contains'],
);
