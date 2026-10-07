import * as core from '../../core';
import {
  DistributionsMember,
  distributionsMember,
  distributionsMemberRequest,
  distributionsMemberResponse,
} from './distributions-member';
import {
  Distribution,
  distribution,
  distributionRequest,
  distributionResponse,
} from './distribution';
import {
  SampleDistribution,
  sampleDistribution,
  sampleDistributionRequest,
  sampleDistributionResponse,
} from './sample-distribution';
import {
  StatisticsDistribution,
  statisticsDistribution,
  statisticsDistributionRequest,
  statisticsDistributionResponse,
} from './statistics-distribution';

/**
 * Cast schema for the DistributionsMembersItem model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const distributionsMembersItem = core.cast.identity<DistributionsMembersItem>();

export type DistributionsMembersItem =
  | DistributionsMember
  | Distribution
  | SampleDistribution
  | StatisticsDistribution;

export const distributionsMembersItemResponse = core.cast.identity<DistributionsMembersItem>();

export const distributionsMembersItemRequest = core.cast.identity<DistributionsMembersItem>();
