import * as core from '../../../core';

export const PricingSnapshotFormatType = {
  PricingSnapshotFormat: 'PricingSnapshotFormat',
} as const;

export type PricingSnapshotFormatType =
  (typeof PricingSnapshotFormatType)[keyof typeof PricingSnapshotFormatType];

export const pricingSnapshotFormatType = core.cast.identity<PricingSnapshotFormatType>();
