import * as core from '../../core';

export const FieldListType = {
  DataFieldList: 'DataFieldList',
  BvalSnapshotFieldList: 'BvalSnapshotFieldList',
  EntityFieldList: 'EntityFieldList',
  HistoryFieldList: 'HistoryFieldList',
} as const;

export type FieldListType = (typeof FieldListType)[keyof typeof FieldListType];

export const fieldListType = core.cast.identity<FieldListType>();
