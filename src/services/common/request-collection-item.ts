import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  RequestCollectionItemType,
  requestCollectionItemType,
} from '../requests/models/request-collection-item-type';
import {
  RequestSummary,
  requestSummary,
  requestSummaryRequest,
  requestSummaryResponse,
} from './request-summary';
import { Id } from './id';
import { Identifier } from './identifier';

/**
 * A request collection for a given catalog.
 */
export interface RequestCollectionItem {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  /** JSON-LD type */
  '@type': RequestCollectionItemType;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** Elements of this page of paginated data */
  contains: RequestSummary[];
}

export namespace RequestCollectionItem {
  export type _Type = RequestCollectionItemType;
}

/**
 * Cast schema for the RequestCollectionItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestCollectionItem = core.cast.identity<RequestCollectionItem>();

/**
 * Cast schema for mapping API responses to the RequestCollectionItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestCollectionItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@context', '@id', '@type', 'identifier', 'contains']);
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
      identifier: raw['identifier'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : requestSummaryResponse.parse(v),
          )
        : (raw['contains'] as any),
    };
  },
  ['@context', '@id', '@type', 'identifier', 'contains'],
);

/**
 * Cast schema for mapping the RequestCollectionItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestCollectionItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      identifier: raw['identifier'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : requestSummaryRequest.parse(v),
          )
        : (raw['contains'] as any),
    };
  },
  ['@context', '@id', '@type', 'identifier', 'contains'],
);
