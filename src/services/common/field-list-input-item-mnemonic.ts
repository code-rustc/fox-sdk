import * as core from '../../core';
import { Mnemonic } from './mnemonic';

export interface FieldListInputItemMnemonic {
  /** Field Mnemonic, such as PX_LAST. */
  mnemonic: Mnemonic;
}

/**
 * Cast schema for the FieldListInputItemMnemonic model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fieldListInputItemMnemonic = core.cast.identity<FieldListInputItemMnemonic>();

/**
 * Cast schema for mapping API responses to the FieldListInputItemMnemonic application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldListInputItemMnemonicResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['mnemonic']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, mnemonic: raw['mnemonic'] };
  },
  ['mnemonic'],
);

/**
 * Cast schema for mapping the FieldListInputItemMnemonic application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldListInputItemMnemonicRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { mnemonic: raw['mnemonic'] };
  },
  ['mnemonic'],
);
