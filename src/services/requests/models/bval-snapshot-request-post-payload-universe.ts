import * as core from '../../../core';
import {
  RequestUniverse,
  requestUniverse,
  requestUniverseRequest,
  requestUniverseResponse,
} from '../../common/request-universe';
import { Id } from '../../common/id';

/**
 * Cast schema for the BvalSnapshotRequestPostPayloadUniverse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const bvalSnapshotRequestPostPayloadUniverse =
  core.cast.identity<BvalSnapshotRequestPostPayloadUniverse>();

export type BvalSnapshotRequestPostPayloadUniverse = RequestUniverse | Id;

export const bvalSnapshotRequestPostPayloadUniverseResponse =
  core.cast.identity<BvalSnapshotRequestPostPayloadUniverse>();

export const bvalSnapshotRequestPostPayloadUniverseRequest =
  core.cast.identity<BvalSnapshotRequestPostPayloadUniverse>();
