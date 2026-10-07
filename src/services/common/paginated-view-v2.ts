import * as core from '../../core';
import { First } from './first';
import { Last } from './last';
import { Next } from './next';

/**
 * Metadata to indicate the first, last, previous, next, and current page, as well as the total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805).
 */
export interface PaginatedViewV2 {
  /** Metadata to indicate the first page of the response. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  first: First;
  /** Metadata to indicate the last page of the response. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  last: Last;
  /** Metadata to indicate the next page of the response. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  next?: Next | undefined;
}

/**
 * Cast schema for the PaginatedViewV2 model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const paginatedViewV2 = core.cast.identity<PaginatedViewV2>();

/**
 * Cast schema for mapping API responses to the PaginatedViewV2 application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const paginatedViewV2Response = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['first', 'last', 'next']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, first: raw['first'], last: raw['last'], next: raw['next'] };
  },
  ['first', 'last'],
);

/**
 * Cast schema for mapping the PaginatedViewV2 application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const paginatedViewV2Request = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { first: raw['first'], last: raw['last'], next: raw['next'] };
  },
  ['first', 'last'],
);
