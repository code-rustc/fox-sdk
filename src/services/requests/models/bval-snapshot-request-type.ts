import * as core from '../../../core';

export const BvalSnapshotRequestType = {
  BvalSnapshotRequest: 'BvalSnapshotRequest',
} as const;

export type BvalSnapshotRequestType =
  (typeof BvalSnapshotRequestType)[keyof typeof BvalSnapshotRequestType];

export const bvalSnapshotRequestType = core.cast.identity<BvalSnapshotRequestType>();
