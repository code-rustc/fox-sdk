import * as core from '../../../core';

export const BvalSnapshotFormatDelimiter = {
  Pipe: '|',
  Comma: ',',
  Semicolon: ';',
} as const;

export type BvalSnapshotFormatDelimiter =
  (typeof BvalSnapshotFormatDelimiter)[keyof typeof BvalSnapshotFormatDelimiter];

export const bvalSnapshotFormatDelimiter = core.cast.identity<BvalSnapshotFormatDelimiter>();
