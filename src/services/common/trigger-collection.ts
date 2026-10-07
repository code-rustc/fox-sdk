import * as core from '../../core';
import {
  PaginatedView,
  paginatedView,
  paginatedViewRequest,
  paginatedViewResponse,
} from './paginated-view';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  TriggerCollectionType,
  triggerCollectionType,
} from '../triggers/models/trigger-collection-type';
import {
  TriggerSummary,
  triggerSummary,
  triggerSummaryRequest,
  triggerSummaryResponse,
} from './trigger-summary';
import { Components, components, componentsRequest, componentsResponse } from './components';
import {
  TriggerCollectionItem,
  triggerCollectionItem,
  triggerCollectionItemRequest,
  triggerCollectionItemResponse,
} from './trigger-collection-item';
import { Title } from './title';
import { Description } from './description';
import { TotalItems } from './total-items';
import { PageCount } from './page-count';
import { Id } from './id';
import { Identifier } from './identifier';

export interface TriggerCollection extends Components, TriggerCollectionItem {
  /** JSON-LD type */
  '@type': TriggerCollectionType;
}

export namespace TriggerCollection {
  export type _Type = TriggerCollectionType;
}

/**
 * Cast schema for the TriggerCollection model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const triggerCollection = core.cast.identity<TriggerCollection>();

/**
 * Cast schema for mapping API responses to the TriggerCollection application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const triggerCollectionResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'title',
      'description',
      'totalItems',
      'pageCount',
      'view',
      '@context',
      '@id',
      '@type',
      'contains',
      'identifier',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      title: raw['title'],
      description: raw['description'],
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewResponse.parse(raw['view']),
      '@context':
        raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : triggerSummaryResponse.parse(v),
          )
        : (raw['contains'] as any),
      identifier: raw['identifier'],
    };
  },
  [
    'title',
    'totalItems',
    'pageCount',
    'view',
    '@context',
    '@id',
    '@type',
    'contains',
    'identifier',
  ],
);

/**
 * Cast schema for mapping the TriggerCollection application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const triggerCollectionRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      title: raw['title'],
      description: raw['description'],
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewRequest.parse(raw['view']),
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : triggerSummaryRequest.parse(v),
          )
        : (raw['contains'] as any),
      identifier: raw['identifier'],
    };
  },
  [
    'title',
    'totalItems',
    'pageCount',
    'view',
    '@context',
    '@id',
    '@type',
    'contains',
    'identifier',
  ],
);
