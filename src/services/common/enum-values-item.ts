import * as core from '../../core';
import { YellowKeys, yellowKeys, yellowKeysRequest, yellowKeysResponse } from './yellow-keys';
import { EnumValueCode } from './enum-value-code';
import { EnumValueDescription } from './enum-value-description';

/**
 * An enum value.
 */
export interface EnumValuesItem {
  /** The validation-friendly value for the corresponding enum. */
  code: EnumValueCode;
  /** The human-readable value for the corresponding enum. */
  description: EnumValueDescription;
  /** Bloomberg segregates securities into different sectors (asset classes) identified by shortcut keys on the Bloomberg Terminal® keyboard. Historically, these keys were yellow, so this nomenclature is sometimes called `Yellow Key`. */
  yellowKeys: YellowKeys;
}

/**
 * Cast schema for the EnumValuesItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const enumValuesItem = core.cast.identity<EnumValuesItem>();

/**
 * Cast schema for mapping API responses to the EnumValuesItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const enumValuesItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['code', 'description', 'yellowKeys']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      code: raw['code'],
      description: raw['description'],
      yellowKeys:
        raw['yellowKeys'] == null ? raw['yellowKeys'] : yellowKeysResponse.parse(raw['yellowKeys']),
    };
  },
  ['code', 'description', 'yellowKeys'],
);

/**
 * Cast schema for mapping the EnumValuesItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const enumValuesItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      code: raw['code'],
      description: raw['description'],
      yellowKeys:
        raw['yellowKeys'] == null ? raw['yellowKeys'] : yellowKeysRequest.parse(raw['yellowKeys']),
    };
  },
  ['code', 'description', 'yellowKeys'],
);
