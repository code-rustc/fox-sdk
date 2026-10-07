import * as core from '../../../core';

export const PricingSnapshotTriggerPostPayloadType = {
  PricingSnapshotTrigger: 'PricingSnapshotTrigger',
} as const;

export type PricingSnapshotTriggerPostPayloadType =
  (typeof PricingSnapshotTriggerPostPayloadType)[keyof typeof PricingSnapshotTriggerPostPayloadType];

export const pricingSnapshotTriggerPostPayloadType =
  core.cast.identity<PricingSnapshotTriggerPostPayloadType>();
