import * as core from '../../core';

export const HistoryFieldListType = {
  HistoryFieldList: 'HistoryFieldList',
} as const;

export type HistoryFieldListType = (typeof HistoryFieldListType)[keyof typeof HistoryFieldListType];

export const historyFieldListType = core.cast.identity<HistoryFieldListType>();
