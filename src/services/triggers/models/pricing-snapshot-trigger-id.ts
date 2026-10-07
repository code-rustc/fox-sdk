import * as core from '../../../core';

export const PricingSnapshotTriggerId = {
  Empty: '',
} as const;

export type PricingSnapshotTriggerId =
  (typeof PricingSnapshotTriggerId)[keyof typeof PricingSnapshotTriggerId];

export const pricingSnapshotTriggerId = core.cast.identity<PricingSnapshotTriggerId>();
