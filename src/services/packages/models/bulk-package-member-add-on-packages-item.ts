import * as core from '../../../core';
import {
  BulkPackageMemberAddOnPackagesItemType,
  bulkPackageMemberAddOnPackagesItemType,
} from './bulk-package-member-add-on-packages-item-type';

export interface BulkPackageMemberAddOnPackagesItem {
  /** Add-on type. */
  type: BulkPackageMemberAddOnPackagesItemType;
  /** Add-on invoice name. */
  invoiceName: string;
}

export namespace BulkPackageMemberAddOnPackagesItem {
  export type Type = BulkPackageMemberAddOnPackagesItemType;
}

/**
 * Cast schema for the BulkPackageMemberAddOnPackagesItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageMemberAddOnPackagesItem =
  core.cast.identity<BulkPackageMemberAddOnPackagesItem>();

/**
 * Cast schema for mapping API responses to the BulkPackageMemberAddOnPackagesItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageMemberAddOnPackagesItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['type', 'invoiceName']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, type: raw['type'], invoiceName: raw['invoiceName'] };
  },
  ['type', 'invoiceName'],
);

/**
 * Cast schema for mapping the BulkPackageMemberAddOnPackagesItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageMemberAddOnPackagesItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { type: raw['type'], invoiceName: raw['invoiceName'] };
  },
  ['type', 'invoiceName'],
);
