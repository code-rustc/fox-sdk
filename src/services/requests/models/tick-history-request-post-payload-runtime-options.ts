import * as core from '../../../core';
import {
  TickHistoryRuntimeOptions as _TickHistoryRuntimeOptions,
  tickHistoryRuntimeOptions,
  tickHistoryRuntimeOptionsRequest,
  tickHistoryRuntimeOptionsResponse,
} from '../../common/tick-history-runtime-options';
import {
  TickHistoryOhlcRuntimeOptions as _TickHistoryOhlcRuntimeOptions,
  tickHistoryOhlcRuntimeOptions,
  tickHistoryOhlcRuntimeOptionsRequest,
  tickHistoryOhlcRuntimeOptionsResponse,
} from '../../common/tick-history-ohlc-runtime-options';

/**
 * Cast schema for the TickHistoryRequestPostPayloadRuntimeOptions model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const tickHistoryRequestPostPayloadRuntimeOptions =
  core.cast.identity<TickHistoryRequestPostPayloadRuntimeOptions>();

export type TickHistoryRequestPostPayloadRuntimeOptions =
  | TickHistoryRequestPostPayloadRuntimeOptions.TickHistoryRuntimeOptions
  | TickHistoryRequestPostPayloadRuntimeOptions.TickHistoryOhlcRuntimeOptions;

export namespace TickHistoryRequestPostPayloadRuntimeOptions {
  export interface TickHistoryRuntimeOptions extends _TickHistoryRuntimeOptions {
    _type: 'TickHistoryRuntimeOptions';
  }
  export interface TickHistoryOhlcRuntimeOptions extends _TickHistoryOhlcRuntimeOptions {
    _type: 'TickHistoryOHLCRuntimeOptions';
  }
}

export const tickHistoryRequestPostPayloadRuntimeOptionsResponse =
  core.cast.identity<TickHistoryRequestPostPayloadRuntimeOptions>();

export const tickHistoryRequestPostPayloadRuntimeOptionsRequest =
  core.cast.identity<TickHistoryRequestPostPayloadRuntimeOptions>();
