import * as core from '../../../core';

export const BulkPackageMemberAddOnPackagesItemType = {
  History: 'history',
} as const;

export type BulkPackageMemberAddOnPackagesItemType =
  (typeof BulkPackageMemberAddOnPackagesItemType)[keyof typeof BulkPackageMemberAddOnPackagesItemType];

export const bulkPackageMemberAddOnPackagesItemType =
  core.cast.identity<BulkPackageMemberAddOnPackagesItemType>();
