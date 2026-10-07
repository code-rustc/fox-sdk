import * as core from '../../../core';
import { First } from '../../common/first';
import { Next } from '../../common/next';
import { Last } from '../../common/last';

/**
 * Pagination links for the current data page
 */
export interface BulkProductCollectionView {
  /** Metadata to indicate the first page of the response. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  first: First;
  /** Metadata to indicate the next page of the response. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  next: Next;
  /** Metadata to indicate the last page of the response. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  last: Last;
}

/**
 * Cast schema for the BulkProductCollectionView model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkProductCollectionView = core.cast.identity<BulkProductCollectionView>();

/**
 * Cast schema for mapping API responses to the BulkProductCollectionView application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkProductCollectionViewResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['first', 'next', 'last']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, first: raw['first'], next: raw['next'], last: raw['last'] };
  },
  ['first', 'next', 'last'],
);

/**
 * Cast schema for mapping the BulkProductCollectionView application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkProductCollectionViewRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { first: raw['first'], next: raw['next'], last: raw['last'] };
  },
  ['first', 'next', 'last'],
);
