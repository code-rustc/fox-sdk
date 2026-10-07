import * as core from '../../../core';

export const BvalSnapshotRequestPostPayloadType = {
  BvalSnapshotRequest: 'BvalSnapshotRequest',
} as const;

export type BvalSnapshotRequestPostPayloadType =
  (typeof BvalSnapshotRequestPostPayloadType)[keyof typeof BvalSnapshotRequestPostPayloadType];

export const bvalSnapshotRequestPostPayloadType =
  core.cast.identity<BvalSnapshotRequestPostPayloadType>();
