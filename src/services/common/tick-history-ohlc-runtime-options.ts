import * as core from '../../core';
import {
  TickHistoryOhlcRuntimeOptionsType,
  tickHistoryOhlcRuntimeOptionsType,
} from '../requests/models/tick-history-ohlc-runtime-options-type';
import {
  TickHistoryOhlcRuntimeOptionsDateTimeRange,
  tickHistoryOhlcRuntimeOptionsDateTimeRange,
  tickHistoryOhlcRuntimeOptionsDateTimeRangeRequest,
  tickHistoryOhlcRuntimeOptionsDateTimeRangeResponse,
} from '../requests/models/tick-history-ohlc-runtime-options-date-time-range';
import {
  TickHistoryOhlcRuntimeOptionsEventType,
  tickHistoryOhlcRuntimeOptionsEventType,
} from '../requests/models/tick-history-ohlc-runtime-options-event-type';
import {
  TickHistoryOhlcRuntimeOptionsBarInterval,
  tickHistoryOhlcRuntimeOptionsBarInterval,
  tickHistoryOhlcRuntimeOptionsBarIntervalRequest,
  tickHistoryOhlcRuntimeOptionsBarIntervalResponse,
} from '../requests/models/tick-history-ohlc-runtime-options-bar-interval';
import {
  TickHistoryOhlcRuntimeOptionsConditionCodes,
  tickHistoryOhlcRuntimeOptionsConditionCodes,
  tickHistoryOhlcRuntimeOptionsConditionCodesRequest,
  tickHistoryOhlcRuntimeOptionsConditionCodesResponse,
} from '../requests/models/tick-history-ohlc-runtime-options-condition-codes';
import { TickHistoryOhlcRuntimeOptionsConditionCodesTemplate } from '../requests/models/tick-history-ohlc-runtime-options-condition-codes-template';

/**
 * Tick History request options, which allow you customize the scope of tick data and ensure a precise measurement. For example, you can specify the time periods, order types, and quotes that you want to include.
 */
export interface TickHistoryOhlcRuntimeOptions {
  /** JSON-LD type */
  _type: 'TickHistoryOHLCRuntimeOptions';
  /** This parameter is used to specify the datetime range for output data, and can span a maximum interval of 366 days. The timezone of these datetime values is assumed to be UTC. The datetime values in the output are also in UTC. */
  dateTimeRange: TickHistoryOhlcRuntimeOptionsDateTimeRange;
  /** The `eventType` indicates whether the corresponding open, high, low, and close price is for a completed trade (`trade`), a quote for a bid to buy (`bid`), or a quote for an ask to sell (`ask`). */
  eventType: TickHistoryOhlcRuntimeOptionsEventType;
  /** Allows you to customize the interval for the corresponding open, high, low, and closing bar. */
  barInterval: TickHistoryOhlcRuntimeOptionsBarInterval;
  /** Identify extraordinary trading and quoting circumstances that correspond to orders on a given exchange, so you can precisely measure tick data with the most relevant volume metrics.

For more on the available codes and their descriptions: [data.bloomberg.com > Bulk Datasets > Metadata - Condition Code - descriptive data](https://data.bloomberg.com/catalogs/bbg/datasets/conditionCode/snapshots/latest/distributions/#condition_code.out).
 */
  conditionCodes?: TickHistoryOhlcRuntimeOptionsConditionCodes | undefined;
}

export namespace TickHistoryOhlcRuntimeOptions {
  export type _Type = TickHistoryOhlcRuntimeOptionsType;
  export type DateTimeRange = TickHistoryOhlcRuntimeOptionsDateTimeRange;
  export type EventType = TickHistoryOhlcRuntimeOptionsEventType;
  export type BarInterval = TickHistoryOhlcRuntimeOptionsBarInterval;
  export interface ConditionCodes {
    template: TickHistoryOhlcRuntimeOptionsConditionCodes['template'];
    addCodes?: TickHistoryOhlcRuntimeOptionsConditionCodes['addCodes'];
    removeCodes?: TickHistoryOhlcRuntimeOptionsConditionCodes['removeCodes'];
  }
  export namespace ConditionCodes {
    export type Template = TickHistoryOhlcRuntimeOptionsConditionCodesTemplate;
  }
}

/**
 * Cast schema for the TickHistoryOhlcRuntimeOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const tickHistoryOhlcRuntimeOptions = core.cast.identity<TickHistoryOhlcRuntimeOptions>();

/**
 * Cast schema for mapping API responses to the TickHistoryOhlcRuntimeOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const tickHistoryOhlcRuntimeOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      'dateTimeRange',
      'eventType',
      'barInterval',
      'conditionCodes',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      dateTimeRange: raw['dateTimeRange'],
      eventType: raw['eventType'],
      barInterval: raw['barInterval'],
      conditionCodes:
        raw['conditionCodes'] == null
          ? raw['conditionCodes']
          : tickHistoryOhlcRuntimeOptionsConditionCodesResponse.parse(raw['conditionCodes']),
    };
  },
  ['@type', 'dateTimeRange', 'eventType', 'barInterval'],
);

/**
 * Cast schema for mapping the TickHistoryOhlcRuntimeOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const tickHistoryOhlcRuntimeOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      dateTimeRange: raw['dateTimeRange'],
      eventType: raw['eventType'],
      barInterval: raw['barInterval'],
      conditionCodes:
        raw['conditionCodes'] == null
          ? raw['conditionCodes']
          : tickHistoryOhlcRuntimeOptionsConditionCodesRequest.parse(raw['conditionCodes']),
    };
  },
  ['@type', 'dateTimeRange', 'eventType', 'barInterval'],
);
