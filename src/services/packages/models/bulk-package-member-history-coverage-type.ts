import * as core from '../../../core';

export const BulkPackageMemberHistoryCoverageType = {
  AddOn: 'add-on',
  Included: 'included',
} as const;

export type BulkPackageMemberHistoryCoverageType =
  (typeof BulkPackageMemberHistoryCoverageType)[keyof typeof BulkPackageMemberHistoryCoverageType];

export const bulkPackageMemberHistoryCoverageType =
  core.cast.identity<BulkPackageMemberHistoryCoverageType>();
