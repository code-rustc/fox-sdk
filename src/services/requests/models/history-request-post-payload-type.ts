import * as core from '../../../core';

export const HistoryRequestPostPayloadType = {
  HistoryRequest: 'HistoryRequest',
} as const;

export type HistoryRequestPostPayloadType =
  (typeof HistoryRequestPostPayloadType)[keyof typeof HistoryRequestPostPayloadType];

export const historyRequestPostPayloadType = core.cast.identity<HistoryRequestPostPayloadType>();
