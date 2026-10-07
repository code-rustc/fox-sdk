import * as core from '../../core';
import { EnumDefinition } from './enum-definition';
import { Enum_ } from './enum';

/**
 * An enum.
 */
export interface EnumsItem {
  /** The definition of the enum. */
  definition: EnumDefinition;
  /** The name of the enum */
  name: Enum_;
}

/**
 * Cast schema for the EnumsItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const enumsItem = core.cast.identity<EnumsItem>();

/**
 * Cast schema for mapping API responses to the EnumsItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const enumsItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['definition', 'name']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, definition: raw['definition'], name: raw['name'] };
  },
  ['definition', 'name'],
);

/**
 * Cast schema for mapping the EnumsItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const enumsItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { definition: raw['definition'], name: raw['name'] };
  },
  ['definition', 'name'],
);
