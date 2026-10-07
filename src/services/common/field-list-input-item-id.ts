import * as core from '../../core';
import { Id } from './id';

export interface FieldListInputItemId {
  /** JSON-LD id */
  '@id': Id;
}

/**
 * Cast schema for the FieldListInputItemId model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fieldListInputItemId = core.cast.identity<FieldListInputItemId>();

/**
 * Cast schema for mapping API responses to the FieldListInputItemId application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldListInputItemIdResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@id']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@id': raw['@id'] };
  },
  ['@id'],
);

/**
 * Cast schema for mapping the FieldListInputItemId application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldListInputItemIdRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@id': raw['@id'] };
  },
  ['@id'],
);
