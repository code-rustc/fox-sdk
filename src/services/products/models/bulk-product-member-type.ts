import * as core from '../../../core';

export const BulkProductMemberType = {
  DlBulk: 'DL_Bulk',
} as const;

export type BulkProductMemberType =
  (typeof BulkProductMemberType)[keyof typeof BulkProductMemberType];

export const bulkProductMemberType = core.cast.identity<BulkProductMemberType>();
