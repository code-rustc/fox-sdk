import * as core from '../../core';

export const DistributionType = {
  Distribution: 'Distribution',
  SampleDistribution: 'SampleDistribution',
  StatisticsDistribution: 'StatisticsDistribution',
} as const;

export type DistributionType = (typeof DistributionType)[keyof typeof DistributionType];

export const distributionType = core.cast.identity<DistributionType>();
