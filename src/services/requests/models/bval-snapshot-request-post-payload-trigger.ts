import * as core from '../../../core';
import {
  RequestBvalSnapshotTrigger,
  requestBvalSnapshotTrigger,
  requestBvalSnapshotTriggerRequest,
  requestBvalSnapshotTriggerResponse,
} from '../../common/request-bval-snapshot-trigger';
import { Id } from '../../common/id';

/**
 * Cast schema for the BvalSnapshotRequestPostPayloadTrigger model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const bvalSnapshotRequestPostPayloadTrigger =
  core.cast.identity<BvalSnapshotRequestPostPayloadTrigger>();

export type BvalSnapshotRequestPostPayloadTrigger = RequestBvalSnapshotTrigger | Id;

export const bvalSnapshotRequestPostPayloadTriggerResponse =
  core.cast.identity<BvalSnapshotRequestPostPayloadTrigger>();

export const bvalSnapshotRequestPostPayloadTriggerRequest =
  core.cast.identity<BvalSnapshotRequestPostPayloadTrigger>();
