import * as core from '../../../core';

export const FundamentalsOptionsFaAdjustmentType = {
  Adjusted: 'adjusted',
  Gaap: 'GAAP',
} as const;

export type FundamentalsOptionsFaAdjustmentType =
  (typeof FundamentalsOptionsFaAdjustmentType)[keyof typeof FundamentalsOptionsFaAdjustmentType];

export const fundamentalsOptionsFaAdjustmentType =
  core.cast.identity<FundamentalsOptionsFaAdjustmentType>();
