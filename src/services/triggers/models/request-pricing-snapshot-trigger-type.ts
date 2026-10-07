import * as core from '../../../core';

export const RequestPricingSnapshotTriggerType = {
  PricingSnapshotTrigger: 'PricingSnapshotTrigger',
} as const;

export type RequestPricingSnapshotTriggerType =
  (typeof RequestPricingSnapshotTriggerType)[keyof typeof RequestPricingSnapshotTriggerType];

export const requestPricingSnapshotTriggerType =
  core.cast.identity<RequestPricingSnapshotTriggerType>();
