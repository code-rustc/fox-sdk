import * as core from '../../../core';

export const BulkProductMemberFormattedDescriptionItemFormat = {
  TextHtmlCharsetUtf8: 'text/html;charset=UTF-8',
} as const;

export type BulkProductMemberFormattedDescriptionItemFormat =
  (typeof BulkProductMemberFormattedDescriptionItemFormat)[keyof typeof BulkProductMemberFormattedDescriptionItemFormat];

export const bulkProductMemberFormattedDescriptionItemFormat =
  core.cast.identity<BulkProductMemberFormattedDescriptionItemFormat>();
