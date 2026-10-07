import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  DatasetMember,
  datasetMember,
  datasetMemberRequest,
  datasetMemberResponse,
} from './dataset-member';
import {
  SearchFacets,
  searchFacets,
  searchFacetsRequest,
  searchFacetsResponse,
} from './search-facets';
import {
  PaginatedView,
  paginatedView,
  paginatedViewRequest,
  paginatedViewResponse,
} from './paginated-view';
import { Id } from './id';
import { Types } from './types';
import { Title } from './title';
import { Description } from './description';
import { Identifier } from './identifier';
import { DatasetMembers } from './dataset-members';
import { TotalItems } from './total-items';
import { PageCount } from './page-count';

export interface Datasets {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  /** Items in the type */
  '@type': Types;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description: Description;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** Members of this datasets page of paginated data */
  contains: DatasetMembers;
  /** The total number of items in the response. */
  totalItems: TotalItems;
  /** The total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  pageCount: PageCount;
  /** List of all Bloomberg Bulk facets and summary information. This only applies when catalog is `bbg`. */
  search?: SearchFacets | undefined;
  /** Metadata to indicate the first, last, previous, next, and current page, as well as the total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  view: PaginatedView;
}

/**
 * Cast schema for the Datasets model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const datasets = core.cast.identity<Datasets>();

/**
 * Cast schema for mapping API responses to the Datasets application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const datasetsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@id',
      '@type',
      'title',
      'description',
      'identifier',
      'contains',
      'totalItems',
      'pageCount',
      'search',
      'view',
    ]);
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
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : datasetMemberResponse.parse(v),
          )
        : (raw['contains'] as any),
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      search: raw['search'] == null ? raw['search'] : searchFacetsResponse.parse(raw['search']),
      view: raw['view'] == null ? raw['view'] : paginatedViewResponse.parse(raw['view']),
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'title',
    'description',
    'identifier',
    'contains',
    'totalItems',
    'pageCount',
    'view',
  ],
);

/**
 * Cast schema for mapping the Datasets application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const datasetsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : datasetMemberRequest.parse(v),
          )
        : (raw['contains'] as any),
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      search: raw['search'] == null ? raw['search'] : searchFacetsRequest.parse(raw['search']),
      view: raw['view'] == null ? raw['view'] : paginatedViewRequest.parse(raw['view']),
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'title',
    'description',
    'identifier',
    'contains',
    'totalItems',
    'pageCount',
    'view',
  ],
);
