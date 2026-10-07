import * as core from '../../core';
import {
  DurationDateRangeType,
  durationDateRangeType,
} from '../requests/models/duration-date-range-type';

/**
 * A date range specified by a number of calendar days previous to the current day.
 */
export interface DurationDateRange {
  /** JSON-LD type */
  _type: 'DurationDateRange';
  /** The number of calendar days between the start of the time series and the current day. */
  days: number;
  /** The number of calendar days from current day to the end of the time series, where the data is estimated or projected beyond the current day. */
  futureDays?: number | undefined;
}

export namespace DurationDateRange {
  export type _Type = DurationDateRangeType;
}

/**
 * Cast schema for the DurationDateRange model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const durationDateRange = core.cast.identity<DurationDateRange>();

/**
 * Cast schema for mapping API responses to the DurationDateRange application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const durationDateRangeResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'days', 'futureDays']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'], days: raw['days'], futureDays: raw['futureDays'] };
  },
  ['@type', 'days'],
);

/**
 * Cast schema for mapping the DurationDateRange application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const durationDateRangeRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], days: raw['days'], futureDays: raw['futureDays'] };
  },
  ['@type', 'days'],
);
