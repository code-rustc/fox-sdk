import * as core from '../../../core';
import {
  BulkPackageMemberProductsItemType,
  bulkPackageMemberProductsItemType,
} from './bulk-package-member-products-item-type';
import {
  BulkPackageMemberProductsItemFormattedDescriptionItem,
  bulkPackageMemberProductsItemFormattedDescriptionItem,
  bulkPackageMemberProductsItemFormattedDescriptionItemRequest,
  bulkPackageMemberProductsItemFormattedDescriptionItemResponse,
} from './bulk-package-member-products-item-formatted-description-item';
import {
  BulkProductIdentifiers,
  bulkProductIdentifiers,
  bulkProductIdentifiersRequest,
  bulkProductIdentifiersResponse,
} from '../../common/bulk-product-identifiers';
import { BulkPackageMemberProductsItemFormattedDescription } from '../../common/bulk-package-member-products-item-formatted-description';

export interface BulkPackageMemberProductsItem extends BulkProductIdentifiers {
  /** Product type. */
  '@type': BulkPackageMemberProductsItemType;
  /** Longer, formatted, product description. */
  formattedDescription: BulkPackageMemberProductsItemFormattedDescriptionItem[];
}

export namespace BulkPackageMemberProductsItem {
  export type _Type = BulkPackageMemberProductsItemType;
  export type FormattedDescription = BulkPackageMemberProductsItemFormattedDescription;
}

/**
 * Cast schema for the BulkPackageMemberProductsItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageMemberProductsItem = core.cast.identity<BulkPackageMemberProductsItem>();

/**
 * Cast schema for mapping API responses to the BulkPackageMemberProductsItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageMemberProductsItemResponse = core.cast.object(
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
      'formattedDescription',
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
      formattedDescription: Array.isArray(raw['formattedDescription'])
        ? (raw['formattedDescription'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberProductsItemFormattedDescriptionItemResponse.parse(v),
          )
        : (raw['formattedDescription'] as any),
    };
  },
  [
    '@type',
    'productCode',
    'productName',
    'productIdentifier',
    'productUrl',
    'formattedDescription',
  ],
);

/**
 * Cast schema for mapping the BulkPackageMemberProductsItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageMemberProductsItemRequest = core.cast.object(
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
      formattedDescription: Array.isArray(raw['formattedDescription'])
        ? (raw['formattedDescription'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberProductsItemFormattedDescriptionItemRequest.parse(v),
          )
        : (raw['formattedDescription'] as any),
    };
  },
  [
    '@type',
    'productCode',
    'productName',
    'productIdentifier',
    'productUrl',
    'formattedDescription',
  ],
);
