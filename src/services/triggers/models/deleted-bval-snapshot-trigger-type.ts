import * as core from '../../../core';

export const DeletedBvalSnapshotTriggerType = {
  BvalSnapshotTrigger: 'BvalSnapshotTrigger',
} as const;

export type DeletedBvalSnapshotTriggerType =
  (typeof DeletedBvalSnapshotTriggerType)[keyof typeof DeletedBvalSnapshotTriggerType];

export const deletedBvalSnapshotTriggerType = core.cast.identity<DeletedBvalSnapshotTriggerType>();
