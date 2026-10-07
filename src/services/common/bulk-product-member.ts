import * as core from '../../core';
import {
  BulkProductMemberType,
  bulkProductMemberType,
} from '../products/models/bulk-product-member-type';
import {
  BulkProductMemberFormattedDescriptionItem,
  bulkProductMemberFormattedDescriptionItem,
  bulkProductMemberFormattedDescriptionItemRequest,
  bulkProductMemberFormattedDescriptionItemResponse,
} from '../products/models/bulk-product-member-formatted-description-item';
import {
  BulkPackageIdentifiers,
  bulkPackageIdentifiers,
  bulkPackageIdentifiersRequest,
  bulkPackageIdentifiersResponse,
} from './bulk-package-identifiers';
import {
  BulkProductIdentifiers,
  bulkProductIdentifiers,
  bulkProductIdentifiersRequest,
  bulkProductIdentifiersResponse,
} from './bulk-product-identifiers';
import { BulkProductMemberFormattedDescription } from './bulk-product-member-formatted-description';

export interface BulkProductMember extends BulkProductIdentifiers {
  /** Product type. */
  '@type': BulkProductMemberType;
  /** Product themes. */
  themes: string[];
  /** Short product description. */
  shortDescription: string;
  /** Longer, formatted, product description. */
  formattedDescription: BulkProductMemberFormattedDescriptionItem[];
  /** Packages included within this product. */
  packages: BulkPackageIdentifiers[];
  /** Other products that contain similar content. */
  relatedProducts?: BulkProductIdentifiers[] | undefined;
}

export namespace BulkProductMember {
  export type _Type = BulkProductMemberType;
  export type FormattedDescription = BulkProductMemberFormattedDescription;
}

/**
 * Cast schema for the BulkProductMember model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkProductMember = core.cast.identity<BulkProductMember>();

/**
 * Cast schema for mapping API responses to the BulkProductMember application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkProductMemberResponse = core.cast.object(
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
      'themes',
      'shortDescription',
      'formattedDescription',
      'packages',
      'relatedProducts',
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
      themes: raw['themes'],
      shortDescription: raw['shortDescription'],
      formattedDescription: Array.isArray(raw['formattedDescription'])
        ? (raw['formattedDescription'] as any[]).map((v: any) =>
            v == null ? v : bulkProductMemberFormattedDescriptionItemResponse.parse(v),
          )
        : (raw['formattedDescription'] as any),
      packages: Array.isArray(raw['packages'])
        ? (raw['packages'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageIdentifiersResponse.parse(v),
          )
        : (raw['packages'] as any),
      relatedProducts: Array.isArray(raw['relatedProducts'])
        ? (raw['relatedProducts'] as any[]).map((v: any) =>
            v == null ? v : bulkProductIdentifiersResponse.parse(v),
          )
        : (raw['relatedProducts'] as any),
    };
  },
  [
    '@type',
    'productCode',
    'productName',
    'productIdentifier',
    'productUrl',
    'themes',
    'shortDescription',
    'formattedDescription',
    'packages',
  ],
);

/**
 * Cast schema for mapping the BulkProductMember application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkProductMemberRequest = core.cast.object(
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
      themes: raw['themes'],
      shortDescription: raw['shortDescription'],
      formattedDescription: Array.isArray(raw['formattedDescription'])
        ? (raw['formattedDescription'] as any[]).map((v: any) =>
            v == null ? v : bulkProductMemberFormattedDescriptionItemRequest.parse(v),
          )
        : (raw['formattedDescription'] as any),
      packages: Array.isArray(raw['packages'])
        ? (raw['packages'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageIdentifiersRequest.parse(v),
          )
        : (raw['packages'] as any),
      relatedProducts: Array.isArray(raw['relatedProducts'])
        ? (raw['relatedProducts'] as any[]).map((v: any) =>
            v == null ? v : bulkProductIdentifiersRequest.parse(v),
          )
        : (raw['relatedProducts'] as any),
    };
  },
  [
    '@type',
    'productCode',
    'productName',
    'productIdentifier',
    'productUrl',
    'themes',
    'shortDescription',
    'formattedDescription',
    'packages',
  ],
);
