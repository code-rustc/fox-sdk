import * as core from '../../../core';

export const HistoryPricingSourceOptionsType = {
  HistoryPricingSourceOptions: 'HistoryPricingSourceOptions',
} as const;

export type HistoryPricingSourceOptionsType =
  (typeof HistoryPricingSourceOptionsType)[keyof typeof HistoryPricingSourceOptionsType];

export const historyPricingSourceOptionsType =
  core.cast.identity<HistoryPricingSourceOptionsType>();
