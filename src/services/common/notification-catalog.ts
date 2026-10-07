import * as core from '../../core';
import { Type_ } from './type';
import { Id } from './id';
import { Identifier } from './identifier';

/**
 * A collection of datasets and distributions. See 'catalog' in DCAT specification, https://www.w3.org/TR/vocab-dcat/#class-catalog
 */
export interface NotificationCatalog {
  /** JSON-LD type */
  '@type': Type_;
  /** JSON-LD id */
  '@id': Id;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
}

/**
 * Cast schema for the NotificationCatalog model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const notificationCatalog = core.cast.identity<NotificationCatalog>();

/**
 * Cast schema for mapping API responses to the NotificationCatalog application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const notificationCatalogResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', '@id', 'identifier']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'], '@id': raw['@id'], identifier: raw['identifier'] };
  },
  ['@type', '@id', 'identifier'],
);

/**
 * Cast schema for mapping the NotificationCatalog application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const notificationCatalogRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], '@id': raw['@id'], identifier: raw['identifier'] };
  },
  ['@type', '@id', 'identifier'],
);
