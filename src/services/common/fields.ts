import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  FieldProperties,
  fieldProperties,
  fieldPropertiesRequest,
  fieldPropertiesResponse,
} from './field-properties';
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
import { FieldsTitle } from './fields-title';
import { FieldsDescription } from './fields-description';
import { FieldsIdentifier } from './fields-identifier';
import { TotalItems } from './total-items';
import { PageCount } from './page-count';
import { FieldContains } from './field-contains';

export interface Fields {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  /** Items in the type */
  '@type': Types;
  /** The name of the field as shown on data.bloomberg.com. For more: [data.bloomberg.com > Bloomberg Fields](https://data.bloomberg.com/search/fields/#displayMode=title). */
  title: FieldsTitle;
  /** The description of the field as shown on data.bloomberg.com. For more: [data.bloomberg.com > Bloomberg Fields](https://data.bloomberg.com/search/fields/#displayMode=title). */
  description: FieldsDescription;
  /** The unique identifier for the field. For more: [Field Data Properties and Values](https://developer.bloomberg.com/portal/products/dl?chapterId=4561#dc180). */
  identifier: FieldsIdentifier;
  /** The total number of items in the response. */
  totalItems: TotalItems;
  /** The total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  pageCount: PageCount;
  /** Field members of this page of paginated data */
  contains: FieldContains;
  /** List of all Bloomberg Bulk facets and summary information. This only applies when catalog is `bbg`. */
  search?: SearchFacets | undefined;
  /** Metadata to indicate the first, last, previous, next, and current page, as well as the total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  view: PaginatedView;
}

/**
 * Cast schema for the Fields model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fields = core.cast.identity<Fields>();

/**
 * Cast schema for mapping API responses to the Fields application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldsResponse = core.cast.object(
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
      'totalItems',
      'pageCount',
      'contains',
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
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : fieldPropertiesResponse.parse(v),
          )
        : (raw['contains'] as any),
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
    'totalItems',
    'pageCount',
    'contains',
    'view',
  ],
);

/**
 * Cast schema for mapping the Fields application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldsRequest = core.cast.object(
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
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : fieldPropertiesRequest.parse(v),
          )
        : (raw['contains'] as any),
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
    'totalItems',
    'pageCount',
    'contains',
    'view',
  ],
);
