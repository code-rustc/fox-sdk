import * as core from '../../core';
import {
  DataPricingSourceOptionsType,
  dataPricingSourceOptionsType,
} from '../requests/models/data-pricing-source-options-type';
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
import { PricingSourceSkipDetails } from './pricing-source-skip-details';

export interface DataPricingSourceOptions extends BasePricingSourceOptions {
  /** JSON-LD type */
  '@type': DataPricingSourceOptionsType;
  /** This option allows users to define one or more pricing sources that they would like to skip when determining the pricing source to be returned for a given security's price. */
  skip?: PricingSourceSkipDetails | undefined;
}

export namespace DataPricingSourceOptions {
  export type _Type = DataPricingSourceOptionsType;
}

/**
 * Cast schema for the DataPricingSourceOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const dataPricingSourceOptions = core.cast.identity<DataPricingSourceOptions>();

/**
 * Cast schema for mapping API responses to the DataPricingSourceOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const dataPricingSourceOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'prefer', 'exclusive', 'skip']);
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
      skip: Array.isArray(raw['skip'])
        ? (raw['skip'] as any[]).map((v: any) =>
            v == null ? v : pricingSourceDetailResponse.parse(v),
          )
        : (raw['skip'] as any),
    };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the DataPricingSourceOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const dataPricingSourceOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      prefer:
        raw['prefer'] == null ? raw['prefer'] : pricingSourceDetailRequest.parse(raw['prefer']),
      exclusive: raw['exclusive'],
      skip: Array.isArray(raw['skip'])
        ? (raw['skip'] as any[]).map((v: any) =>
            v == null ? v : pricingSourceDetailRequest.parse(v),
          )
        : (raw['skip'] as any),
    };
  },
  ['@type'],
);
