import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  FieldListCollectionItemType,
  fieldListCollectionItemType,
} from '../field-lists/models/field-list-collection-item-type';
import {
  FieldListSummary,
  fieldListSummary,
  fieldListSummaryRequest,
  fieldListSummaryResponse,
} from './field-list-summary';
import { Id } from './id';
import { Identifier } from './identifier';

export interface FieldListCollectionItem {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  /** JSON-LD type */
  '@type': FieldListCollectionItemType;
  /** The paginated elements of this collection. */
  contains: FieldListSummary[];
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
}

export namespace FieldListCollectionItem {
  export type _Type = FieldListCollectionItemType;
}

/**
 * Cast schema for the FieldListCollectionItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fieldListCollectionItem = core.cast.identity<FieldListCollectionItem>();

/**
 * Cast schema for mapping API responses to the FieldListCollectionItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldListCollectionItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@context', '@id', '@type', 'contains', 'identifier']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@context':
        raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : fieldListSummaryResponse.parse(v),
          )
        : (raw['contains'] as any),
      identifier: raw['identifier'],
    };
  },
  ['@context', '@id', '@type', 'contains', 'identifier'],
);

/**
 * Cast schema for mapping the FieldListCollectionItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldListCollectionItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : fieldListSummaryRequest.parse(v),
          )
        : (raw['contains'] as any),
      identifier: raw['identifier'],
    };
  },
  ['@context', '@id', '@type', 'contains', 'identifier'],
);
