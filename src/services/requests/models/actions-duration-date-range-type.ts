import * as core from '../../../core';

export const ActionsDurationDateRangeType = {
  ActionsDurationDateRange: 'ActionsDurationDateRange',
} as const;

export type ActionsDurationDateRangeType =
  (typeof ActionsDurationDateRangeType)[keyof typeof ActionsDurationDateRangeType];

export const actionsDurationDateRangeType = core.cast.identity<ActionsDurationDateRangeType>();
