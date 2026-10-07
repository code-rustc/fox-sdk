import * as core from '../../../core';

export const BvalSnapshotFormatType = {
  BvalSnapshotFormat: 'BvalSnapshotFormat',
} as const;

export type BvalSnapshotFormatType =
  (typeof BvalSnapshotFormatType)[keyof typeof BvalSnapshotFormatType];

export const bvalSnapshotFormatType = core.cast.identity<BvalSnapshotFormatType>();
