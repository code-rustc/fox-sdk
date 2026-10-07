import * as core from '../../core';
import {
  BvalPricingSourceOptionsType,
  bvalPricingSourceOptionsType,
} from '../requests/models/bval-pricing-source-options-type';
import { BvalPricingSource, bvalPricingSource } from './bval-pricing-source';

/**
 * Pricing Source options for BVAL snapshot requests.
 */
export interface BvalPricingSourceOptions {
  /** JSON-LD type */
  '@type': BvalPricingSourceOptionsType;
  /** By default, BVAL snapshots capture standard Bloomberg Evaluated Pricing using the "BVAL" pricing source. BVAL Index Convention (BVIC) is BVAL pricing based on Bloomberg Barclays indices (snapshot and market side). If you require BVIC pricing for your snapshot, specify "BVIC" as your pricing source. */
  pricingSource?: BvalPricingSource | undefined;
}

export namespace BvalPricingSourceOptions {
  export type _Type = BvalPricingSourceOptionsType;
}

/**
 * Cast schema for the BvalPricingSourceOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bvalPricingSourceOptions = core.cast.identity<BvalPricingSourceOptions>();

/**
 * Cast schema for mapping API responses to the BvalPricingSourceOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bvalPricingSourceOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'pricingSource']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'], pricingSource: raw['pricingSource'] };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the BvalPricingSourceOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bvalPricingSourceOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], pricingSource: raw['pricingSource'] };
  },
  ['@type'],
);
