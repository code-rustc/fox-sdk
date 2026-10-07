import * as core from '../../core';
import { Id } from './id';
import { Types } from './types';
import { Title } from './title';
import { ExtendedDescription } from './extended-description';
import { Identifier } from './identifier';

/**
 * Member item of data
 */
export interface Member {
  /** JSON-LD id */
  '@id': Id;
  /** Items in the type */
  '@type': Types;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** More information about the field or dataset description. */
  description: ExtendedDescription;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
}

/**
 * Cast schema for the Member model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const member = core.cast.identity<Member>();

/**
 * Cast schema for mapping API responses to the Member application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const memberResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@id', '@type', 'title', 'description', 'identifier']);
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
    };
  },
  ['@id', '@type', 'title', 'description', 'identifier'],
);

/**
 * Cast schema for mapping the Member application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const memberRequest = core.cast.object(
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
    };
  },
  ['@id', '@type', 'title', 'description', 'identifier'],
);
