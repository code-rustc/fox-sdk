import * as core from '../../../core';

export const PricingSnapshotRuntimeOptionsType = {
  PricingSnapshotRuntimeOptions: 'PricingSnapshotRuntimeOptions',
} as const;

export type PricingSnapshotRuntimeOptionsType =
  (typeof PricingSnapshotRuntimeOptionsType)[keyof typeof PricingSnapshotRuntimeOptionsType];

export const pricingSnapshotRuntimeOptionsType =
  core.cast.identity<PricingSnapshotRuntimeOptionsType>();
