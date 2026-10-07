import * as core from '../../core';

export const FieldListTypeName = {
  DataFieldList: 'DataFieldList',
  BvalSnapshotFieldList: 'BvalSnapshotFieldList',
  EntityFieldList: 'EntityFieldList',
  HistoryFieldList: 'HistoryFieldList',
} as const;

export type FieldListTypeName = (typeof FieldListTypeName)[keyof typeof FieldListTypeName];

export const fieldListTypeName = core.cast.identity<FieldListTypeName>();
