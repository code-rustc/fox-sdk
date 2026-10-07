import * as core from '../../core';

export const BvalPricingSource = {
  Bval: 'BVAL',
  Bvic: 'BVIC',
} as const;

export type BvalPricingSource = (typeof BvalPricingSource)[keyof typeof BvalPricingSource];

export const bvalPricingSource = core.cast.identity<BvalPricingSource>();
