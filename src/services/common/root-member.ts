import * as core from '../../core';
import { Id } from './id';
import { Types } from './types';
import { Identifier } from './identifier';
import { Title } from './title';
import { Description } from './description';

/**
 * Member item of data
 */
export interface RootMember {
  /** JSON-LD id */
  '@id': Id;
  /** Items in the type */
  '@type': Types;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description: Description;
}

/**
 * Cast schema for the RootMember model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const rootMember = core.cast.identity<RootMember>();

/**
 * Cast schema for mapping API responses to the RootMember application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const rootMemberResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@id', '@type', 'identifier', 'title', 'description']);
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
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
    };
  },
  ['@id', '@type', 'identifier', 'title', 'description'],
);

/**
 * Cast schema for mapping the RootMember application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const rootMemberRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@id': raw['@id'],
      '@type': raw['@type'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
    };
  },
  ['@id', '@type', 'identifier', 'title', 'description'],
);
