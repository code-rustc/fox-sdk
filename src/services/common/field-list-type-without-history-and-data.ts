import * as core from '../../core';

export const FieldListTypeWithoutHistoryAndData = {
  BvalSnapshotFieldList: 'BvalSnapshotFieldList',
  EntityFieldList: 'EntityFieldList',
} as const;

export type FieldListTypeWithoutHistoryAndData =
  (typeof FieldListTypeWithoutHistoryAndData)[keyof typeof FieldListTypeWithoutHistoryAndData];

export const fieldListTypeWithoutHistoryAndData =
  core.cast.identity<FieldListTypeWithoutHistoryAndData>();
