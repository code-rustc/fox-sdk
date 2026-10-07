import * as core from '../../../core';

export const IntervalDateRangeType = {
  IntervalDateRange: 'IntervalDateRange',
} as const;

export type IntervalDateRangeType =
  (typeof IntervalDateRangeType)[keyof typeof IntervalDateRangeType];

export const intervalDateRangeType = core.cast.identity<IntervalDateRangeType>();
