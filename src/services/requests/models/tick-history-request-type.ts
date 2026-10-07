import * as core from '../../../core';

export const TickHistoryRequestType = {
  TickHistoryRequest: 'TickHistoryRequest',
} as const;

export type TickHistoryRequestType =
  (typeof TickHistoryRequestType)[keyof typeof TickHistoryRequestType];

export const tickHistoryRequestType = core.cast.identity<TickHistoryRequestType>();
