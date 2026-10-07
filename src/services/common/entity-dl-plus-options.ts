import * as core from '../../core';
import {
  EntityDlPlusOptionsType,
  entityDlPlusOptionsType,
} from '../requests/models/entity-dl-plus-options-type';
import {
  DlPlusOptions,
  dlPlusOptions,
  dlPlusOptionsRequest,
  dlPlusOptionsResponse,
} from './dl-plus-options';

export interface EntityDlPlusOptions extends DlPlusOptions {
  /** JSON-LD type */
  _type: 'EntityDlPlus';
}

export namespace EntityDlPlusOptions {
  export type _Type = EntityDlPlusOptionsType;
}

/**
 * Cast schema for the EntityDlPlusOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const entityDlPlusOptions = core.cast.identity<EntityDlPlusOptions>();

/**
 * Cast schema for mapping API responses to the EntityDlPlusOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const entityDlPlusOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      'subscribers',
      'pricePoint',
      'pricingStrategy',
      'liveCommercialModelCategories',
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
      subscribers: raw['subscribers'],
      pricePoint: raw['pricePoint'],
      pricingStrategy: raw['pricingStrategy'],
      liveCommercialModelCategories: raw['liveCommercialModelCategories'],
    };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the EntityDlPlusOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const entityDlPlusOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      subscribers: raw['subscribers'],
      pricePoint: raw['pricePoint'],
      pricingStrategy: raw['pricingStrategy'],
      liveCommercialModelCategories: raw['liveCommercialModelCategories'],
    };
  },
  ['@type'],
);
