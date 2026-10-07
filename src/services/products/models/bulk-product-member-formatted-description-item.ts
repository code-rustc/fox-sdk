import * as core from '../../../core';
import {
  BulkProductMemberFormattedDescriptionItemFormat,
  bulkProductMemberFormattedDescriptionItemFormat,
} from './bulk-product-member-formatted-description-item-format';

export interface BulkProductMemberFormattedDescriptionItem {
  /** MIME type. */
  format?: BulkProductMemberFormattedDescriptionItemFormat | undefined;
  /** Formatted description. */
  value?: string | undefined;
}

export namespace BulkProductMemberFormattedDescriptionItem {
  export type Format = BulkProductMemberFormattedDescriptionItemFormat;
}

/**
 * Cast schema for the BulkProductMemberFormattedDescriptionItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkProductMemberFormattedDescriptionItem =
  core.cast.identity<BulkProductMemberFormattedDescriptionItem>();

/**
 * Cast schema for mapping API responses to the BulkProductMemberFormattedDescriptionItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkProductMemberFormattedDescriptionItemResponse = core.cast.object(
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
 * Cast schema for mapping the BulkProductMemberFormattedDescriptionItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkProductMemberFormattedDescriptionItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { format: raw['format'], value: raw['value'] };
  },
  [],
);
