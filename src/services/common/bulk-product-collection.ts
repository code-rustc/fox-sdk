import * as core from '../../core';
import {
  BulkProductMember,
  bulkProductMember,
  bulkProductMemberRequest,
  bulkProductMemberResponse,
} from './bulk-product-member';
import {
  BulkProductCollectionView,
  bulkProductCollectionView,
  bulkProductCollectionViewRequest,
  bulkProductCollectionViewResponse,
} from '../products/models/bulk-product-collection-view';
import { TotalItems } from './total-items';

/**
 * Bulk Product Collection.
 */
export interface BulkProductCollection {
  /** Elements of this page of paginated data */
  contains: BulkProductMember[];
  /** Number of items on this page. */
  pageCount: number;
  /** The total number of items in the response. */
  totalItems: TotalItems;
  /** Pagination links for the current data page */
  view: BulkProductCollectionView;
}

export namespace BulkProductCollection {
  export interface View {
    first: BulkProductCollectionView['first'];
    next: BulkProductCollectionView['next'];
    last: BulkProductCollectionView['last'];
  }
}

/**
 * Cast schema for the BulkProductCollection model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkProductCollection = core.cast.identity<BulkProductCollection>();

/**
 * Cast schema for mapping API responses to the BulkProductCollection application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkProductCollectionResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['contains', 'pageCount', 'totalItems', 'view']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : bulkProductMemberResponse.parse(v),
          )
        : (raw['contains'] as any),
      pageCount: raw['pageCount'],
      totalItems: raw['totalItems'],
      view:
        raw['view'] == null ? raw['view'] : bulkProductCollectionViewResponse.parse(raw['view']),
    };
  },
  ['contains', 'pageCount', 'totalItems', 'view'],
);

/**
 * Cast schema for mapping the BulkProductCollection application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkProductCollectionRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : bulkProductMemberRequest.parse(v),
          )
        : (raw['contains'] as any),
      pageCount: raw['pageCount'],
      totalItems: raw['totalItems'],
      view: raw['view'] == null ? raw['view'] : bulkProductCollectionViewRequest.parse(raw['view']),
    };
  },
  ['contains', 'pageCount', 'totalItems', 'view'],
);
