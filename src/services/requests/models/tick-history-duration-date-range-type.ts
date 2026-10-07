import * as core from '../../../core';

export const TickHistoryDurationDateRangeType = {
  DurationDateRange: 'DurationDateRange',
} as const;

export type TickHistoryDurationDateRangeType =
  (typeof TickHistoryDurationDateRangeType)[keyof typeof TickHistoryDurationDateRangeType];

export const tickHistoryDurationDateRangeType =
  core.cast.identity<TickHistoryDurationDateRangeType>();
