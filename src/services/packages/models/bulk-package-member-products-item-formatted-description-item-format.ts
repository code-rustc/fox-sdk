import * as core from '../../../core';

export const BulkPackageMemberProductsItemFormattedDescriptionItemFormat = {
  TextHtmlCharsetUtf8: 'text/html;charset=UTF-8',
} as const;

export type BulkPackageMemberProductsItemFormattedDescriptionItemFormat =
  (typeof BulkPackageMemberProductsItemFormattedDescriptionItemFormat)[keyof typeof BulkPackageMemberProductsItemFormattedDescriptionItemFormat];

export const bulkPackageMemberProductsItemFormattedDescriptionItemFormat =
  core.cast.identity<BulkPackageMemberProductsItemFormattedDescriptionItemFormat>();
