import * as core from '../../../core';

export const TickHistoryOhlcRuntimeOptionsEventType = {
  Trade: 'trade',
  Bid: 'bid',
  Ask: 'ask',
} as const;

export type TickHistoryOhlcRuntimeOptionsEventType =
  (typeof TickHistoryOhlcRuntimeOptionsEventType)[keyof typeof TickHistoryOhlcRuntimeOptionsEventType];

export const tickHistoryOhlcRuntimeOptionsEventType =
  core.cast.identity<TickHistoryOhlcRuntimeOptionsEventType>();
