import * as core from '../../core';

export interface BulkPackageIdentifiers {
  /** Numeric identifier for this package. */
  packageCode: number;
  /** Package name. This can change over time. */
  packageName: string;
  /** Package identifier. This can change over time. */
  packageIdentifier: string;
  /** `Data <Go>` URL for this package. */
  packageUrl: string;
}

/**
 * Cast schema for the BulkPackageIdentifiers model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageIdentifiers = core.cast.identity<BulkPackageIdentifiers>();

/**
 * Cast schema for mapping API responses to the BulkPackageIdentifiers application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageIdentifiersResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'packageCode',
      'packageName',
      'packageIdentifier',
      'packageUrl',
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
    };
  },
  ['packageCode', 'packageName', 'packageIdentifier', 'packageUrl'],
);

/**
 * Cast schema for mapping the BulkPackageIdentifiers application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageIdentifiersRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      packageCode: raw['packageCode'],
      packageName: raw['packageName'],
      packageIdentifier: raw['packageIdentifier'],
      packageUrl: raw['packageUrl'],
    };
  },
  ['packageCode', 'packageName', 'packageIdentifier', 'packageUrl'],
);
