import * as core from '../../../core';

export const DurationDateRangeType = {
  DurationDateRange: 'DurationDateRange',
} as const;

export type DurationDateRangeType =
  (typeof DurationDateRangeType)[keyof typeof DurationDateRangeType];

export const durationDateRangeType = core.cast.identity<DurationDateRangeType>();
