import * as core from '../../../core';
import {
  BulkPackageMemberAssetClassCoverageItemAssetClass,
  bulkPackageMemberAssetClassCoverageItemAssetClass,
  bulkPackageMemberAssetClassCoverageItemAssetClassRequest,
  bulkPackageMemberAssetClassCoverageItemAssetClassResponse,
} from './bulk-package-member-asset-class-coverage-item-asset-class';
import {
  BulkPackageMemberAssetClassCoverageItemAssetSubClassesItem,
  bulkPackageMemberAssetClassCoverageItemAssetSubClassesItem,
  bulkPackageMemberAssetClassCoverageItemAssetSubClassesItemRequest,
  bulkPackageMemberAssetClassCoverageItemAssetSubClassesItemResponse,
} from './bulk-package-member-asset-class-coverage-item-asset-sub-classes-item';
import { BulkPackageMemberAssetClassCoverageItemAssetSubClasses } from '../../common/bulk-package-member-asset-class-coverage-item-asset-sub-classes';

export interface BulkPackageMemberAssetClassCoverageItem {
  /** Asset class covered. */
  assetClass: BulkPackageMemberAssetClassCoverageItemAssetClass;
  /** List of asset sub-classes covered within this asset class. */
  assetSubClasses: BulkPackageMemberAssetClassCoverageItemAssetSubClassesItem[];
}

export namespace BulkPackageMemberAssetClassCoverageItem {
  export interface AssetClass {
    name: BulkPackageMemberAssetClassCoverageItemAssetClass['name'];
  }
  export type AssetSubClasses = BulkPackageMemberAssetClassCoverageItemAssetSubClasses;
}

/**
 * Cast schema for the BulkPackageMemberAssetClassCoverageItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageMemberAssetClassCoverageItem =
  core.cast.identity<BulkPackageMemberAssetClassCoverageItem>();

/**
 * Cast schema for mapping API responses to the BulkPackageMemberAssetClassCoverageItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageMemberAssetClassCoverageItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['assetClass', 'assetSubClasses']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      assetClass:
        raw['assetClass'] == null
          ? raw['assetClass']
          : bulkPackageMemberAssetClassCoverageItemAssetClassResponse.parse(raw['assetClass']),
      assetSubClasses: Array.isArray(raw['assetSubClasses'])
        ? (raw['assetSubClasses'] as any[]).map((v: any) =>
            v == null
              ? v
              : bulkPackageMemberAssetClassCoverageItemAssetSubClassesItemResponse.parse(v),
          )
        : (raw['assetSubClasses'] as any),
    };
  },
  ['assetClass', 'assetSubClasses'],
);

/**
 * Cast schema for mapping the BulkPackageMemberAssetClassCoverageItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageMemberAssetClassCoverageItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      assetClass:
        raw['assetClass'] == null
          ? raw['assetClass']
          : bulkPackageMemberAssetClassCoverageItemAssetClassRequest.parse(raw['assetClass']),
      assetSubClasses: Array.isArray(raw['assetSubClasses'])
        ? (raw['assetSubClasses'] as any[]).map((v: any) =>
            v == null
              ? v
              : bulkPackageMemberAssetClassCoverageItemAssetSubClassesItemRequest.parse(v),
          )
        : (raw['assetSubClasses'] as any),
    };
  },
  ['assetClass', 'assetSubClasses'],
);
