import * as core from '../../../core';

export const TickHistoryRequestPostPayloadType = {
  TickHistoryRequest: 'TickHistoryRequest',
} as const;

export type TickHistoryRequestPostPayloadType =
  (typeof TickHistoryRequestPostPayloadType)[keyof typeof TickHistoryRequestPostPayloadType];

export const tickHistoryRequestPostPayloadType =
  core.cast.identity<TickHistoryRequestPostPayloadType>();
