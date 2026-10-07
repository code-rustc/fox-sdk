import * as core from '../../core';
import {
  SubmitTriggerPatchPayload,
  submitTriggerPatchPayload,
  submitTriggerPatchPayloadRequest,
  submitTriggerPatchPayloadResponse,
} from './submit-trigger-patch-payload';
import {
  ScheduledTriggerPatchPayload,
  scheduledTriggerPatchPayload,
  scheduledTriggerPatchPayloadRequest,
  scheduledTriggerPatchPayloadResponse,
} from './scheduled-trigger-patch-payload';
import {
  BvalSnapshotTriggerPatchPayload,
  bvalSnapshotTriggerPatchPayload,
  bvalSnapshotTriggerPatchPayloadRequest,
  bvalSnapshotTriggerPatchPayloadResponse,
} from './bval-snapshot-trigger-patch-payload';
import {
  PricingSnapshotTriggerPatchPayload,
  pricingSnapshotTriggerPatchPayload,
  pricingSnapshotTriggerPatchPayloadRequest,
  pricingSnapshotTriggerPatchPayloadResponse,
} from './pricing-snapshot-trigger-patch-payload';

/**
 * Cast schema for the TriggerPatchPayload model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const triggerPatchPayload = core.cast.identity<TriggerPatchPayload>();

export type TriggerPatchPayload =
  | SubmitTriggerPatchPayload
  | ScheduledTriggerPatchPayload
  | BvalSnapshotTriggerPatchPayload
  | PricingSnapshotTriggerPatchPayload;

export const triggerPatchPayloadResponse = core.cast.identity<TriggerPatchPayload>();

export const triggerPatchPayloadRequest = core.cast.identity<TriggerPatchPayload>();
