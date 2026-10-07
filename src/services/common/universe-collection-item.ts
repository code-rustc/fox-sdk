import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  UniverseCollectionItemType,
  universeCollectionItemType,
} from '../universes/models/universe-collection-item-type';
import {
  UniverseSummary,
  universeSummary,
  universeSummaryRequest,
  universeSummaryResponse,
} from './universe-summary';
import { Id } from './id';
import { Identifier } from './identifier';

export interface UniverseCollectionItem {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  /** JSON-LD type */
  '@type': UniverseCollectionItemType;
  /** The paginated elements of this collection. */
  contains: UniverseSummary[];
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
}

export namespace UniverseCollectionItem {
  export type _Type = UniverseCollectionItemType;
}

/**
 * Cast schema for the UniverseCollectionItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const universeCollectionItem = core.cast.identity<UniverseCollectionItem>();

/**
 * Cast schema for mapping API responses to the UniverseCollectionItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const universeCollectionItemResponse = core.cast.object(
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
            v == null ? v : universeSummaryResponse.parse(v),
          )
        : (raw['contains'] as any),
      identifier: raw['identifier'],
    };
  },
  ['@context', '@id', '@type', 'contains', 'identifier'],
);

/**
 * Cast schema for mapping the UniverseCollectionItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const universeCollectionItemRequest = core.cast.object(
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
            v == null ? v : universeSummaryRequest.parse(v),
          )
        : (raw['contains'] as any),
      identifier: raw['identifier'],
    };
  },
  ['@context', '@id', '@type', 'contains', 'identifier'],
);
