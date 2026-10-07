import * as core from '../../../core';

export const BvalSnapshotTriggerType = {
  BvalSnapshotTrigger: 'BvalSnapshotTrigger',
} as const;

export type BvalSnapshotTriggerType =
  (typeof BvalSnapshotTriggerType)[keyof typeof BvalSnapshotTriggerType];

export const bvalSnapshotTriggerType = core.cast.identity<BvalSnapshotTriggerType>();
