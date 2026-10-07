import * as core from '../../../core';

export const TickHistoryRuntimeOptionsType = {
  TickHistoryRuntimeOptions: 'TickHistoryRuntimeOptions',
} as const;

export type TickHistoryRuntimeOptionsType =
  (typeof TickHistoryRuntimeOptionsType)[keyof typeof TickHistoryRuntimeOptionsType];

export const tickHistoryRuntimeOptionsType = core.cast.identity<TickHistoryRuntimeOptionsType>();
