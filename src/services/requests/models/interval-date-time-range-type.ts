import * as core from '../../../core';

export const IntervalDateTimeRangeType = {
  IntervalDateTimeRange: 'IntervalDateTimeRange',
} as const;

export type IntervalDateTimeRangeType =
  (typeof IntervalDateTimeRangeType)[keyof typeof IntervalDateTimeRangeType];

export const intervalDateTimeRangeType = core.cast.identity<IntervalDateTimeRangeType>();
