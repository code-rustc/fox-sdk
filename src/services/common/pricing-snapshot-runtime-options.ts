import * as core from '../../core';
import {
  PricingSnapshotRuntimeOptionsType,
  pricingSnapshotRuntimeOptionsType,
} from '../requests/models/pricing-snapshot-runtime-options-type';

/**
 * Options specific to pricing snapshot requests.
 */
export interface PricingSnapshotRuntimeOptions {
  /** JSON-LD type */
  '@type': PricingSnapshotRuntimeOptionsType;
  /** The maximum number of minutes to wait for a response containing securities subject to embargo. For example, setting `maxEmbargo` to 30 causes a response to be returned approximately 30 minutes after `snapshotTime`. The response will provide a 150 return code for any security with an embargo ([exchangeDelay](https://data.bloomberg.com/catalogs/bbg/fields/exchangeDelay/)) greater than 30 minutes, and will contain N.A. instead of prices for such securities. If `maxEmbargo` is not set, the response will be returned once embargo periods have completed. */
  maxEmbargo?: number | undefined;
}

export namespace PricingSnapshotRuntimeOptions {
  export type _Type = PricingSnapshotRuntimeOptionsType;
}

/**
 * Cast schema for the PricingSnapshotRuntimeOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const pricingSnapshotRuntimeOptions = core.cast.identity<PricingSnapshotRuntimeOptions>();

/**
 * Cast schema for mapping API responses to the PricingSnapshotRuntimeOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const pricingSnapshotRuntimeOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'maxEmbargo']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'], maxEmbargo: raw['maxEmbargo'] };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the PricingSnapshotRuntimeOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const pricingSnapshotRuntimeOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], maxEmbargo: raw['maxEmbargo'] };
  },
  ['@type'],
);
