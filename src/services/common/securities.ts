import * as core from '../../core';
import {
  SecuritiesContainsItem,
  securitiesContainsItem,
  securitiesContainsItemRequest,
  securitiesContainsItemResponse,
} from '../notices/models/securities-contains-item';
import { PageCount } from './page-count';
import { TotalItems } from './total-items';
import { SecuritiesContains } from './securities-contains';

/**
 * Page of securities data associated with the notice
 */
export interface Securities {
  /** List of securities */
  contains?: SecuritiesContainsItem[] | undefined;
  /** The current page   */
  page?: number | undefined;
  /** The total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  pageCount?: PageCount | undefined;
  /** The total number of items in the response. */
  totalItems?: TotalItems | undefined;
}

export namespace Securities {
  export type Contains = SecuritiesContains;
}

/**
 * Cast schema for the Securities model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const securities = core.cast.identity<Securities>();

/**
 * Cast schema for mapping API responses to the Securities application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const securitiesResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['contains', 'page', 'pageCount', 'totalItems']);
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
          v == null ? v : securitiesContainsItemResponse.parse(v),
        )
      : (raw['contains'] as any),
    page: raw['page'],
    pageCount: raw['pageCount'],
    totalItems: raw['totalItems'],
  };
}, []);

/**
 * Cast schema for mapping the Securities application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const securitiesRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    contains: Array.isArray(raw['contains'])
      ? (raw['contains'] as any[]).map((v: any) =>
          v == null ? v : securitiesContainsItemRequest.parse(v),
        )
      : (raw['contains'] as any),
    page: raw['page'],
    pageCount: raw['pageCount'],
    totalItems: raw['totalItems'],
  };
}, []);
