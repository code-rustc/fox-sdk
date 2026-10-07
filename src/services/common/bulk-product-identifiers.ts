import * as core from '../../core';
import {
  BulkProductIdentifiersType,
  bulkProductIdentifiersType,
} from '../products/models/bulk-product-identifiers-type';

export interface BulkProductIdentifiers {
  /** Product type. */
  '@type': BulkProductIdentifiersType;
  /** Numeric identifier for this product. */
  productCode: number;
  /** Product name. This can change over time. */
  productName: string;
  /** Product identifier. This can change over time. */
  productIdentifier: string;
  /** `Data <Go>` URL for this product. */
  productUrl: string;
}

export namespace BulkProductIdentifiers {
  export type _Type = BulkProductIdentifiersType;
}

/**
 * Cast schema for the BulkProductIdentifiers model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkProductIdentifiers = core.cast.identity<BulkProductIdentifiers>();

/**
 * Cast schema for mapping API responses to the BulkProductIdentifiers application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkProductIdentifiersResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      'productCode',
      'productName',
      'productIdentifier',
      'productUrl',
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
      productCode: raw['productCode'],
      productName: raw['productName'],
      productIdentifier: raw['productIdentifier'],
      productUrl: raw['productUrl'],
    };
  },
  ['@type', 'productCode', 'productName', 'productIdentifier', 'productUrl'],
);

/**
 * Cast schema for mapping the BulkProductIdentifiers application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkProductIdentifiersRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      productCode: raw['productCode'],
      productName: raw['productName'],
      productIdentifier: raw['productIdentifier'],
      productUrl: raw['productUrl'],
    };
  },
  ['@type', 'productCode', 'productName', 'productIdentifier', 'productUrl'],
);
