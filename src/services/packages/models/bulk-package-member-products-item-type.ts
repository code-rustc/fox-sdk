import * as core from '../../../core';

export const BulkPackageMemberProductsItemType = {
  DlBulk: 'DL_Bulk',
} as const;

export type BulkPackageMemberProductsItemType =
  (typeof BulkPackageMemberProductsItemType)[keyof typeof BulkPackageMemberProductsItemType];

export const bulkPackageMemberProductsItemType =
  core.cast.identity<BulkPackageMemberProductsItemType>();
