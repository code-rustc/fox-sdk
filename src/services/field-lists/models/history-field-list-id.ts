import * as core from '../../../core';

export const HistoryFieldListId = {
  Empty: '',
} as const;

export type HistoryFieldListId = (typeof HistoryFieldListId)[keyof typeof HistoryFieldListId];

export const historyFieldListId = core.cast.identity<HistoryFieldListId>();
