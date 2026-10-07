import * as core from '../../../core';

export const FundamentalsOptionsDateType = {
  PeriodEnd: 'periodEnd',
  Reported: 'reported',
} as const;

export type FundamentalsOptionsDateType =
  (typeof FundamentalsOptionsDateType)[keyof typeof FundamentalsOptionsDateType];

export const fundamentalsOptionsDateType = core.cast.identity<FundamentalsOptionsDateType>();
