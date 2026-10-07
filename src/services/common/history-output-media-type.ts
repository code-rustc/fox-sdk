import * as core from '../../core';

export const HistoryOutputMediaType = {
  TextCsv: 'text/csv',
  ApplicationJson: 'application/json',
} as const;

export type HistoryOutputMediaType =
  (typeof HistoryOutputMediaType)[keyof typeof HistoryOutputMediaType];

export const historyOutputMediaType = core.cast.identity<HistoryOutputMediaType>();
