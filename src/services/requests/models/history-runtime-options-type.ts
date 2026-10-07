import * as core from '../../../core';

export const HistoryRuntimeOptionsType = {
  HistoryRuntimeOptions: 'HistoryRuntimeOptions',
} as const;

export type HistoryRuntimeOptionsType =
  (typeof HistoryRuntimeOptionsType)[keyof typeof HistoryRuntimeOptionsType];

export const historyRuntimeOptionsType = core.cast.identity<HistoryRuntimeOptionsType>();
