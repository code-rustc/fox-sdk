import * as core from '../../core';
import {
  PaginatedView,
  paginatedView,
  paginatedViewRequest,
  paginatedViewResponse,
} from './paginated-view';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  RequestCollectionType,
  requestCollectionType,
} from '../requests/models/request-collection-type';
import {
  RequestSummary,
  requestSummary,
  requestSummaryRequest,
  requestSummaryResponse,
} from './request-summary';
import { Components, components, componentsRequest, componentsResponse } from './components';
import {
  RequestCollectionItem,
  requestCollectionItem,
  requestCollectionItemRequest,
  requestCollectionItemResponse,
} from './request-collection-item';
import { Title } from './title';
import { Description } from './description';
import { TotalItems } from './total-items';
import { PageCount } from './page-count';
import { Id } from './id';
import { Identifier } from './identifier';

export interface RequestCollection extends Components, RequestCollectionItem {
  /** JSON-LD type */
  '@type': RequestCollectionType;
}

export namespace RequestCollection {
  export type _Type = RequestCollectionType;
}

/**
 * Cast schema for the RequestCollection model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestCollection = core.cast.identity<RequestCollection>();

/**
 * Cast schema for mapping API responses to the RequestCollection application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestCollectionResponse = core.cast.object(
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
      'identifier',
      'contains',
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
      identifier: raw['identifier'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : requestSummaryResponse.parse(v),
          )
        : (raw['contains'] as any),
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
    'identifier',
    'contains',
  ],
);

/**
 * Cast schema for mapping the RequestCollection application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestCollectionRequest = core.cast.object(
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
      identifier: raw['identifier'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : requestSummaryRequest.parse(v),
          )
        : (raw['contains'] as any),
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
    'identifier',
    'contains',
  ],
);
