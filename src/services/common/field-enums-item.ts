import * as core from '../../core';
import { Enum_ } from './enum';
import { LookupBy } from './lookup-by';

/**
 * An enum associated with the given field.
 */
export interface FieldEnumsItem {
  /** The name of the enum */
  name: Enum_;
  /** The type of field value for the corresponding enum (i.e., a human-readable `description` or a validation-friendly `code`). */
  lookupBy: LookupBy;
}

/**
 * Cast schema for the FieldEnumsItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fieldEnumsItem = core.cast.identity<FieldEnumsItem>();

/**
 * Cast schema for mapping API responses to the FieldEnumsItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldEnumsItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['name', 'lookupBy']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, name: raw['name'], lookupBy: raw['lookupBy'] };
  },
  ['name', 'lookupBy'],
);

/**
 * Cast schema for mapping the FieldEnumsItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldEnumsItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { name: raw['name'], lookupBy: raw['lookupBy'] };
  },
  ['name', 'lookupBy'],
);
