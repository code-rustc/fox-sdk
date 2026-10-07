import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  ArchiveType,
  archiveType,
  archiveTypeRequest,
  archiveTypeResponse,
} from '../archives/models/archive-type';
import {
  ArchivesItem,
  archivesItem,
  archivesItemRequest,
  archivesItemResponse,
} from './archives-item';
import { Id } from './id';
import { Title } from './title';
import { Description } from './description';
import { Identifier } from './identifier';
import { ArchivesItems } from './archives-items';
import { TotalItems } from './total-items';
import { PageCount } from './page-count';

/**
 * List requested archive items.
 */
export interface Archive {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  '@type': ArchiveType;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description: Description;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** List of archive items. */
  contains: ArchivesItems;
  /** The total number of items in the response. */
  totalItems: TotalItems;
  /** The total number of pages that the response includes. For more: [Pagination](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4745#ds14805). */
  pageCount: PageCount;
}

export namespace Archive {
  export type _Type = ArchiveType;
}

/**
 * Cast schema for the Archive model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const archive = core.cast.identity<Archive>();

/**
 * Cast schema for mapping API responses to the Archive application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const archiveResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@id',
      '@type',
      'title',
      'description',
      'identifier',
      'contains',
      'totalItems',
      'pageCount',
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
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : archivesItemResponse.parse(v),
          )
        : (raw['contains'] as any),
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'title',
    'description',
    'identifier',
    'contains',
    'totalItems',
    'pageCount',
  ],
);

/**
 * Cast schema for mapping the Archive application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const archiveRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) => (v == null ? v : archivesItemRequest.parse(v)))
        : (raw['contains'] as any),
      totalItems: raw['totalItems'],
      pageCount: raw['pageCount'],
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'title',
    'description',
    'identifier',
    'contains',
    'totalItems',
    'pageCount',
  ],
);
