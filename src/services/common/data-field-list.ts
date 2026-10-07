import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import { DataFieldListId, dataFieldListId } from '../field-lists/models/data-field-list-id';
import { DataFieldListType, dataFieldListType } from './data-field-list-type';
import {
  HistoryFieldListItem,
  historyFieldListItem,
  historyFieldListItemRequest,
  historyFieldListItemResponse,
} from './history-field-list-item';
import {
  PaginatedView,
  paginatedView,
  paginatedViewRequest,
  paginatedViewResponse,
} from './paginated-view';
import {
  HistoryFieldList,
  historyFieldList,
  historyFieldListRequest,
  historyFieldListResponse,
} from './history-field-list';
import { ComponentIdentifier } from './component-identifier';
import { ReferencedByActiveRequests } from './referenced-by-active-requests';
import { Title } from './title';
import { Description } from './description';
import { Issued } from './issued';
import { Modified } from './modified';
import { TotalItems } from './total-items';
import { PageCount } from './page-count';

export interface DataFieldList extends HistoryFieldList {
  /** JSON-LD id */
  '@id': DataFieldListId;
  /** JSON-LD type */
  '@type': DataFieldListType;
}

export namespace DataFieldList {
  export type _Id = DataFieldListId;
}

/**
 * Cast schema for the DataFieldList model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const dataFieldList = core.cast.identity<DataFieldList>();

/**
 * Cast schema for mapping API responses to the DataFieldList application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const dataFieldListResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@id',
      '@type',
      'identifier',
      'referencedByActiveRequests',
      'contains',
      'title',
      'description',
      'issued',
      'modified',
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
      '@context':
        raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      identifier: raw['identifier'],
      referencedByActiveRequests: raw['referencedByActiveRequests'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : historyFieldListItemResponse.parse(v),
          )
        : (raw['contains'] as any),
      title: raw['title'],
      description: raw['description'],
      issued: raw['issued'],
      modified: raw['modified'],
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewResponse.parse(raw['view']),
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'identifier',
    'referencedByActiveRequests',
    'contains',
    'title',
    'issued',
    'modified',
    'totalItems',
    'pageCount',
    'view',
  ],
);

/**
 * Cast schema for mapping the DataFieldList application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const dataFieldListRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      identifier: raw['identifier'],
      referencedByActiveRequests: raw['referencedByActiveRequests'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : historyFieldListItemRequest.parse(v),
          )
        : (raw['contains'] as any),
      title: raw['title'],
      description: raw['description'],
      issued: raw['issued'],
      modified: raw['modified'],
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewRequest.parse(raw['view']),
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'identifier',
    'referencedByActiveRequests',
    'contains',
    'title',
    'issued',
    'modified',
    'totalItems',
    'pageCount',
    'view',
  ],
);
