import * as core from '../../../core';

export const TickHistoryOhlcRuntimeOptionsConditionCodesTemplate = {
  Vwap: 'VWAP',
  Bpipe: 'BPIPE',
  AllCodes: 'allCodes',
  NoCodes: 'noCodes',
} as const;

export type TickHistoryOhlcRuntimeOptionsConditionCodesTemplate =
  (typeof TickHistoryOhlcRuntimeOptionsConditionCodesTemplate)[keyof typeof TickHistoryOhlcRuntimeOptionsConditionCodesTemplate];

export const tickHistoryOhlcRuntimeOptionsConditionCodesTemplate =
  core.cast.identity<TickHistoryOhlcRuntimeOptionsConditionCodesTemplate>();
