import * as core from '../../core';
import {
  ContentMember,
  contentMember,
  contentMemberRequest,
  contentMemberResponse,
} from './content-member';
import {
  ContentPaginatedView,
  contentPaginatedView,
  contentPaginatedViewRequest,
  contentPaginatedViewResponse,
} from './content-paginated-view';

/**
 * A content collection for a given catalog.
 */
export interface ContentCollectionItem {
  /** Elements of this page of paginated data */
  contains: ContentMember[];
  /** Pagination data. */
  view: ContentPaginatedView;
}

/**
 * Cast schema for the ContentCollectionItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const contentCollectionItem = core.cast.identity<ContentCollectionItem>();

/**
 * Cast schema for mapping API responses to the ContentCollectionItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const contentCollectionItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['contains', 'view']);
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
            v == null ? v : contentMemberResponse.parse(v),
          )
        : (raw['contains'] as any),
      view: raw['view'] == null ? raw['view'] : contentPaginatedViewResponse.parse(raw['view']),
    };
  },
  ['contains', 'view'],
);

/**
 * Cast schema for mapping the ContentCollectionItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const contentCollectionItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : contentMemberRequest.parse(v),
          )
        : (raw['contains'] as any),
      view: raw['view'] == null ? raw['view'] : contentPaginatedViewRequest.parse(raw['view']),
    };
  },
  ['contains', 'view'],
);
