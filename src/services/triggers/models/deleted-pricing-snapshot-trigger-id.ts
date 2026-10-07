import * as core from '../../../core';

export const DeletedPricingSnapshotTriggerId = {
  Empty: '',
} as const;

export type DeletedPricingSnapshotTriggerId =
  (typeof DeletedPricingSnapshotTriggerId)[keyof typeof DeletedPricingSnapshotTriggerId];

export const deletedPricingSnapshotTriggerId =
  core.cast.identity<DeletedPricingSnapshotTriggerId>();
