import * as core from '../../core';
import { PaginatedViewType, paginatedViewType } from '../datasets/models/paginated-view-type';
import { Id } from './id';
import { First } from './first';
import { Last } from './last';
import { Next } from './next';
import { Previous } from './previous';

/**
 * Metadata to indicate the first, last, previous, next, and current page, as well as the total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805).
 */
export interface PaginatedView {
  '@type': PaginatedViewType;
  /** JSON-LD id */
  '@id': Id;
  /** Metadata to indicate the first page of the response. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  first: First;
  /** Metadata to indicate the last page of the response. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  last: Last;
  /** Metadata to indicate the next page of the response. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  next?: Next | undefined;
  /** Metadata to indicate the previous page of the response. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  previous?: Previous | undefined;
}

export namespace PaginatedView {
  export type _Type = PaginatedViewType;
}

/**
 * Cast schema for the PaginatedView model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const paginatedView = core.cast.identity<PaginatedView>();

/**
 * Cast schema for mapping API responses to the PaginatedView application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const paginatedViewResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', '@id', 'first', 'last', 'next', 'previous']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      '@id': raw['@id'],
      first: raw['first'],
      last: raw['last'],
      next: raw['next'],
      previous: raw['previous'],
    };
  },
  ['@type', '@id', 'first', 'last'],
);

/**
 * Cast schema for mapping the PaginatedView application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const paginatedViewRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      '@id': raw['@id'],
      first: raw['first'],
      last: raw['last'],
      next: raw['next'],
      previous: raw['previous'],
    };
  },
  ['@type', '@id', 'first', 'last'],
);
