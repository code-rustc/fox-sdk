import * as core from '../../core';
import {
  NotificationDatasetType,
  notificationDatasetType,
} from '../notifications/models/notification-dataset-type';
import {
  NotificationCatalog,
  notificationCatalog,
  notificationCatalogRequest,
  notificationCatalogResponse,
} from './notification-catalog';
import { Id } from './id';
import { Identifier } from './identifier';

/**
 * A collection of data. See 'dataset' in DCAT specification.
 */
export interface NotificationDataset {
  /** JSON-LD type */
  '@type': NotificationDatasetType;
  /** JSON-LD id */
  '@id': Id;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** A collection of datasets and distributions. See 'catalog' in DCAT specification, https://www.w3.org/TR/vocab-dcat/#class-catalog */
  catalog: NotificationCatalog;
}

export namespace NotificationDataset {
  export type _Type = NotificationDatasetType;
}

/**
 * Cast schema for the NotificationDataset model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const notificationDataset = core.cast.identity<NotificationDataset>();

/**
 * Cast schema for mapping API responses to the NotificationDataset application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const notificationDatasetResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', '@id', 'identifier', 'catalog']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      '@id': raw['@id'],
      identifier: raw['identifier'],
      catalog:
        raw['catalog'] == null ? raw['catalog'] : notificationCatalogResponse.parse(raw['catalog']),
    };
  },
  ['@type', '@id', 'identifier', 'catalog'],
);

/**
 * Cast schema for mapping the NotificationDataset application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const notificationDatasetRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      '@id': raw['@id'],
      identifier: raw['identifier'],
      catalog:
        raw['catalog'] == null ? raw['catalog'] : notificationCatalogRequest.parse(raw['catalog']),
    };
  },
  ['@type', '@id', 'identifier', 'catalog'],
);
