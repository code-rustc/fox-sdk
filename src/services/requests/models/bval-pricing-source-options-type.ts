import * as core from '../../../core';

export const BvalPricingSourceOptionsType = {
  BvalPricingSourceOptions: 'BvalPricingSourceOptions',
} as const;

export type BvalPricingSourceOptionsType =
  (typeof BvalPricingSourceOptionsType)[keyof typeof BvalPricingSourceOptionsType];

export const bvalPricingSourceOptionsType = core.cast.identity<BvalPricingSourceOptionsType>();
