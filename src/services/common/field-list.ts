import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  FieldListTypeWithoutHistoryAndData,
  fieldListTypeWithoutHistoryAndData,
} from './field-list-type-without-history-and-data';
import {
  FieldListItem,
  fieldListItem,
  fieldListItemRequest,
  fieldListItemResponse,
} from './field-list-item';
import {
  PaginatedView,
  paginatedView,
  paginatedViewRequest,
  paginatedViewResponse,
} from './paginated-view';
import { Id } from './id';
import { ComponentIdentifier } from './component-identifier';
import { ReferencedByActiveRequests } from './referenced-by-active-requests';
import { Title } from './title';
import { Description } from './description';
import { Issued } from './issued';
import { Modified } from './modified';
import { TotalItems } from './total-items';
import { PageCount } from './page-count';

export interface FieldList {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  /** JSON-LD type */
  '@type': FieldListTypeWithoutHistoryAndData;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: ComponentIdentifier;
  /** When ReferencedByActiveRequests is true, DL REST API is indicating that this resource is referenced by an active scheduled request. For fieldLists and Triggers, the consequence of this is that only the title and description may be PATCHed; Attempting PATCH other properties of a fieldList or Trigger which is referenced by an active scheduled request will fail, returning a 400 response code. This constraint does not exist for Universes which can be patched even when linked to an active request: Universes are always evaluated at execution time for a scheduled request. */
  referencedByActiveRequests: ReferencedByActiveRequests;
  /** A list of field IRIs with additional properties. */
  contains: FieldListItem[];
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** Dublin Core Metadata Terms, see 'issued' */
  issued: Issued;
  /** Dublin Core Metadata Terms, see 'modified' */
  modified: Modified;
  /** The total number of items in the response. */
  totalItems: TotalItems;
  /** The total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  pageCount: PageCount;
  /** Metadata to indicate the first, last, previous, next, and current page, as well as the total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  view: PaginatedView;
}

/**
 * Cast schema for the FieldList model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fieldList = core.cast.identity<FieldList>();

/**
 * Cast schema for mapping API responses to the FieldList application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldListResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@id',
      '@type',
      'identifier',
      'referencedByActiveRequests',
      'contains',
      'title',
      'description',
      'issued',
      'modified',
      'totalItems',
      'pageCount',
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
      identifier: raw['identifier'],
      referencedByActiveRequests: raw['referencedByActiveRequests'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : fieldListItemResponse.parse(v),
          )
        : (raw['contains'] as any),
      title: raw['title'],
      description: raw['description'],
      issued: raw['issued'],
      modified: raw['modified'],
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewResponse.parse(raw['view']),
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'identifier',
    'referencedByActiveRequests',
    'contains',
    'title',
    'issued',
    'modified',
    'totalItems',
    'pageCount',
    'view',
  ],
);

/**
 * Cast schema for mapping the FieldList application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldListRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      identifier: raw['identifier'],
      referencedByActiveRequests: raw['referencedByActiveRequests'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : fieldListItemRequest.parse(v),
          )
        : (raw['contains'] as any),
      title: raw['title'],
      description: raw['description'],
      issued: raw['issued'],
      modified: raw['modified'],
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewRequest.parse(raw['view']),
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'identifier',
    'referencedByActiveRequests',
    'contains',
    'title',
    'issued',
    'modified',
    'totalItems',
    'pageCount',
    'view',
  ],
);
