import * as core from '../../../core';

export const RequestBvalSnapshotFieldListType = {
  BvalSnapshotFieldList: 'BvalSnapshotFieldList',
} as const;

export type RequestBvalSnapshotFieldListType =
  (typeof RequestBvalSnapshotFieldListType)[keyof typeof RequestBvalSnapshotFieldListType];

export const requestBvalSnapshotFieldListType =
  core.cast.identity<RequestBvalSnapshotFieldListType>();
