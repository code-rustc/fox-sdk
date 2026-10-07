import * as core from '../../../core';

export const PricingSnapshotRequestPostPayloadType = {
  PricingSnapshotRequest: 'PricingSnapshotRequest',
} as const;

export type PricingSnapshotRequestPostPayloadType =
  (typeof PricingSnapshotRequestPostPayloadType)[keyof typeof PricingSnapshotRequestPostPayloadType];

export const pricingSnapshotRequestPostPayloadType =
  core.cast.identity<PricingSnapshotRequestPostPayloadType>();
