import * as core from '../../../core';

export const TickHistoryMediaTypeFormatType = {
  MediaType: 'MediaType',
} as const;

export type TickHistoryMediaTypeFormatType =
  (typeof TickHistoryMediaTypeFormatType)[keyof typeof TickHistoryMediaTypeFormatType];

export const tickHistoryMediaTypeFormatType = core.cast.identity<TickHistoryMediaTypeFormatType>();
