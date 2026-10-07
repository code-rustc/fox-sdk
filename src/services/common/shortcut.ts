import * as core from '../../core';
import { Id } from './id';
import { Identifier } from './identifier';
import { ShortcutRedirectsTo } from './shortcut-redirects-to';

/**
 * A shortcut
 */
export interface Shortcut {
  /** JSON-LD id */
  '@id': Id;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** The underlying resource to which the shortcut resolves to. */
  redirectsTo: ShortcutRedirectsTo;
}

/**
 * Cast schema for the Shortcut model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const shortcut = core.cast.identity<Shortcut>();

/**
 * Cast schema for mapping API responses to the Shortcut application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const shortcutResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@id', 'identifier', 'redirectsTo']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@id': raw['@id'],
      identifier: raw['identifier'],
      redirectsTo: raw['redirectsTo'],
    };
  },
  ['@id', 'identifier', 'redirectsTo'],
);

/**
 * Cast schema for mapping the Shortcut application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const shortcutRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@id': raw['@id'], identifier: raw['identifier'], redirectsTo: raw['redirectsTo'] };
  },
  ['@id', 'identifier', 'redirectsTo'],
);
