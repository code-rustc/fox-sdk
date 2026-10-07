import * as core from '../../core';
import { EnumsItem, enumsItem, enumsItemRequest, enumsItemResponse } from './enums-item';
import {
  PaginatedViewV2,
  paginatedViewV2,
  paginatedViewV2Request,
  paginatedViewV2Response,
} from './paginated-view-v2';
import { TotalItems } from './total-items';
import { PageCount } from './page-count';

/**
 * Response schema for listing enums.
 */
export interface EnumsResponseSchema {
  /** Elements of this page of paginated data */
  contains: EnumsItem[];
  /** The total number of items in the response. */
  totalItems: TotalItems;
  /** The total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  pageCount: PageCount;
  /** Metadata to indicate the first, last, previous, next, and current page, as well as the total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  view: PaginatedViewV2;
}

/**
 * Cast schema for the EnumsResponseSchema model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const enumsResponseSchema = core.cast.identity<EnumsResponseSchema>();

/**
 * Cast schema for mapping API responses to the EnumsResponseSchema application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const enumsResponseSchemaResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['contains', 'totalItems', 'pageCount', 'view']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) => (v == null ? v : enumsItemResponse.parse(v)))
        : (raw['contains'] as any),
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewV2Response.parse(raw['view']),
    };
  },
  ['contains', 'totalItems', 'pageCount', 'view'],
);

/**
 * Cast schema for mapping the EnumsResponseSchema application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const enumsResponseSchemaRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) => (v == null ? v : enumsItemRequest.parse(v)))
        : (raw['contains'] as any),
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewV2Request.parse(raw['view']),
    };
  },
  ['contains', 'totalItems', 'pageCount', 'view'],
);
