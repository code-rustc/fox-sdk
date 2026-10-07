import * as core from '../../../core';

export const PricingSnapshotRequestType = {
  PricingSnapshotRequest: 'PricingSnapshotRequest',
} as const;

export type PricingSnapshotRequestType =
  (typeof PricingSnapshotRequestType)[keyof typeof PricingSnapshotRequestType];

export const pricingSnapshotRequestType = core.cast.identity<PricingSnapshotRequestType>();
