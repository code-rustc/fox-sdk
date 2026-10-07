import * as core from '../../../core';

export const TickHistoryOhlcRuntimeOptionsType = {
  TickHistoryOhlcRuntimeOptions: 'TickHistoryOHLCRuntimeOptions',
} as const;

export type TickHistoryOhlcRuntimeOptionsType =
  (typeof TickHistoryOhlcRuntimeOptionsType)[keyof typeof TickHistoryOhlcRuntimeOptionsType];

export const tickHistoryOhlcRuntimeOptionsType =
  core.cast.identity<TickHistoryOhlcRuntimeOptionsType>();
