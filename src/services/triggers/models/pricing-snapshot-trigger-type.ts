import * as core from '../../../core';

export const PricingSnapshotTriggerType = {
  PricingSnapshotTrigger: 'PricingSnapshotTrigger',
} as const;

export type PricingSnapshotTriggerType =
  (typeof PricingSnapshotTriggerType)[keyof typeof PricingSnapshotTriggerType];

export const pricingSnapshotTriggerType = core.cast.identity<PricingSnapshotTriggerType>();
