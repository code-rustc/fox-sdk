import * as core from '../../../core';
import {
  ActionsDurationDateRange as _ActionsDurationDateRange,
  actionsDurationDateRange,
  actionsDurationDateRangeRequest,
  actionsDurationDateRangeResponse,
} from '../../common/actions-duration-date-range';
import {
  IntervalDateRange as _IntervalDateRange,
  intervalDateRange,
  intervalDateRangeRequest,
  intervalDateRangeResponse,
} from '../../common/interval-date-range';

/**
 * Cast schema for the ActionsRuntimeOptionsDateRange model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const actionsRuntimeOptionsDateRange = core.cast.identity<ActionsRuntimeOptionsDateRange>();

/**
 * This property specifies the date range across which the request will search for corporate actions. Any `ActionsRequest` that references a recurring `ScheduledTrigger` (where the frequency is "daily" "weekday" "weekend" "weekly" or "monthly") may only specify a `ActionsDurationDateRange`, ensuring the date range remains relative to each execution of the request. An `ActionsRequest` that references a trigger which will only execute once (a `ScheduledTrigger` with a frequency of "once" or a `SubmitTrigger`) can also specify a date range using literal dates using an `IntervalDateRange`. If this property is not supplied, the range will default to an `ActionsDurationDateRange` with 0 `days`.
 */
export type ActionsRuntimeOptionsDateRange =
  | ActionsRuntimeOptionsDateRange.ActionsDurationDateRange
  | ActionsRuntimeOptionsDateRange.IntervalDateRange;

export namespace ActionsRuntimeOptionsDateRange {
  export interface ActionsDurationDateRange extends _ActionsDurationDateRange {
    _type: 'ActionsDurationDateRange';
  }
  export interface IntervalDateRange extends _IntervalDateRange {
    _type: 'IntervalDateRange';
  }
}

export const actionsRuntimeOptionsDateRangeResponse =
  core.cast.identity<ActionsRuntimeOptionsDateRange>();

export const actionsRuntimeOptionsDateRangeRequest =
  core.cast.identity<ActionsRuntimeOptionsDateRange>();
