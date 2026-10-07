import * as core from '../../../core';

export const HistoryRuntimeOptionsPeriod = {
  Daily: 'daily',
  Weekly: 'weekly',
  Monthly: 'monthly',
  Quarterly: 'quarterly',
  Yearly: 'yearly',
} as const;

export type HistoryRuntimeOptionsPeriod =
  (typeof HistoryRuntimeOptionsPeriod)[keyof typeof HistoryRuntimeOptionsPeriod];

export const historyRuntimeOptionsPeriod = core.cast.identity<HistoryRuntimeOptionsPeriod>();
