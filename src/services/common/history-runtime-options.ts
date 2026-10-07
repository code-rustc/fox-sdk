import * as core from '../../core';
import {
  HistoryRuntimeOptionsType,
  historyRuntimeOptionsType,
} from '../requests/models/history-runtime-options-type';
import {
  HistoryRuntimeOptionsDateRange,
  historyRuntimeOptionsDateRange,
  historyRuntimeOptionsDateRangeRequest,
  historyRuntimeOptionsDateRangeResponse,
} from '../requests/models/history-runtime-options-date-range';
import {
  HistoryRuntimeOptionsPeriod,
  historyRuntimeOptionsPeriod,
} from '../requests/models/history-runtime-options-period';

/**
 * Options specific to history data requests.
 */
export interface HistoryRuntimeOptions {
  /** JSON-LD type */
  '@type': HistoryRuntimeOptionsType;
  /** This parameter is used to specify the date range for output data. */
  dateRange?: HistoryRuntimeOptionsDateRange | undefined;
  /** This option allows for the specification of a desired currency for history requests. */
  historyPriceCurrency?: string | undefined;
  /** Set the time step (periodicity) of the request. For every period within the specified dateRange the return value is the final data point at the end of the period. Defaults to "daily". */
  period?: HistoryRuntimeOptionsPeriod | undefined;
}

export namespace HistoryRuntimeOptions {
  export type _Type = HistoryRuntimeOptionsType;
  export type DateRange = HistoryRuntimeOptionsDateRange;
  export type Period = HistoryRuntimeOptionsPeriod;
}

/**
 * Cast schema for the HistoryRuntimeOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const historyRuntimeOptions = core.cast.identity<HistoryRuntimeOptions>();

/**
 * Cast schema for mapping API responses to the HistoryRuntimeOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const historyRuntimeOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      'dateRange',
      'historyPriceCurrency',
      'period',
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
      dateRange: raw['dateRange'],
      historyPriceCurrency: raw['historyPriceCurrency'],
      period: raw['period'],
    };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the HistoryRuntimeOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const historyRuntimeOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      dateRange: raw['dateRange'],
      historyPriceCurrency: raw['historyPriceCurrency'],
      period: raw['period'],
    };
  },
  ['@type'],
);
