import * as core from '../../core';

export const HistoryFieldListTypeName = {
  HistoryFieldList: 'HistoryFieldList',
} as const;

export type HistoryFieldListTypeName =
  (typeof HistoryFieldListTypeName)[keyof typeof HistoryFieldListTypeName];

export const historyFieldListTypeName = core.cast.identity<HistoryFieldListTypeName>();
