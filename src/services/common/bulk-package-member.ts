import * as core from '../../core';
import {
  BulkPackageMemberAssetClassCoverageItem,
  bulkPackageMemberAssetClassCoverageItem,
  bulkPackageMemberAssetClassCoverageItemRequest,
  bulkPackageMemberAssetClassCoverageItemResponse,
} from '../packages/models/bulk-package-member-asset-class-coverage-item';
import {
  BulkPackageMemberFieldCoverageItem,
  bulkPackageMemberFieldCoverageItem,
  bulkPackageMemberFieldCoverageItemRequest,
  bulkPackageMemberFieldCoverageItemResponse,
} from '../packages/models/bulk-package-member-field-coverage-item';
import {
  BulkPackageMemberHistoryCoverage,
  bulkPackageMemberHistoryCoverage,
  bulkPackageMemberHistoryCoverageRequest,
  bulkPackageMemberHistoryCoverageResponse,
} from '../packages/models/bulk-package-member-history-coverage';
import {
  BulkPackageMemberAddOnPackagesItem,
  bulkPackageMemberAddOnPackagesItem,
  bulkPackageMemberAddOnPackagesItemRequest,
  bulkPackageMemberAddOnPackagesItemResponse,
} from '../packages/models/bulk-package-member-add-on-packages-item';
import {
  BulkPackageMemberDelivery,
  bulkPackageMemberDelivery,
  bulkPackageMemberDeliveryRequest,
  bulkPackageMemberDeliveryResponse,
} from '../packages/models/bulk-package-member-delivery';
import {
  BulkPackageMemberGeographicalCoverageItem,
  bulkPackageMemberGeographicalCoverageItem,
  bulkPackageMemberGeographicalCoverageItemRequest,
  bulkPackageMemberGeographicalCoverageItemResponse,
} from '../packages/models/bulk-package-member-geographical-coverage-item';
import {
  BulkPackageMemberProductsItem,
  bulkPackageMemberProductsItem,
  bulkPackageMemberProductsItemRequest,
  bulkPackageMemberProductsItemResponse,
} from '../packages/models/bulk-package-member-products-item';
import {
  BulkPackageIdentifiers,
  bulkPackageIdentifiers,
  bulkPackageIdentifiersRequest,
  bulkPackageIdentifiersResponse,
} from './bulk-package-identifiers';
import { BulkPackageMemberAssetClassCoverage } from './bulk-package-member-asset-class-coverage';
import { BulkPackageMemberFieldCoverage } from './bulk-package-member-field-coverage';
import { BulkPackageMemberAddOnPackages } from './bulk-package-member-add-on-packages';
import { BulkPackageMemberGeographicalCoverage } from './bulk-package-member-geographical-coverage';
import { BulkPackageMemberProducts } from './bulk-package-member-products';
import { BulkPackageMemberHistoryCoverageType } from '../packages/models/bulk-package-member-history-coverage-type';
import { BulkPackageMemberDeliveryFrequency } from '../packages/models/bulk-package-member-delivery-frequency';
import { BulkPackageMemberDeliveryFileStructure } from './bulk-package-member-delivery-file-structure';

export interface BulkPackageMember extends BulkPackageIdentifiers {
  /** Package invoice name. */
  invoiceName: string;
  /** Asset classes and sub-classes covered by this package. */
  assetClassCoverage?: BulkPackageMemberAssetClassCoverageItem[] | undefined;
  /** Field groups and sub-groups covered by this package. */
  fieldCoverage?: BulkPackageMemberFieldCoverageItem[] | undefined;
  /** History coverage available for this package. */
  historyCoverage: BulkPackageMemberHistoryCoverage;
  /** Add-on packages available. */
  addOnPackages?: BulkPackageMemberAddOnPackagesItem[] | undefined;
  /** Delivery frequency, file structure and file formats. */
  delivery: BulkPackageMemberDelivery;
  /** Regions, countries and exchanges covered by this package. */
  geographicalCoverage?: BulkPackageMemberGeographicalCoverageItem[] | undefined;
  /** Products which include this dataset. */
  products: BulkPackageMemberProductsItem[];
}

export namespace BulkPackageMember {
  export type AssetClassCoverage = BulkPackageMemberAssetClassCoverage;
  export type FieldCoverage = BulkPackageMemberFieldCoverage;
  export interface HistoryCoverage {
    available: BulkPackageMemberHistoryCoverage['available'];
    fromYear?: BulkPackageMemberHistoryCoverage['fromYear'];
    type?: BulkPackageMemberHistoryCoverage['type'];
  }
  export namespace HistoryCoverage {
    export type Type = BulkPackageMemberHistoryCoverageType;
  }
  export type AddOnPackages = BulkPackageMemberAddOnPackages;
  export interface Delivery {
    frequency: BulkPackageMemberDelivery['frequency'];
    fileStructure: BulkPackageMemberDelivery['fileStructure'];
    fileFormats: BulkPackageMemberDelivery['fileFormats'];
  }
  export namespace Delivery {
    export type Frequency = BulkPackageMemberDeliveryFrequency;
    export type FileStructure = BulkPackageMemberDeliveryFileStructure;
  }
  export type GeographicalCoverage = BulkPackageMemberGeographicalCoverage;
  export type Products = BulkPackageMemberProducts;
}

