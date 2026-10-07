import * as core from '../../../core';
import {
  IntervalDateRange as _IntervalDateRange,
  intervalDateRange,
  intervalDateRangeRequest,
  intervalDateRangeResponse,
} from '../../common/interval-date-range';
import {
  DurationDateRange as _DurationDateRange,
  durationDateRange,
  durationDateRangeRequest,
  durationDateRangeResponse,
} from '../../common/duration-date-range';

/**
 * Cast schema for the HistoryRuntimeOptionsDateRange model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const historyRuntimeOptionsDateRange = core.cast.identity<HistoryRuntimeOptionsDateRange>();

/**
 * This parameter is used to specify the date range for output data.
 */
export type HistoryRuntimeOptionsDateRange =
  | HistoryRuntimeOptionsDateRange.IntervalDateRange
  | HistoryRuntimeOptionsDateRange.DurationDateRange;

export namespace HistoryRuntimeOptionsDateRange {
  export interface IntervalDateRange extends _IntervalDateRange {
    _type: 'IntervalDateRange';
  }
  export interface DurationDateRange extends _DurationDateRange {
    _type: 'DurationDateRange';
  }
}

export const historyRuntimeOptionsDateRangeResponse =
  core.cast.identity<HistoryRuntimeOptionsDateRange>();

export const historyRuntimeOptionsDateRangeRequest =
  core.cast.identity<HistoryRuntimeOptionsDateRange>();
