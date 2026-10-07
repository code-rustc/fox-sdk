import * as core from '../../../core';
import { Parameter, parameter, parameterRequest, parameterResponse } from '../../common/parameter';
import { DataFieldListType, dataFieldListType } from '../../common/data-field-list-type';
import { Mnemonic } from '../../common/mnemonic';
import { FieldAlias } from '../../common/field-alias';
import { Parameters } from '../../common/parameters';

export interface DataFieldListInputItemMnemonic {
  /** Field Mnemonic, such as PX_LAST. */
  mnemonic: Mnemonic;
  /** An optional alias used as the field name in the output. */
  alias?: FieldAlias | undefined;
  /** A list of parameter values for a field list input item. */
  parameters?: Parameters | undefined;
  /** JSON-LD type */
  '@type'?: DataFieldListType | undefined;
}

/**
 * Cast schema for the DataFieldListInputItemMnemonic model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const dataFieldListInputItemMnemonic = core.cast.identity<DataFieldListInputItemMnemonic>();

/**
 * Cast schema for mapping API responses to the DataFieldListInputItemMnemonic application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const dataFieldListInputItemMnemonicResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['mnemonic', 'alias', 'parameters', '@type']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      mnemonic: raw['mnemonic'],
      alias: raw['alias'],
      parameters: Array.isArray(raw['parameters'])
        ? (raw['parameters'] as any[]).map((v: any) => (v == null ? v : parameterResponse.parse(v)))
        : (raw['parameters'] as any),
      '@type': raw['@type'],
    };
  },
  ['mnemonic'],
);

/**
 * Cast schema for mapping the DataFieldListInputItemMnemonic application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const dataFieldListInputItemMnemonicRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      mnemonic: raw['mnemonic'],
      alias: raw['alias'],
      parameters: Array.isArray(raw['parameters'])
        ? (raw['parameters'] as any[]).map((v: any) => (v == null ? v : parameterRequest.parse(v)))
        : (raw['parameters'] as any),
      '@type': raw['@type'],
    };
  },
  ['mnemonic'],
);
