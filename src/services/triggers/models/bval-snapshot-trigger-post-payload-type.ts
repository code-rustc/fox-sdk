import * as core from '../../../core';

export const BvalSnapshotTriggerPostPayloadType = {
  BvalSnapshotTrigger: 'BvalSnapshotTrigger',
} as const;

export type BvalSnapshotTriggerPostPayloadType =
  (typeof BvalSnapshotTriggerPostPayloadType)[keyof typeof BvalSnapshotTriggerPostPayloadType];

export const bvalSnapshotTriggerPostPayloadType =
  core.cast.identity<BvalSnapshotTriggerPostPayloadType>();
