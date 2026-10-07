import * as core from '../../core';
import {
  SubmitTriggerPostPayload as _SubmitTriggerPostPayload,
  submitTriggerPostPayload,
  submitTriggerPostPayloadRequest,
  submitTriggerPostPayloadResponse,
} from './submit-trigger-post-payload';
import {
  ScheduledTriggerPostPayload as _ScheduledTriggerPostPayload,
  scheduledTriggerPostPayload,
  scheduledTriggerPostPayloadRequest,
  scheduledTriggerPostPayloadResponse,
} from './scheduled-trigger-post-payload';
import {
  BvalSnapshotTriggerPostPayload as _BvalSnapshotTriggerPostPayload,
  bvalSnapshotTriggerPostPayload,
  bvalSnapshotTriggerPostPayloadRequest,
  bvalSnapshotTriggerPostPayloadResponse,
} from './bval-snapshot-trigger-post-payload';
import {
  PricingSnapshotTriggerPostPayload as _PricingSnapshotTriggerPostPayload,
  pricingSnapshotTriggerPostPayload,
  pricingSnapshotTriggerPostPayloadRequest,
  pricingSnapshotTriggerPostPayloadResponse,
} from './pricing-snapshot-trigger-post-payload';

/**
 * Cast schema for the TriggerPostPayload model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const triggerPostPayload = core.cast.identity<TriggerPostPayload>();

export type TriggerPostPayload =
  | TriggerPostPayload.SubmitTrigger
  | TriggerPostPayload.ScheduledTrigger
  | TriggerPostPayload.BvalSnapshotTrigger
  | TriggerPostPayload.PricingSnapshotTrigger;

export namespace TriggerPostPayload {
  export interface SubmitTrigger extends _SubmitTriggerPostPayload {
    _type: 'SubmitTrigger';
  }
  export interface ScheduledTrigger extends _ScheduledTriggerPostPayload {
    _type: 'ScheduledTrigger';
  }
  export interface BvalSnapshotTrigger extends _BvalSnapshotTriggerPostPayload {
    _type: 'BvalSnapshotTrigger';
  }
  export interface PricingSnapshotTrigger extends _PricingSnapshotTriggerPostPayload {
    _type: 'PricingSnapshotTrigger';
  }
}

export const triggerPostPayloadResponse = core.cast.identity<TriggerPostPayload>();

export const triggerPostPayloadRequest = core.cast.identity<TriggerPostPayload>();
