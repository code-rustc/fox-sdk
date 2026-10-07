import * as core from '../../core';
import {
  DeletedSubmitTrigger as _DeletedSubmitTrigger,
  deletedSubmitTrigger,
  deletedSubmitTriggerRequest,
  deletedSubmitTriggerResponse,
} from './deleted-submit-trigger';
import {
  DeletedScheduledTrigger as _DeletedScheduledTrigger,
  deletedScheduledTrigger,
  deletedScheduledTriggerRequest,
  deletedScheduledTriggerResponse,
} from './deleted-scheduled-trigger';
import {
  DeletedBvalSnapshotTrigger as _DeletedBvalSnapshotTrigger,
  deletedBvalSnapshotTrigger,
  deletedBvalSnapshotTriggerRequest,
  deletedBvalSnapshotTriggerResponse,
} from './deleted-bval-snapshot-trigger';
import {
  DeletedPricingSnapshotTrigger as _DeletedPricingSnapshotTrigger,
  deletedPricingSnapshotTrigger,
  deletedPricingSnapshotTriggerRequest,
  deletedPricingSnapshotTriggerResponse,
} from './deleted-pricing-snapshot-trigger';

/**
 * Cast schema for the PolymorphicDeletedTrigger model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const polymorphicDeletedTrigger = core.cast.identity<PolymorphicDeletedTrigger>();

export type PolymorphicDeletedTrigger =
  | PolymorphicDeletedTrigger.SubmitTrigger
  | PolymorphicDeletedTrigger.ScheduledTrigger
  | PolymorphicDeletedTrigger.BvalSnapshotTrigger
  | PolymorphicDeletedTrigger.PricingSnapshotTrigger;

export namespace PolymorphicDeletedTrigger {
  export interface SubmitTrigger extends _DeletedSubmitTrigger {
    _type: 'SubmitTrigger';
  }
  export interface ScheduledTrigger extends _DeletedScheduledTrigger {
    _type: 'ScheduledTrigger';
  }
  export interface BvalSnapshotTrigger extends _DeletedBvalSnapshotTrigger {
    _type: 'BvalSnapshotTrigger';
  }
  export interface PricingSnapshotTrigger extends _DeletedPricingSnapshotTrigger {
    _type: 'PricingSnapshotTrigger';
  }
}

export const polymorphicDeletedTriggerResponse = core.cast.identity<PolymorphicDeletedTrigger>();

export const polymorphicDeletedTriggerRequest = core.cast.identity<PolymorphicDeletedTrigger>();
