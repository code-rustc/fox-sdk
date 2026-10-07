import * as core from '../../../core';

export const PricingSnapshotDatasetType = {
  PricingSnapshotDataset: 'PricingSnapshotDataset',
} as const;

export type PricingSnapshotDatasetType =
  (typeof PricingSnapshotDatasetType)[keyof typeof PricingSnapshotDatasetType];

export const pricingSnapshotDatasetType = core.cast.identity<PricingSnapshotDatasetType>();
