import * as core from '../../../core';
import {
  BulkPackageMemberHistoryCoverageType,
  bulkPackageMemberHistoryCoverageType,
} from './bulk-package-member-history-coverage-type';

/**
 * History coverage available for this package.
 */
export interface BulkPackageMemberHistoryCoverage {
  /** History coverage available. */
  available: boolean;
  /** Earliest year for which history is available. Populated when `available` is `true`. */
  fromYear?: number | undefined;
  /** Type of history available. */
  type?: BulkPackageMemberHistoryCoverageType | undefined;
}

export namespace BulkPackageMemberHistoryCoverage {
  export type Type = BulkPackageMemberHistoryCoverageType;
}

/**
 * Cast schema for the BulkPackageMemberHistoryCoverage model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageMemberHistoryCoverage =
  core.cast.identity<BulkPackageMemberHistoryCoverage>();

/**
 * Cast schema for mapping API responses to the BulkPackageMemberHistoryCoverage application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageMemberHistoryCoverageResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['available', 'fromYear', 'type']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      available: raw['available'],
      fromYear: raw['fromYear'],
      type: raw['type'],
    };
  },
  ['available'],
);

/**
 * Cast schema for mapping the BulkPackageMemberHistoryCoverage application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageMemberHistoryCoverageRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { available: raw['available'], fromYear: raw['fromYear'], type: raw['type'] };
  },
  ['available'],
);
