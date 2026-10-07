import * as core from '../../../core';

export const BulkPackageMemberDeliveryFrequency = {
  Daily: 'Daily',
  Weekday: 'Weekday',
  Weekly: 'Weekly',
  Monthly: 'Monthly',
} as const;

export type BulkPackageMemberDeliveryFrequency =
  (typeof BulkPackageMemberDeliveryFrequency)[keyof typeof BulkPackageMemberDeliveryFrequency];

export const bulkPackageMemberDeliveryFrequency =
  core.cast.identity<BulkPackageMemberDeliveryFrequency>();
