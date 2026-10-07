import * as core from '../../core';

export const FieldListTypeWithoutHistoryAndDataName = {
  BvalSnapshotFieldList: 'BvalSnapshotFieldList',
  EntityFieldList: 'EntityFieldList',
} as const;

export type FieldListTypeWithoutHistoryAndDataName =
  (typeof FieldListTypeWithoutHistoryAndDataName)[keyof typeof FieldListTypeWithoutHistoryAndDataName];

export const fieldListTypeWithoutHistoryAndDataName =
  core.cast.identity<FieldListTypeWithoutHistoryAndDataName>();
