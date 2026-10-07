import * as core from '../../core';
import { Id } from './id';
import { Types } from './types';
import { Title } from './title';
import { Description } from './description';
import { Identifier } from './identifier';
import { SubscriptionType } from './subscription-type';

/**
 * Member item of catalog data
 */
export interface CatalogMember {
  /** JSON-LD id */
  '@id': Id;
  /** Items in the type */
  '@type': Types;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description: Description;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** Indicates whether the catalog is for a Per Security Account (i.e., `scheduled`) or a Bulk Account (i.e., `bulk`). For more: [Accounts](https://developer.bloomberg.com/portal/products/dl?chapterId=5202&entityType=document#introduction-accounts) */
  subscriptionType: SubscriptionType;
}

/**
 * Cast schema for the CatalogMember model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const catalogMember = core.cast.identity<CatalogMember>();

/**
 * Cast schema for mapping API responses to the CatalogMember application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const catalogMemberResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@id',
      '@type',
      'title',
      'description',
      'identifier',
      'subscriptionType',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      subscriptionType: raw['subscriptionType'],
    };
  },
  ['@id', '@type', 'title', 'description', 'identifier', 'subscriptionType'],
);

/**
 * Cast schema for mapping the CatalogMember application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const catalogMemberRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      subscriptionType: raw['subscriptionType'],
    };
  },
  ['@id', '@type', 'title', 'description', 'identifier', 'subscriptionType'],
);
