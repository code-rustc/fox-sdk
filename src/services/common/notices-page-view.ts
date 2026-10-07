import * as core from '../../core';
import { Next } from './next';
import { TotalItems } from './total-items';

/**
 * Current notices list pagination information
 */
export interface NoticesPageView {
  /** Metadata to indicate the next page of the response. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  next?: Next | undefined;
  /** The total number of items in the response. */
  totalItems?: TotalItems | undefined;
}

/**
 * Cast schema for the NoticesPageView model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const noticesPageView = core.cast.identity<NoticesPageView>();

/**
 * Cast schema for mapping API responses to the NoticesPageView application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const noticesPageViewResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['next', 'totalItems']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return { ...__extras, next: raw['next'], totalItems: raw['totalItems'] };
}, []);

/**
 * Cast schema for mapping the NoticesPageView application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const noticesPageViewRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return { next: raw['next'], totalItems: raw['totalItems'] };
}, []);
