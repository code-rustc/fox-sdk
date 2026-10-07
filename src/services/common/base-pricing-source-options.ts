import * as core from '../../core';
import {
  PricingSourceDetail,
  pricingSourceDetail,
  pricingSourceDetailRequest,
  pricingSourceDetailResponse,
} from './pricing-source-detail';
import { Type_ } from './type';

export interface BasePricingSourceOptions {
  /** JSON-LD type */
  '@type': Type_;
  /** Allows a user to specify a pricing source that is applied to all financial instruments in the request universe. */
  prefer?: PricingSourceDetail | undefined;
  /** This option applies to Bonds, and allows an exclusive pricing source to be designated when setting the pricing source for the request. If the exclusive source is not available, all fields in the Pricing and Derived Data field categories will return `N.A.` for that security. Return code `989` will be returned if the client is not privileged to see the pricing source requested. */
  exclusive?: boolean | undefined;
}

/**
 * Cast schema for the BasePricingSourceOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const basePricingSourceOptions = core.cast.identity<BasePricingSourceOptions>();

/**
 * Cast schema for mapping API responses to the BasePricingSourceOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const basePricingSourceOptionsResponse = core.cast.object(
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
 * Cast schema for mapping the BasePricingSourceOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const basePricingSourceOptionsRequest = core.cast.object(
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
