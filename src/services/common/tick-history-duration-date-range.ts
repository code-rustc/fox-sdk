import * as core from '../../core';
import {
  TickHistoryDurationDateRangeType,
  tickHistoryDurationDateRangeType,
} from '../requests/models/tick-history-duration-date-range-type';

/**
 * Allows you to specify a date range as a number of calendar days previous to the current day.
 */
export interface TickHistoryDurationDateRange {
  /** JSON-LD type */
  _type: 'DurationDateRange';
  /** The number of calendar days between the start of the time series and the current day. */
  days: number;
}

export namespace TickHistoryDurationDateRange {
  export type _Type = TickHistoryDurationDateRangeType;
}

/**
 * Cast schema for the TickHistoryDurationDateRange model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const tickHistoryDurationDateRange = core.cast.identity<TickHistoryDurationDateRange>();

/**
 * Cast schema for mapping API responses to the TickHistoryDurationDateRange application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const tickHistoryDurationDateRangeResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'days']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'], days: raw['days'] };
  },
  ['@type', 'days'],
);

/**
 * Cast schema for mapping the TickHistoryDurationDateRange application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const tickHistoryDurationDateRangeRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], days: raw['days'] };
  },
  ['@type', 'days'],
);
