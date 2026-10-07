import * as core from '../../../core';

export const Type1 = {
  Distribution: 'Distribution',
  SampleDistribution: 'SampleDistribution',
  StatisticsDistribution: 'StatisticsDistribution',
} as const;

export type Type1 = (typeof Type1)[keyof typeof Type1];

export const type1 = core.cast.identity<Type1>();
