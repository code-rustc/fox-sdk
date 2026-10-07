import * as core from '../../../core';

export const TickHistoryPricingSourceOptionsType = {
  TickHistoryPricingSourceOptions: 'TickHistoryPricingSourceOptions',
} as const;

export type TickHistoryPricingSourceOptionsType =
  (typeof TickHistoryPricingSourceOptionsType)[keyof typeof TickHistoryPricingSourceOptionsType];

export const tickHistoryPricingSourceOptionsType =
  core.cast.identity<TickHistoryPricingSourceOptionsType>();
