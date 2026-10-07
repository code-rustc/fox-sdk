import * as core from '../../core';
import {
  TickHistoryPricingSourceOptionsType,
  tickHistoryPricingSourceOptionsType,
} from '../requests/models/tick-history-pricing-source-options-type';
import {
  PricingSourceDetail,
  pricingSourceDetail,
  pricingSourceDetailRequest,
  pricingSourceDetailResponse,
} from './pricing-source-detail';
import {
  TickHistoryPricingSourceOptionsFiQuoteType,
  tickHistoryPricingSourceOptionsFiQuoteType,
} from '../requests/models/tick-history-pricing-source-options-fi-quote-type';
import {
  BasePricingSourceOptions,
  basePricingSourceOptions,
  basePricingSourceOptionsRequest,
  basePricingSourceOptionsResponse,
} from './base-pricing-source-options';

export interface TickHistoryPricingSourceOptions extends BasePricingSourceOptions {
  /** JSON-LD type */
  '@type': TickHistoryPricingSourceOptionsType;
  /** The type of quote for fixed income instruments (i.e. price or yield).

`tkrConfig` returns the default quote type on a per instrument basis.
 */
  fiQuoteType?: TickHistoryPricingSourceOptionsFiQuoteType | undefined;
}

export namespace TickHistoryPricingSourceOptions {
  export type _Type = TickHistoryPricingSourceOptionsType;
  export type FiQuoteType = TickHistoryPricingSourceOptionsFiQuoteType;
}

/**
 * Cast schema for the TickHistoryPricingSourceOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const tickHistoryPricingSourceOptions =
  core.cast.identity<TickHistoryPricingSourceOptions>();

/**
 * Cast schema for mapping API responses to the TickHistoryPricingSourceOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const tickHistoryPricingSourceOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'prefer', 'exclusive', 'fiQuoteType']);
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
      fiQuoteType: raw['fiQuoteType'],
    };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the TickHistoryPricingSourceOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const tickHistoryPricingSourceOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      prefer:
        raw['prefer'] == null ? raw['prefer'] : pricingSourceDetailRequest.parse(raw['prefer']),
      exclusive: raw['exclusive'],
      fiQuoteType: raw['fiQuoteType'],
    };
  },
  ['@type'],
);
