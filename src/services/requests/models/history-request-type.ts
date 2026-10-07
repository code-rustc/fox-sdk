import * as core from '../../../core';

export const HistoryRequestType = {
  HistoryRequest: 'HistoryRequest',
} as const;

export type HistoryRequestType = (typeof HistoryRequestType)[keyof typeof HistoryRequestType];

export const historyRequestType = core.cast.identity<HistoryRequestType>();
