import * as core from '../../../core';
import {
  IntervalDateTimeRange as _IntervalDateTimeRange,
  intervalDateTimeRange,
  intervalDateTimeRangeRequest,
  intervalDateTimeRangeResponse,
} from '../../common/interval-date-time-range';
import {
  IntervalDateRange as _IntervalDateRange,
  intervalDateRange,
  intervalDateRangeRequest,
  intervalDateRangeResponse,
} from '../../common/interval-date-range';
import {
  TickHistoryDurationDateRange as _TickHistoryDurationDateRange,
  tickHistoryDurationDateRange,
  tickHistoryDurationDateRangeRequest,
  tickHistoryDurationDateRangeResponse,
} from '../../common/tick-history-duration-date-range';

/**
 * Cast schema for the TickHistoryOhlcRuntimeOptionsDateTimeRange model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const tickHistoryOhlcRuntimeOptionsDateTimeRange =
  core.cast.identity<TickHistoryOhlcRuntimeOptionsDateTimeRange>();

/**
 * This parameter is used to specify the datetime range for output data, and can span a maximum interval of 366 days. The timezone of these datetime values is assumed to be UTC. The datetime values in the output are also in UTC.
 */
export type TickHistoryOhlcRuntimeOptionsDateTimeRange =
  | TickHistoryOhlcRuntimeOptionsDateTimeRange.IntervalDateTimeRange
  | TickHistoryOhlcRuntimeOptionsDateTimeRange.IntervalDateRange
  | TickHistoryOhlcRuntimeOptionsDateTimeRange.DurationDateRange;

export namespace TickHistoryOhlcRuntimeOptionsDateTimeRange {
  export interface IntervalDateTimeRange extends _IntervalDateTimeRange {
    _type: 'IntervalDateTimeRange';
  }
  export interface IntervalDateRange extends _IntervalDateRange {
    _type: 'IntervalDateRange';
  }
  export interface DurationDateRange extends _TickHistoryDurationDateRange {
    _type: 'DurationDateRange';
  }
}

export const tickHistoryOhlcRuntimeOptionsDateTimeRangeResponse =
  core.cast.identity<TickHistoryOhlcRuntimeOptionsDateTimeRange>();

export const tickHistoryOhlcRuntimeOptionsDateTimeRangeRequest =
  core.cast.identity<TickHistoryOhlcRuntimeOptionsDateTimeRange>();
