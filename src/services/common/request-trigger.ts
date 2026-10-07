import * as core from '../../core';
import {
  RequestSubmitTrigger as _RequestSubmitTrigger,
  requestSubmitTrigger,
  requestSubmitTriggerRequest,
  requestSubmitTriggerResponse,
} from './request-submit-trigger';
import {
  RequestScheduledTrigger as _RequestScheduledTrigger,
  requestScheduledTrigger,
  requestScheduledTriggerRequest,
  requestScheduledTriggerResponse,
} from './request-scheduled-trigger';
import {
  RequestBvalSnapshotTrigger as _RequestBvalSnapshotTrigger,
  requestBvalSnapshotTrigger,
  requestBvalSnapshotTriggerRequest,
  requestBvalSnapshotTriggerResponse,
} from './request-bval-snapshot-trigger';
import {
  RequestPricingSnapshotTrigger as _RequestPricingSnapshotTrigger,
  requestPricingSnapshotTrigger,
  requestPricingSnapshotTriggerRequest,
  requestPricingSnapshotTriggerResponse,
} from './request-pricing-snapshot-trigger';

/**
 * Cast schema for the RequestTrigger model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const requestTrigger = core.cast.identity<RequestTrigger>();

export type RequestTrigger =
  | RequestTrigger.SubmitTrigger
  | RequestTrigger.ScheduledTrigger
  | RequestTrigger.BvalSnapshotTrigger
  | RequestTrigger.PricingSnapshotTrigger;

export namespace RequestTrigger {
  export interface SubmitTrigger extends _RequestSubmitTrigger {
    _type: 'SubmitTrigger';
  }
  export interface ScheduledTrigger extends _RequestScheduledTrigger {
    _type: 'ScheduledTrigger';
  }
  export interface BvalSnapshotTrigger extends _RequestBvalSnapshotTrigger {
    _type: 'BvalSnapshotTrigger';
  }
  export interface PricingSnapshotTrigger extends _RequestPricingSnapshotTrigger {
    _type: 'PricingSnapshotTrigger';
  }
}

export const requestTriggerResponse = core.cast.identity<RequestTrigger>();

export const requestTriggerRequest = core.cast.identity<RequestTrigger>();
