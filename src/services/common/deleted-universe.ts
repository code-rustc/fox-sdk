import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  DeletedUniverseType,
  deletedUniverseType,
} from '../universes/models/deleted-universe-type';
import {
  UniverseItem,
  universeItem,
  universeItemRequest,
  universeItemResponse,
} from './universe-item';
import {
  PaginatedView,
  paginatedView,
  paginatedViewRequest,
  paginatedViewResponse,
} from './paginated-view';
import { Universe, universe, universeRequest, universeResponse } from './universe';
import {
  DeletedComponent,
  deletedComponent,
  deletedComponentRequest,
  deletedComponentResponse,
} from './deleted-component';
import { Id } from './id';
import { ComponentIdentifier } from './component-identifier';
import { ReferencedByActiveRequests } from './referenced-by-active-requests';
import { Title } from './title';
import { Description } from './description';
import { Issued } from './issued';
import { Modified } from './modified';
import { TotalItems } from './total-items';
import { PageCount } from './page-count';
import { DeletedOn } from './deleted-on';

export interface DeletedUniverse extends Universe, DeletedComponent {
  /** JSON-LD type */
  '@type': DeletedUniverseType;
}

export namespace DeletedUniverse {
  export type _Type = DeletedUniverseType;
}

/**
 * Cast schema for the DeletedUniverse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const deletedUniverse = core.cast.identity<DeletedUniverse>();

/**
 * Cast schema for mapping API responses to the DeletedUniverse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const deletedUniverseResponse = core.cast.object(
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
      'securityOverridesDefined',
      'deletedOn',
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
            v == null ? v : universeItemResponse.parse(v),
          )
        : (raw['contains'] as any),
      title: raw['title'],
      description: raw['description'],
      issued: raw['issued'],
      modified: raw['modified'],
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewResponse.parse(raw['view']),
      securityOverridesDefined: raw['securityOverridesDefined'],
      deletedOn: raw['deletedOn'],
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
    'securityOverridesDefined',
    'deletedOn',
  ],
);

/**
 * Cast schema for mapping the DeletedUniverse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const deletedUniverseRequest = core.cast.object(
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
        ? (raw['contains'] as any[]).map((v: any) => (v == null ? v : universeItemRequest.parse(v)))
        : (raw['contains'] as any),
      title: raw['title'],
      description: raw['description'],
      issued: raw['issued'],
      modified: raw['modified'],
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
      view: raw['view'] == null ? raw['view'] : paginatedViewRequest.parse(raw['view']),
      securityOverridesDefined: raw['securityOverridesDefined'],
      deletedOn: raw['deletedOn'],
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
    'securityOverridesDefined',
    'deletedOn',
  ],
);
