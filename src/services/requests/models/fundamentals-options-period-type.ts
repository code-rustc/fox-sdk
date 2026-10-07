import * as core from '../../../core';

export const FundamentalsOptionsPeriodType = {
  Quarterly: 'quarterly',
  SemiAnnually: 'semiAnnually',
  Annually: 'annually',
  LastTwelveMonths: 'lastTwelveMonths',
  PrimaryPeriodicity: 'primaryPeriodicity',
} as const;

export type FundamentalsOptionsPeriodType =
  (typeof FundamentalsOptionsPeriodType)[keyof typeof FundamentalsOptionsPeriodType];

export const fundamentalsOptionsPeriodType = core.cast.identity<FundamentalsOptionsPeriodType>();
