import * as core from '../../core';
import {
  PricingSnapshotPricingSourceOptionsType,
  pricingSnapshotPricingSourceOptionsType,
} from '../requests/models/pricing-snapshot-pricing-source-options-type';
import {
  PricingSourceDetail,
  pricingSourceDetail,
  pricingSourceDetailRequest,
  pricingSourceDetailResponse,
} from './pricing-source-detail';
import {
  BasePricingSourceOptions,
  basePricingSourceOptions,
  basePricingSourceOptionsRequest,
  basePricingSourceOptionsResponse,
} from './base-pricing-source-options';

export interface PricingSnapshotPricingSourceOptions extends BasePricingSourceOptions {
  /** JSON-LD type */
  '@type': PricingSnapshotPricingSourceOptionsType;
}

export namespace PricingSnapshotPricingSourceOptions {
  export type _Type = PricingSnapshotPricingSourceOptionsType;
}

/**
 * Cast schema for the PricingSnapshotPricingSourceOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const pricingSnapshotPricingSourceOptions =
  core.cast.identity<PricingSnapshotPricingSourceOptions>();

/**
 * Cast schema for mapping API responses to the PricingSnapshotPricingSourceOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const pricingSnapshotPricingSourceOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'prefer', 'exclusive']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      prefer:
        raw['prefer'] == null ? raw['prefer'] : pricingSourceDetailResponse.parse(raw['prefer']),
      exclusive: raw['exclusive'],
    };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the PricingSnapshotPricingSourceOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const pricingSnapshotPricingSourceOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      prefer:
        raw['prefer'] == null ? raw['prefer'] : pricingSourceDetailRequest.parse(raw['prefer']),
      exclusive: raw['exclusive'],
    };
  },
  ['@type'],
);
