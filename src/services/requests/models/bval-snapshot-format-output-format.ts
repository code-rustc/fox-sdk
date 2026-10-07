import * as core from '../../../core';

export const BvalSnapshotFormatOutputFormat = {
  BulkListOutputFormat: 'bulkListOutputFormat',
  FixedOutputFormat: 'fixedOutputFormat',
  VariableOutputFormat: 'variableOutputFormat',
} as const;

export type BvalSnapshotFormatOutputFormat =
  (typeof BvalSnapshotFormatOutputFormat)[keyof typeof BvalSnapshotFormatOutputFormat];

export const bvalSnapshotFormatOutputFormat = core.cast.identity<BvalSnapshotFormatOutputFormat>();
