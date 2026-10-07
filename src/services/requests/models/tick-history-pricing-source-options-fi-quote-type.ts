import * as core from '../../../core';

export const TickHistoryPricingSourceOptionsFiQuoteType = {
  Price: 'price',
  Yield: 'yield',
  TkrConfig: 'tkrConfig',
} as const;

export type TickHistoryPricingSourceOptionsFiQuoteType =
  (typeof TickHistoryPricingSourceOptionsFiQuoteType)[keyof typeof TickHistoryPricingSourceOptionsFiQuoteType];

export const tickHistoryPricingSourceOptionsFiQuoteType =
  core.cast.identity<TickHistoryPricingSourceOptionsFiQuoteType>();
