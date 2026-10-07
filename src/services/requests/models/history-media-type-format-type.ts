import * as core from '../../../core';

export const HistoryMediaTypeFormatType = {
  MediaType: 'MediaType',
} as const;

export type HistoryMediaTypeFormatType =
  (typeof HistoryMediaTypeFormatType)[keyof typeof HistoryMediaTypeFormatType];

export const historyMediaTypeFormatType = core.cast.identity<HistoryMediaTypeFormatType>();
