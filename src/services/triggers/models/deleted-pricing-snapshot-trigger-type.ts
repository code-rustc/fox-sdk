import * as core from '../../../core';

export const DeletedPricingSnapshotTriggerType = {
  PricingSnapshotTrigger: 'PricingSnapshotTrigger',
} as const;

export type DeletedPricingSnapshotTriggerType =
  (typeof DeletedPricingSnapshotTriggerType)[keyof typeof DeletedPricingSnapshotTriggerType];

export const deletedPricingSnapshotTriggerType =
  core.cast.identity<DeletedPricingSnapshotTriggerType>();
