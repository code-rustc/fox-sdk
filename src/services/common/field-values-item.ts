import * as core from '../../core';
import { YellowKeys, yellowKeys, yellowKeysRequest, yellowKeysResponse } from './yellow-keys';
import { Enum_ } from './enum';
import { FieldValue } from './field-value';
import { MappedValue } from './mapped-value';

/**
 * A field value.
 */
export interface FieldValuesItem {
  /** The name of the enum */
  enum: Enum_;
  /** A value that a field may return. */
  fieldValue: FieldValue;
  /** The additional value to facilitate the understanding of `fieldValue`. */
  mappedValue: MappedValue;
  /** Bloomberg segregates securities into different sectors (asset classes) identified by shortcut keys on the Bloomberg Terminal® keyboard. Historically, these keys were yellow, so this nomenclature is sometimes called `Yellow Key`. */
  yellowKeys: YellowKeys;
}

/**
 * Cast schema for the FieldValuesItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fieldValuesItem = core.cast.identity<FieldValuesItem>();

/**
 * Cast schema for mapping API responses to the FieldValuesItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldValuesItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['enum', 'fieldValue', 'mappedValue', 'yellowKeys']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      enum: raw['enum'],
      fieldValue: raw['fieldValue'],
      mappedValue: raw['mappedValue'],
      yellowKeys:
        raw['yellowKeys'] == null ? raw['yellowKeys'] : yellowKeysResponse.parse(raw['yellowKeys']),
    };
  },
  ['enum', 'fieldValue', 'mappedValue', 'yellowKeys'],
);

/**
 * Cast schema for mapping the FieldValuesItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldValuesItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      enum: raw['enum'],
      fieldValue: raw['fieldValue'],
      mappedValue: raw['mappedValue'],
      yellowKeys:
        raw['yellowKeys'] == null ? raw['yellowKeys'] : yellowKeysRequest.parse(raw['yellowKeys']),
    };
  },
  ['enum', 'fieldValue', 'mappedValue', 'yellowKeys'],
);
