import * as core from '../../../core';
import {
  TickHistoryBarIntervalMinutes as _TickHistoryBarIntervalMinutes,
  tickHistoryBarIntervalMinutes,
  tickHistoryBarIntervalMinutesRequest,
  tickHistoryBarIntervalMinutesResponse,
} from '../../common/tick-history-bar-interval-minutes';

/**
 * Cast schema for the TickHistoryOhlcRuntimeOptionsBarInterval model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const tickHistoryOhlcRuntimeOptionsBarInterval =
  core.cast.identity<TickHistoryOhlcRuntimeOptionsBarInterval>();

/**
 * Allows you to customize the interval for the corresponding open, high, low, and closing bar.
 */
export type TickHistoryOhlcRuntimeOptionsBarInterval =
  TickHistoryOhlcRuntimeOptionsBarInterval.Minutes;

export namespace TickHistoryOhlcRuntimeOptionsBarInterval {
  export interface Minutes extends _TickHistoryBarIntervalMinutes {
    _type: 'minutes';
  }
}

export const tickHistoryOhlcRuntimeOptionsBarIntervalResponse =
  core.cast.identity<TickHistoryOhlcRuntimeOptionsBarInterval>();

export const tickHistoryOhlcRuntimeOptionsBarIntervalRequest =
  core.cast.identity<TickHistoryOhlcRuntimeOptionsBarInterval>();
