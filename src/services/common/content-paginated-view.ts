import * as core from '../../core';
import { ContentNext } from './content-next';

/**
 * Pagination data.
 */
export interface ContentPaginatedView {
  /** Next page pointer. */
  next: ContentNext;
}

/**
 * Cast schema for the ContentPaginatedView model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const contentPaginatedView = core.cast.identity<ContentPaginatedView>();

/**
 * Cast schema for mapping API responses to the ContentPaginatedView application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const contentPaginatedViewResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['next']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, next: raw['next'] };
  },
  ['next'],
);

/**
 * Cast schema for mapping the ContentPaginatedView application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const contentPaginatedViewRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { next: raw['next'] };
  },
  ['next'],
);
