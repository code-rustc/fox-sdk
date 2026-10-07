import * as core from '../../../core';
import {
  RequestUniverse,
  requestUniverse,
  requestUniverseRequest,
  requestUniverseResponse,
} from '../../common/request-universe';
import { Id } from '../../common/id';

/**
 * Cast schema for the PricingSnapshotRequestPostPayloadUniverse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const pricingSnapshotRequestPostPayloadUniverse =
  core.cast.identity<PricingSnapshotRequestPostPayloadUniverse>();

export type PricingSnapshotRequestPostPayloadUniverse = RequestUniverse | Id;

export const pricingSnapshotRequestPostPayloadUniverseResponse =
  core.cast.identity<PricingSnapshotRequestPostPayloadUniverse>();

export const pricingSnapshotRequestPostPayloadUniverseRequest =
  core.cast.identity<PricingSnapshotRequestPostPayloadUniverse>();
