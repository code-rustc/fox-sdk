import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  SnapshotMember,
  snapshotMember,
  snapshotMemberRequest,
  snapshotMemberResponse,
} from './snapshot-member';
import {
  SnapshotFilters,
  snapshotFilters,
  snapshotFiltersRequest,
  snapshotFiltersResponse,
} from './snapshot-filters';
import {
  PaginatedView,
  paginatedView,
  paginatedViewRequest,
  paginatedViewResponse,
} from './paginated-view';
import { Shortcut, shortcut, shortcutRequest, shortcutResponse } from './shortcut';
import { Id } from './id';
import { Types } from './types';
import { SnapshotsTitle } from './snapshots-title';
import { Description } from './description';
import { Identifier } from './identifier';
import { SnapshotMembers } from './snapshot-members';
import { TotalItems } from './total-items';
import { PageCount } from './page-count';
import { Shortcuts } from './shortcuts';

export interface Snapshots {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  /** Items in the type */
  '@type': Types;
  /** The name of the snapshot metadata for the DL Bulk request or the name of the snapshot itself for DL Per Security requests. For more: [Finding Snapshots](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=5595#ds3). */
  title: SnapshotsTitle;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description: Description;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** Members of this snapshot page of paginated data */
  contains: SnapshotMembers;
  /** The total number of items in the response. */
  totalItems: TotalItems;
  /** The total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  pageCount: PageCount;
  /** List of all Bloomberg Bulk facets and summary information */
  search?: SnapshotFilters | undefined;
  /** Metadata to indicate the first, last, previous, next, and current page, as well as the total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  view: PaginatedView;
  /** A list of shortcuts */
  shortcuts: Shortcuts;
}

/**
 * Cast schema for the Snapshots model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const snapshots = core.cast.identity<Snapshots>();

/**
 * Cast schema for mapping API responses to the Snapshots application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const snapshotsResponse = core.cast.object(
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
      'shortcuts',
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
            v == null ? v : snapshotMemberResponse.parse(v),
          )
        : (raw['contains'] as any),
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      search: raw['search'] == null ? raw['search'] : snapshotFiltersResponse.parse(raw['search']),
      view: raw['view'] == null ? raw['view'] : paginatedViewResponse.parse(raw['view']),
      shortcuts: Array.isArray(raw['shortcuts'])
        ? (raw['shortcuts'] as any[]).map((v: any) => (v == null ? v : shortcutResponse.parse(v)))
        : (raw['shortcuts'] as any),
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
    'shortcuts',
  ],
);

/**
 * Cast schema for mapping the Snapshots application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const snapshotsRequest = core.cast.object(
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
            v == null ? v : snapshotMemberRequest.parse(v),
          )
        : (raw['contains'] as any),
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      search: raw['search'] == null ? raw['search'] : snapshotFiltersRequest.parse(raw['search']),
      view: raw['view'] == null ? raw['view'] : paginatedViewRequest.parse(raw['view']),
      shortcuts: Array.isArray(raw['shortcuts'])
        ? (raw['shortcuts'] as any[]).map((v: any) => (v == null ? v : shortcutRequest.parse(v)))
        : (raw['shortcuts'] as any),
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
    'shortcuts',
  ],
);
