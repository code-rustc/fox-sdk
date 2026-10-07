import * as core from '../../../core';

export const PricingSnapshotPricingSourceOptionsType = {
  PricingSnapshotPricingSourceOptions: 'PricingSnapshotPricingSourceOptions',
} as const;

export type PricingSnapshotPricingSourceOptionsType =
  (typeof PricingSnapshotPricingSourceOptionsType)[keyof typeof PricingSnapshotPricingSourceOptionsType];

export const pricingSnapshotPricingSourceOptionsType =
  core.cast.identity<PricingSnapshotPricingSourceOptionsType>();
