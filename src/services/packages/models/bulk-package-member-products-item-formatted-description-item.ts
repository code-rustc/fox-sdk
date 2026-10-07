import * as core from '../../../core';
import {
  BulkPackageMemberProductsItemFormattedDescriptionItemFormat,
  bulkPackageMemberProductsItemFormattedDescriptionItemFormat,
} from './bulk-package-member-products-item-formatted-description-item-format';

export interface BulkPackageMemberProductsItemFormattedDescriptionItem {
  /** MIME type. */
  format?: BulkPackageMemberProductsItemFormattedDescriptionItemFormat | undefined;
  /** Formatted description. */
  value?: string | undefined;
}

export namespace BulkPackageMemberProductsItemFormattedDescriptionItem {
  export type Format = BulkPackageMemberProductsItemFormattedDescriptionItemFormat;
}

/**
 * Cast schema for the BulkPackageMemberProductsItemFormattedDescriptionItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageMemberProductsItemFormattedDescriptionItem =
  core.cast.identity<BulkPackageMemberProductsItemFormattedDescriptionItem>();

/**
 * Cast schema for mapping API responses to the BulkPackageMemberProductsItemFormattedDescriptionItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageMemberProductsItemFormattedDescriptionItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['format', 'value']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, format: raw['format'], value: raw['value'] };
  },
  [],
);

/**
 * Cast schema for mapping the BulkPackageMemberProductsItemFormattedDescriptionItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageMemberProductsItemFormattedDescriptionItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { format: raw['format'], value: raw['value'] };
  },
  [],
);
