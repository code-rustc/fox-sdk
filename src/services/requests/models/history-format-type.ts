import * as core from '../../../core';

export const HistoryFormatType = {
  HistoryFormat: 'HistoryFormat',
} as const;

export type HistoryFormatType = (typeof HistoryFormatType)[keyof typeof HistoryFormatType];

export const historyFormatType = core.cast.identity<HistoryFormatType>();
