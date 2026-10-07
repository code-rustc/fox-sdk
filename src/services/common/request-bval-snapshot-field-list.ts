import * as core from '../../core';
import {
  RequestBvalSnapshotFieldListType,
  requestBvalSnapshotFieldListType,
} from '../requests/models/request-bval-snapshot-field-list-type';
import {
  FieldListInputItem,
  fieldListInputItem,
  fieldListInputItemRequest,
  fieldListInputItemResponse,
} from './field-list-input-item';
import { FieldListInputItems } from './field-list-input-items';

/**
 * The POST payload required to create a new BVAL Snapshot field list directly within a request.
 */
export interface RequestBvalSnapshotFieldList {
  /** JSON-LD type */
  '@type': RequestBvalSnapshotFieldListType;
  /** A list of field name IRIs conforming to `https://api.bloomberg.com/eap/catalogs/bbg/fields/{field}`. */
  contains: FieldListInputItems;
}

export namespace RequestBvalSnapshotFieldList {
  export type _Type = RequestBvalSnapshotFieldListType;
}

/**
 * Cast schema for the RequestBvalSnapshotFieldList model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestBvalSnapshotFieldList = core.cast.identity<RequestBvalSnapshotFieldList>();

/**
 * Cast schema for mapping API responses to the RequestBvalSnapshotFieldList application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestBvalSnapshotFieldListResponse = core.cast.object(
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
 * Cast schema for mapping the RequestBvalSnapshotFieldList application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestBvalSnapshotFieldListRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], contains: raw['contains'] };
  },
  ['@type', 'contains'],
);
