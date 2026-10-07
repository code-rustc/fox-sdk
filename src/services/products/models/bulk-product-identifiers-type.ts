import * as core from '../../../core';

export const BulkProductIdentifiersType = {
  DlBulk: 'DL_Bulk',
} as const;

export type BulkProductIdentifiersType =
  (typeof BulkProductIdentifiersType)[keyof typeof BulkProductIdentifiersType];

export const bulkProductIdentifiersType = core.cast.identity<BulkProductIdentifiersType>();
