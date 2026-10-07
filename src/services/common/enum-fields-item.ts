import * as core from '../../core';
import { YellowKeys, yellowKeys, yellowKeysRequest, yellowKeysResponse } from './yellow-keys';
import { LookupBy } from './lookup-by';

/**
 * A field associated with the given enum.
 */
export interface EnumFieldsItem {
  /** A valid XML and JSON name, such as tradeCrncy. */
  cleanName: string;
  /** Field Id, such as DX028 */
  fieldId: string;
  /** Field Mnemonic, such as TRADE_CRNCY. */
  mnemonic: string;
  /** The type of field value for the corresponding enum (i.e., a human-readable `description` or a validation-friendly `code`). */
  lookupBy: LookupBy;
  /** Bloomberg segregates securities into different sectors (asset classes) identified by shortcut keys on the Bloomberg Terminal® keyboard. Historically, these keys were yellow, so this nomenclature is sometimes called `Yellow Key`. */
  yellowKeys: YellowKeys;
}

/**
 * Cast schema for the EnumFieldsItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const enumFieldsItem = core.cast.identity<EnumFieldsItem>();

/**
 * Cast schema for mapping API responses to the EnumFieldsItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const enumFieldsItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'cleanName',
      'fieldId',
      'mnemonic',
      'lookupBy',
      'yellowKeys',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      cleanName: raw['cleanName'],
      fieldId: raw['fieldId'],
      mnemonic: raw['mnemonic'],
      lookupBy: raw['lookupBy'],
      yellowKeys:
        raw['yellowKeys'] == null ? raw['yellowKeys'] : yellowKeysResponse.parse(raw['yellowKeys']),
    };
  },
  ['cleanName', 'fieldId', 'mnemonic', 'lookupBy', 'yellowKeys'],
);

/**
 * Cast schema for mapping the EnumFieldsItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const enumFieldsItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      cleanName: raw['cleanName'],
      fieldId: raw['fieldId'],
      mnemonic: raw['mnemonic'],
      lookupBy: raw['lookupBy'],
      yellowKeys:
        raw['yellowKeys'] == null ? raw['yellowKeys'] : yellowKeysRequest.parse(raw['yellowKeys']),
    };
  },
  ['cleanName', 'fieldId', 'mnemonic', 'lookupBy', 'yellowKeys'],
);
