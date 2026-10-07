import * as core from '../../core';
import {
  TickHistoryRuntimeOptionsType,
  tickHistoryRuntimeOptionsType,
} from '../requests/models/tick-history-runtime-options-type';
import {
  TickHistoryRuntimeOptionsDateTimeRange,
  tickHistoryRuntimeOptionsDateTimeRange,
  tickHistoryRuntimeOptionsDateTimeRangeRequest,
  tickHistoryRuntimeOptionsDateTimeRangeResponse,
} from '../requests/models/tick-history-runtime-options-date-time-range';
import {
  TickHistoryRuntimeOptionsTickType,
  tickHistoryRuntimeOptionsTickType,
} from '../requests/models/tick-history-runtime-options-tick-type';

/**
 * Options specific to Tick History requests.
 */
export interface TickHistoryRuntimeOptions {
  /** JSON-LD type */
  _type: 'TickHistoryRuntimeOptions';
  /** This parameter is used to specify the datetime range for output data, and can span a maximum interval of 366 days. The timezone of these datetime values is assumed to be UTC. The datetime values in the output are also in UTC. */
  dateTimeRange: TickHistoryRuntimeOptionsDateTimeRange;
  /** Provides a string value that indicates the type of a Tick such as trades, quotes or both. */
  tickType?: TickHistoryRuntimeOptionsTickType | undefined;
}

export namespace TickHistoryRuntimeOptions {
  export type _Type = TickHistoryRuntimeOptionsType;
  export type DateTimeRange = TickHistoryRuntimeOptionsDateTimeRange;
  export type TickType = TickHistoryRuntimeOptionsTickType;
}

/**
 * Cast schema for the TickHistoryRuntimeOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const tickHistoryRuntimeOptions = core.cast.identity<TickHistoryRuntimeOptions>();

/**
 * Cast schema for mapping API responses to the TickHistoryRuntimeOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const tickHistoryRuntimeOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'dateTimeRange', 'tickType']);
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
      tickType: raw['tickType'],
    };
  },
  ['@type', 'dateTimeRange'],
);

/**
 * Cast schema for mapping the TickHistoryRuntimeOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const tickHistoryRuntimeOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      dateTimeRange: raw['dateTimeRange'],
      tickType: raw['tickType'],
    };
  },
  ['@type', 'dateTimeRange'],
);
