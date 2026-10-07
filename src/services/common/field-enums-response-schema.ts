import * as core from '../../core';
import {
  FieldEnumsItem,
  fieldEnumsItem,
  fieldEnumsItemRequest,
  fieldEnumsItemResponse,
} from './field-enums-item';
import {
  PaginatedViewV2,
  paginatedViewV2,
  paginatedViewV2Request,
  paginatedViewV2Response,
} from './paginated-view-v2';
import { FieldIdentifier } from './field-identifier';
import { TotalItems } from './total-items';
import { PageCount } from './page-count';

/**
 * Response schema for listing field enums.
 */
export interface FieldEnumsResponseSchema {
  /** Field Identifier */
  field: FieldIdentifier;
  /** Elements of this page of paginated data */
  contains: FieldEnumsItem[];
  /** The total number of items in the response. */
  totalItems: TotalItems;
  /** The total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  pageCount: PageCount;
  /** Metadata to indicate the first, last, previous, next, and current page, as well as the total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  view: PaginatedViewV2;
}

/**
 * Cast schema for the FieldEnumsResponseSchema model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fieldEnumsResponseSchema = core.cast.identity<FieldEnumsResponseSchema>();

/**
 * Cast schema for mapping API responses to the FieldEnumsResponseSchema application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldEnumsResponseSchemaResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'field',
      'contains',
      'totalItems',
      'pageCount',
      'view',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      field: raw['field'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : fieldEnumsItemResponse.parse(v),
          )
        : (raw['contains'] as any),
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewV2Response.parse(raw['view']),
    };
  },
  ['field', 'contains', 'totalItems', 'pageCount', 'view'],
);

/**
 * Cast schema for mapping the FieldEnumsResponseSchema application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldEnumsResponseSchemaRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      field: raw['field'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : fieldEnumsItemRequest.parse(v),
          )
        : (raw['contains'] as any),
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewV2Request.parse(raw['view']),
    };
  },
  ['field', 'contains', 'totalItems', 'pageCount', 'view'],
);
