import * as core from '../../core';
import {
  IntervalDateTimeRangeType,
  intervalDateTimeRangeType,
} from '../requests/models/interval-date-time-range-type';

/**
 * A datetime range specified by a start-datetime and end-datetime.
 */
export interface IntervalDateTimeRange {
  /** JSON-LD type */
  _type: 'IntervalDateTimeRange';
  /** The start of the datetime range, inclusive, in ISO format (YYYY-MM-DDThh:mm:ssZ). The timezone of this datetime value is required to be UTC, denoted by the `Z` at the end. */
  startDateTime: string;
  /** The end of the datetime range, inclusive, in ISO format (YYYY-MM-DDThh:mm:ssZ). The timezone of this datetime value is required to be UTC, denoted by the `Z` at the end. */
  endDateTime: string;
}

export namespace IntervalDateTimeRange {
  export type _Type = IntervalDateTimeRangeType;
}

/**
 * Cast schema for the IntervalDateTimeRange model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const intervalDateTimeRange = core.cast.identity<IntervalDateTimeRange>();

/**
 * Cast schema for mapping API responses to the IntervalDateTimeRange application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const intervalDateTimeRangeResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'startDateTime', 'endDateTime']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      startDateTime: raw['startDateTime'],
      endDateTime: raw['endDateTime'],
    };
  },
  ['@type', 'startDateTime', 'endDateTime'],
);

/**
 * Cast schema for mapping the IntervalDateTimeRange application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const intervalDateTimeRangeRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      startDateTime: raw['startDateTime'],
      endDateTime: raw['endDateTime'],
    };
  },
  ['@type', 'startDateTime', 'endDateTime'],
);
