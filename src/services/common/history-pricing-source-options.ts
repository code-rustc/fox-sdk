import * as core from '../../core';
import {
  HistoryPricingSourceOptionsType,
  historyPricingSourceOptionsType,
} from '../requests/models/history-pricing-source-options-type';
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

export interface HistoryPricingSourceOptions extends BasePricingSourceOptions {
  /** JSON-LD type */
  '@type': HistoryPricingSourceOptionsType;
  /** This option is available in for Corp, Pfd, Govt, Muni and Mtge securities. If this option is used, the PRICING_SOURCE will be returned in the output file. */
  includeSourceInOutput?: boolean | undefined;
  /** This option allows users to define one or more pricing sources that they would like to skip when determining the pricing source to be returned for a given security's price. */
  skip?: PricingSourceSkipDetails | undefined;
}

export namespace HistoryPricingSourceOptions {
  export type _Type = HistoryPricingSourceOptionsType;
}

/**
 * Cast schema for the HistoryPricingSourceOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const historyPricingSourceOptions = core.cast.identity<HistoryPricingSourceOptions>();

/**
 * Cast schema for mapping API responses to the HistoryPricingSourceOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const historyPricingSourceOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      'prefer',
      'exclusive',
      'includeSourceInOutput',
      'skip',
    ]);
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
      includeSourceInOutput: raw['includeSourceInOutput'],
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
 * Cast schema for mapping the HistoryPricingSourceOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const historyPricingSourceOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      prefer:
        raw['prefer'] == null ? raw['prefer'] : pricingSourceDetailRequest.parse(raw['prefer']),
      exclusive: raw['exclusive'],
      includeSourceInOutput: raw['includeSourceInOutput'],
      skip: Array.isArray(raw['skip'])
        ? (raw['skip'] as any[]).map((v: any) =>
            v == null ? v : pricingSourceDetailRequest.parse(v),
          )
        : (raw['skip'] as any),
    };
  },
  ['@type'],
);
