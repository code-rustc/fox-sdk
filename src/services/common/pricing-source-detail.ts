import * as core from '../../core';

/**
 * Allows a user to specify a pricing source that is applied to all financial instruments in the request universe.
 */
export interface PricingSourceDetail {
  /** The mnemonic of the specified pricing source (e.g. `BGN`, `EXCH`, `CMPN`). */
  mnemonic: string;
}

/**
 * Cast schema for the PricingSourceDetail model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const pricingSourceDetail = core.cast.identity<PricingSourceDetail>();

/**
 * Cast schema for mapping API responses to the PricingSourceDetail application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const pricingSourceDetailResponse = core.cast.object(
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
 * Cast schema for mapping the PricingSourceDetail application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const pricingSourceDetailRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { mnemonic: raw['mnemonic'] };
  },
  ['mnemonic'],
);
