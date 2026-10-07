import * as core from '../../../core';

export interface BulkPackageMemberAssetClassCoverageItemAssetSubClassesItem {
  name: string;
}

/**
 * Cast schema for the BulkPackageMemberAssetClassCoverageItemAssetSubClassesItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageMemberAssetClassCoverageItemAssetSubClassesItem =
  core.cast.identity<BulkPackageMemberAssetClassCoverageItemAssetSubClassesItem>();

/**
 * Cast schema for mapping API responses to the BulkPackageMemberAssetClassCoverageItemAssetSubClassesItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageMemberAssetClassCoverageItemAssetSubClassesItemResponse = core.cast.object(
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
 * Cast schema for mapping the BulkPackageMemberAssetClassCoverageItemAssetSubClassesItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageMemberAssetClassCoverageItemAssetSubClassesItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { name: raw['name'] };
  },
  ['name'],
);
