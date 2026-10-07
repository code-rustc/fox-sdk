import * as core from '../../../core';
import {
  SubmitTrigger as _SubmitTrigger,
  submitTrigger,
  submitTriggerRequest,
  submitTriggerResponse,
} from '../../common/submit-trigger';
import {
  ScheduledTrigger as _ScheduledTrigger,
  scheduledTrigger,
  scheduledTriggerRequest,
  scheduledTriggerResponse,
} from '../../common/scheduled-trigger';
import {
  BvalSnapshotTrigger as _BvalSnapshotTrigger,
  bvalSnapshotTrigger,
  bvalSnapshotTriggerRequest,
  bvalSnapshotTriggerResponse,
} from '../../common/bval-snapshot-trigger';
import {
  PricingSnapshotTrigger as _PricingSnapshotTrigger,
  pricingSnapshotTrigger,
  pricingSnapshotTriggerRequest,
  pricingSnapshotTriggerResponse,
} from '../../common/pricing-snapshot-trigger';

/**
 * Cast schema for the GetTriggerByRequestResponse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const getTriggerByRequestResponse = core.cast.identity<GetTriggerByRequestResponse>();

export type GetTriggerByRequestResponse =
  | GetTriggerByRequestResponse.SubmitTrigger
  | GetTriggerByRequestResponse.ScheduledTrigger
  | GetTriggerByRequestResponse.BvalSnapshotTrigger
  | GetTriggerByRequestResponse.PricingSnapshotTrigger;

export namespace GetTriggerByRequestResponse {
  export interface SubmitTrigger extends _SubmitTrigger {
    _type: 'SubmitTrigger';
  }
  export interface ScheduledTrigger extends _ScheduledTrigger {
    _type: 'ScheduledTrigger';
  }
  export interface BvalSnapshotTrigger extends _BvalSnapshotTrigger {
    _type: 'BvalSnapshotTrigger';
  }
  export interface PricingSnapshotTrigger extends _PricingSnapshotTrigger {
    _type: 'PricingSnapshotTrigger';
  }
}

export const getTriggerByRequestResponseResponse =
  core.cast.identity<GetTriggerByRequestResponse>();

export const getTriggerByRequestResponseRequest = core.cast.identity<GetTriggerByRequestResponse>();
