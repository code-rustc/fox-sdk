import * as core from '../../../core';

/**
 * Asset class covered.
 */
export interface BulkPackageMemberAssetClassCoverageItemAssetClass {
  name: string;
}

/**
 * Cast schema for the BulkPackageMemberAssetClassCoverageItemAssetClass model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageMemberAssetClassCoverageItemAssetClass =
  core.cast.identity<BulkPackageMemberAssetClassCoverageItemAssetClass>();

/**
 * Cast schema for mapping API responses to the BulkPackageMemberAssetClassCoverageItemAssetClass application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageMemberAssetClassCoverageItemAssetClassResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['name']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, name: raw['name'] };
  },
  ['name'],
);

/**
 * Cast schema for mapping the BulkPackageMemberAssetClassCoverageItemAssetClass application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageMemberAssetClassCoverageItemAssetClassRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { name: raw['name'] };
  },
  ['name'],
);