/**
 * Cast schema for the BulkPackageMember model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageMember = core.cast.identity<BulkPackageMember>();

/**
 * Cast schema for mapping API responses to the BulkPackageMember application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageMemberResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'packageCode',
      'packageName',
      'packageIdentifier',
      'packageUrl',
      'invoiceName',
      'assetClassCoverage',
      'fieldCoverage',
      'historyCoverage',
      'addOnPackages',
      'delivery',
      'geographicalCoverage',
      'products',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      packageCode: raw['packageCode'],
      packageName: raw['packageName'],
      packageIdentifier: raw['packageIdentifier'],
      packageUrl: raw['packageUrl'],
      invoiceName: raw['invoiceName'],
      assetClassCoverage: Array.isArray(raw['assetClassCoverage'])
        ? (raw['assetClassCoverage'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberAssetClassCoverageItemResponse.parse(v),
          )
        : (raw['assetClassCoverage'] as any),
      fieldCoverage: Array.isArray(raw['fieldCoverage'])
        ? (raw['fieldCoverage'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberFieldCoverageItemResponse.parse(v),
          )
        : (raw['fieldCoverage'] as any),
      historyCoverage:
        raw['historyCoverage'] == null
          ? raw['historyCoverage']
          : bulkPackageMemberHistoryCoverageResponse.parse(raw['historyCoverage']),
      addOnPackages: Array.isArray(raw['addOnPackages'])
        ? (raw['addOnPackages'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberAddOnPackagesItemResponse.parse(v),
          )
        : (raw['addOnPackages'] as any),
      delivery:
        raw['delivery'] == null
          ? raw['delivery']
          : bulkPackageMemberDeliveryResponse.parse(raw['delivery']),
      geographicalCoverage: Array.isArray(raw['geographicalCoverage'])
        ? (raw['geographicalCoverage'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberGeographicalCoverageItemResponse.parse(v),
          )
        : (raw['geographicalCoverage'] as any),
      products: Array.isArray(raw['products'])
        ? (raw['products'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberProductsItemResponse.parse(v),
          )
        : (raw['products'] as any),
    };
  },
  [
    'packageCode',
    'packageName',
    'packageIdentifier',
    'packageUrl',
    'invoiceName',
    'historyCoverage',
    'delivery',
    'products',
  ],
);

/**
 * Cast schema for mapping the BulkPackageMember application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageMemberRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      packageCode: raw['packageCode'],
      packageName: raw['packageName'],
      packageIdentifier: raw['packageIdentifier'],
      packageUrl: raw['packageUrl'],
      invoiceName: raw['invoiceName'],
      assetClassCoverage: Array.isArray(raw['assetClassCoverage'])
        ? (raw['assetClassCoverage'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberAssetClassCoverageItemRequest.parse(v),
          )
        : (raw['assetClassCoverage'] as any),
      fieldCoverage: Array.isArray(raw['fieldCoverage'])
        ? (raw['fieldCoverage'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberFieldCoverageItemRequest.parse(v),
          )
        : (raw['fieldCoverage'] as any),
      historyCoverage:
        raw['historyCoverage'] == null
          ? raw['historyCoverage']
          : bulkPackageMemberHistoryCoverageRequest.parse(raw['historyCoverage']),
      addOnPackages: Array.isArray(raw['addOnPackages'])
        ? (raw['addOnPackages'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberAddOnPackagesItemRequest.parse(v),
          )
        : (raw['addOnPackages'] as any),
      delivery:
        raw['delivery'] == null
          ? raw['delivery']
          : bulkPackageMemberDeliveryRequest.parse(raw['delivery']),
      geographicalCoverage: Array.isArray(raw['geographicalCoverage'])
        ? (raw['geographicalCoverage'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberGeographicalCoverageItemRequest.parse(v),
          )
        : (raw['geographicalCoverage'] as any),
      products: Array.isArray(raw['products'])
        ? (raw['products'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberProductsItemRequest.parse(v),
          )
        : (raw['products'] as any),
    };
  },
  [
    'packageCode',
    'packageName',
    'packageIdentifier',
    'packageUrl',
    'invoiceName',
    'historyCoverage',
    'delivery',
    'products',
  ],
);
