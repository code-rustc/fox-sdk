import * as core from '../../core';
import {
  BulkPackageMember,
  bulkPackageMember,
  bulkPackageMemberRequest,
  bulkPackageMemberResponse,
} from './bulk-package-member';
import {
  BulkPackageCollectionView,
  bulkPackageCollectionView,
  bulkPackageCollectionViewRequest,
  bulkPackageCollectionViewResponse,
} from '../packages/models/bulk-package-collection-view';
import { TotalItems } from './total-items';

/**
 * Bulk Package Collection.
 */
export interface BulkPackageCollection {
  /** Elements of this page of paginated data */
  contains: BulkPackageMember[];
  /** Number of items on this page. */
  pageCount: number;
  /** The total number of items in the response. */
  totalItems: TotalItems;
  /** Pagination links for the current data page */
  view: BulkPackageCollectionView;
}

export namespace BulkPackageCollection {
  export interface View {
    first: BulkPackageCollectionView['first'];
    next: BulkPackageCollectionView['next'];
    last: BulkPackageCollectionView['last'];
  }
}

/**
 * Cast schema for the BulkPackageCollection model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageCollection = core.cast.identity<BulkPackageCollection>();

/**
 * Cast schema for mapping API responses to the BulkPackageCollection application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageCollectionResponse = core.cast.object(
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
            v == null ? v : bulkPackageMemberResponse.parse(v),
          )
        : (raw['contains'] as any),
      pageCount: raw['pageCount'],
      totalItems: raw['totalItems'],
      view:
        raw['view'] == null ? raw['view'] : bulkPackageCollectionViewResponse.parse(raw['view']),
    };
  },
  ['contains', 'pageCount', 'totalItems', 'view'],
);

/**
 * Cast schema for mapping the BulkPackageCollection application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageCollectionRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberRequest.parse(v),
          )
        : (raw['contains'] as any),
      pageCount: raw['pageCount'],
      totalItems: raw['totalItems'],
      view: raw['view'] == null ? raw['view'] : bulkPackageCollectionViewRequest.parse(raw['view']),
    };
  },
  ['contains', 'pageCount', 'totalItems', 'view'],
);
