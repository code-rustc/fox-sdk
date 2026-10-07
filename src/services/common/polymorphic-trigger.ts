import * as core from '../../core';
import {
  SubmitTrigger as _SubmitTrigger,
  submitTrigger,
  submitTriggerRequest,
  submitTriggerResponse,
} from './submit-trigger';
import {
  ScheduledTrigger as _ScheduledTrigger,
  scheduledTrigger,
  scheduledTriggerRequest,
  scheduledTriggerResponse,
} from './scheduled-trigger';
import {
  BvalSnapshotTrigger as _BvalSnapshotTrigger,
  bvalSnapshotTrigger,
  bvalSnapshotTriggerRequest,
  bvalSnapshotTriggerResponse,
} from './bval-snapshot-trigger';
import {
  PricingSnapshotTrigger as _PricingSnapshotTrigger,
  pricingSnapshotTrigger,
  pricingSnapshotTriggerRequest,
  pricingSnapshotTriggerResponse,
} from './pricing-snapshot-trigger';

/**
 * Cast schema for the PolymorphicTrigger model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const polymorphicTrigger = core.cast.identity<PolymorphicTrigger>();

export type PolymorphicTrigger =
  | PolymorphicTrigger.SubmitTrigger
  | PolymorphicTrigger.ScheduledTrigger
  | PolymorphicTrigger.BvalSnapshotTrigger
  | PolymorphicTrigger.PricingSnapshotTrigger;

export namespace PolymorphicTrigger {
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

export const polymorphicTriggerResponse = core.cast.identity<PolymorphicTrigger>();

export const polymorphicTriggerRequest = core.cast.identity<PolymorphicTrigger>();
