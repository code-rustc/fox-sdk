import * as core from '../../../core';

export interface BulkPackageMemberGeographicalCoverageItemExchangesItem {
  name: string;
}

/**
 * Cast schema for the BulkPackageMemberGeographicalCoverageItemExchangesItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageMemberGeographicalCoverageItemExchangesItem =
  core.cast.identity<BulkPackageMemberGeographicalCoverageItemExchangesItem>();

/**
 * Cast schema for mapping API responses to the BulkPackageMemberGeographicalCoverageItemExchangesItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageMemberGeographicalCoverageItemExchangesItemResponse = core.cast.object(
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
 * Cast schema for mapping the BulkPackageMemberGeographicalCoverageItemExchangesItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageMemberGeographicalCoverageItemExchangesItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { name: raw['name'] };
  },
  ['name'],
);
