import * as core from '../../core';
import {
  RequestHistoryFieldListType,
  requestHistoryFieldListType,
} from '../requests/models/request-history-field-list-type';
import {
  HistoryFieldListInputItem,
  historyFieldListInputItem,
  historyFieldListInputItemRequest,
  historyFieldListInputItemResponse,
} from './history-field-list-input-item';
import { HistoryFieldListInputItems } from './history-field-list-input-items';

/**
 * The POST payload required to create a new History field list directly within a Request.
 */
export interface RequestHistoryFieldList {
  /** JSON-LD type */
  '@type': RequestHistoryFieldListType;
  /** A list of field name IRIs conforming to `https://api.bloomberg.com/eap/catalogs/bbg/fields/{field}`, with optional history-specific properties. */
  contains: HistoryFieldListInputItems;
}

export namespace RequestHistoryFieldList {
  export type _Type = RequestHistoryFieldListType;
}

/**
 * Cast schema for the RequestHistoryFieldList model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestHistoryFieldList = core.cast.identity<RequestHistoryFieldList>();

/**
 * Cast schema for mapping API responses to the RequestHistoryFieldList application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestHistoryFieldListResponse = core.cast.object(
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
 * Cast schema for mapping the RequestHistoryFieldList application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestHistoryFieldListRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], contains: raw['contains'] };
  },
  ['@type', 'contains'],
);
