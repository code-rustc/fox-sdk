import * as core from '../../../core';

export const DataPricingSourceOptionsType = {
  DataPricingSourceOptions: 'DataPricingSourceOptions',
} as const;

export type DataPricingSourceOptionsType =
  (typeof DataPricingSourceOptionsType)[keyof typeof DataPricingSourceOptionsType];

export const dataPricingSourceOptionsType = core.cast.identity<DataPricingSourceOptionsType>();
