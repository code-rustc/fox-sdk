import * as core from '../../../core';

export const RequestBvalSnapshotTriggerType = {
  BvalSnapshotTrigger: 'BvalSnapshotTrigger',
} as const;

export type RequestBvalSnapshotTriggerType =
  (typeof RequestBvalSnapshotTriggerType)[keyof typeof RequestBvalSnapshotTriggerType];

export const requestBvalSnapshotTriggerType = core.cast.identity<RequestBvalSnapshotTriggerType>();
