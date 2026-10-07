import * as core from '../../../core';
import {
  RequestPricingSnapshotTrigger,
  requestPricingSnapshotTrigger,
  requestPricingSnapshotTriggerRequest,
  requestPricingSnapshotTriggerResponse,
} from '../../common/request-pricing-snapshot-trigger';
import { Id } from '../../common/id';

/**
 * Cast schema for the PricingSnapshotRequestPostPayloadTrigger model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const pricingSnapshotRequestPostPayloadTrigger =
  core.cast.identity<PricingSnapshotRequestPostPayloadTrigger>();

export type PricingSnapshotRequestPostPayloadTrigger = RequestPricingSnapshotTrigger | Id;

export const pricingSnapshotRequestPostPayloadTriggerResponse =
  core.cast.identity<PricingSnapshotRequestPostPayloadTrigger>();

export const pricingSnapshotRequestPostPayloadTriggerRequest =
  core.cast.identity<PricingSnapshotRequestPostPayloadTrigger>();
