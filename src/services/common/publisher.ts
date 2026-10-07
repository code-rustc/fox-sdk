import * as core from '../../core';
import { Title } from './title';
import { Identifier } from './identifier';

/**
 * The provider for the corresponding dataset. This only applies when catalog is `bbg`.
 */
export interface Publisher {
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
}

/**
 * Cast schema for the Publisher model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const publisher = core.cast.identity<Publisher>();

/**
 * Cast schema for mapping API responses to the Publisher application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const publisherResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['title', 'identifier']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, title: raw['title'], identifier: raw['identifier'] };
  },
  ['title', 'identifier'],
);

/**
 * Cast schema for mapping the Publisher application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const publisherRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { title: raw['title'], identifier: raw['identifier'] };
  },
  ['title', 'identifier'],
);
