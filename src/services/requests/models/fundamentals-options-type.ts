import * as core from '../../../core';

export const FundamentalsOptionsType = {
  HistoryFundamentalsOptions: 'HistoryFundamentalsOptions',
} as const;

export type FundamentalsOptionsType =
  (typeof FundamentalsOptionsType)[keyof typeof FundamentalsOptionsType];

export const fundamentalsOptionsType = core.cast.identity<FundamentalsOptionsType>();
