import * as core from '../../../core';

export const BulkPackageMemberGeographicalCoverageItemRegion = {
  Apac: 'APAC',
  Emea: 'EMEA',
  Lamr: 'LAMR',
  Namr: 'NAMR',
} as const;

export type BulkPackageMemberGeographicalCoverageItemRegion =
  (typeof BulkPackageMemberGeographicalCoverageItemRegion)[keyof typeof BulkPackageMemberGeographicalCoverageItemRegion];

export const bulkPackageMemberGeographicalCoverageItemRegion =
  core.cast.identity<BulkPackageMemberGeographicalCoverageItemRegion>();
