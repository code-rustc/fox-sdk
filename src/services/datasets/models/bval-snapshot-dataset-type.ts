import * as core from '../../../core';

export const BvalSnapshotDatasetType = {
  BvalSnapshotDataset: 'BvalSnapshotDataset',
} as const;

export type BvalSnapshotDatasetType =
  (typeof BvalSnapshotDatasetType)[keyof typeof BvalSnapshotDatasetType];

export const bvalSnapshotDatasetType = core.cast.identity<BvalSnapshotDatasetType>();
