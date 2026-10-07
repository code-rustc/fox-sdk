import * as core from '../../core';
import {
  FieldValuesItem,
  fieldValuesItem,
  fieldValuesItemRequest,
  fieldValuesItemResponse,
} from './field-values-item';
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
 * Response schema for listing field values.
 */
export interface FieldValuesResponseSchema {
  /** Field Identifier */
  field: FieldIdentifier;
  /** Elements of this page of paginated data */
  contains: FieldValuesItem[];
  /** The total number of items in the response. */
  totalItems: TotalItems;
  /** The total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  pageCount: PageCount;
  /** Metadata to indicate the first, last, previous, next, and current page, as well as the total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  view: PaginatedViewV2;
}

/**
 * Cast schema for the FieldValuesResponseSchema model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fieldValuesResponseSchema = core.cast.identity<FieldValuesResponseSchema>();

/**
 * Cast schema for mapping API responses to the FieldValuesResponseSchema application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldValuesResponseSchemaResponse = core.cast.object(
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
            v == null ? v : fieldValuesItemResponse.parse(v),
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
 * Cast schema for mapping the FieldValuesResponseSchema application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldValuesResponseSchemaRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      field: raw['field'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : fieldValuesItemRequest.parse(v),
          )
        : (raw['contains'] as any),
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewV2Request.parse(raw['view']),
    };
  },
  ['field', 'contains', 'totalItems', 'pageCount', 'view'],
);
