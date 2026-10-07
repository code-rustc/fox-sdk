import * as core from '../../../core';

export const TickHistoryRuntimeOptionsTickType = {
  Trades: 'trades',
  Quotes: 'quotes',
  QuotesAndTrades: 'quotesAndTrades',
} as const;

export type TickHistoryRuntimeOptionsTickType =
  (typeof TickHistoryRuntimeOptionsTickType)[keyof typeof TickHistoryRuntimeOptionsTickType];

export const tickHistoryRuntimeOptionsTickType =
  core.cast.identity<TickHistoryRuntimeOptionsTickType>();
