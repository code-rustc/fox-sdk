import * as core from '../../core';

export const DistributionTypeName = {
  Distribution: 'Distribution',
  SampleDistribution: 'SampleDistribution',
  StatisticsDistribution: 'StatisticsDistribution',
} as const;

export type DistributionTypeName = (typeof DistributionTypeName)[keyof typeof DistributionTypeName];

export const distributionTypeName = core.cast.identity<DistributionTypeName>();
