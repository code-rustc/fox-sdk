import * as core from '../../core';
import {
  EnumFieldsItem,
  enumFieldsItem,
  enumFieldsItemRequest,
  enumFieldsItemResponse,
} from './enum-fields-item';
import {
  PaginatedViewV2,
  paginatedViewV2,
  paginatedViewV2Request,
  paginatedViewV2Response,
} from './paginated-view-v2';
import { Enum_ } from './enum';
import { TotalItems } from './total-items';
import { PageCount } from './page-count';

/**
 * Response schema for listing enum fields.
 */
export interface EnumFieldsResponseSchema {
  /** Elements of this page of paginated data */
  contains: EnumFieldsItem[];
  /** The name of the enum */
  identifier: Enum_;
  /** The total number of items in the response. */
  totalItems: TotalItems;
  /** The total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  pageCount: PageCount;
  /** Metadata to indicate the first, last, previous, next, and current page, as well as the total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  view: PaginatedViewV2;
}

/**
 * Cast schema for the EnumFieldsResponseSchema model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const enumFieldsResponseSchema = core.cast.identity<EnumFieldsResponseSchema>();

/**
 * Cast schema for mapping API responses to the EnumFieldsResponseSchema application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const enumFieldsResponseSchemaResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'contains',
      'identifier',
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
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : enumFieldsItemResponse.parse(v),
          )
        : (raw['contains'] as any),
      identifier: raw['identifier'],
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewV2Response.parse(raw['view']),
    };
  },
  ['contains', 'identifier', 'totalItems', 'pageCount', 'view'],
);

/**
 * Cast schema for mapping the EnumFieldsResponseSchema application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const enumFieldsResponseSchemaRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : enumFieldsItemRequest.parse(v),
          )
        : (raw['contains'] as any),
      identifier: raw['identifier'],
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewV2Request.parse(raw['view']),
    };
  },
  ['contains', 'identifier', 'totalItems', 'pageCount', 'view'],
);
