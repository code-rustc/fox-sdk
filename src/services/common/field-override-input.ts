import * as core from '../../core';
import { FieldOverrideType, fieldOverrideType } from './field-override-type';
import { FieldOverrideMnemonic } from './field-override-mnemonic';
import { FieldOverrideCleanName } from './field-override-clean-name';
import { FieldOverrideValue } from './field-override-value';

export interface FieldOverrideInput {
  /** The type of a field override for a financial instrument. */
  '@type': FieldOverrideType;
  /** The mnemonic of the field targeted for overriding. */
  mnemonic?: FieldOverrideMnemonic | undefined;
  /** The clean name of the field targeted for overriding. */
  cleanName?: FieldOverrideCleanName | undefined;
  /** The value of a field override. */
  override: FieldOverrideValue;
}

/**
 * Cast schema for the FieldOverrideInput model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fieldOverrideInput = core.cast.identity<FieldOverrideInput>();

/**
 * Cast schema for mapping API responses to the FieldOverrideInput application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldOverrideInputResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'mnemonic', 'cleanName', 'override']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      mnemonic: raw['mnemonic'],
      cleanName: raw['cleanName'],
      override: raw['override'],
    };
  },
  ['@type', 'override'],
);

/**
 * Cast schema for mapping the FieldOverrideInput application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldOverrideInputRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      mnemonic: raw['mnemonic'],
      cleanName: raw['cleanName'],
      override: raw['override'],
    };
  },
  ['@type', 'override'],
);
