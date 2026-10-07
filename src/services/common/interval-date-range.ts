import * as core from '../../core';
import {
  IntervalDateRangeType,
  intervalDateRangeType,
} from '../requests/models/interval-date-range-type';

/**
 * A date range specified by a start-date and end-date.
 */
export interface IntervalDateRange {
  /** JSON-LD type */
  _type: 'IntervalDateRange';
  /** The start of the date range, inclusive, in ISO format (YYYY-MM-DD). */
  startDate: string;
  /** The end of the date range, inclusive, in ISO format (YYYY-MM-DD). */
  endDate: string;
}

export namespace IntervalDateRange {
  export type _Type = IntervalDateRangeType;
}

/**
 * Cast schema for the IntervalDateRange model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const intervalDateRange = core.cast.identity<IntervalDateRange>();

/**
 * Cast schema for mapping API responses to the IntervalDateRange application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const intervalDateRangeResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'startDate', 'endDate']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      startDate: raw['startDate'],
      endDate: raw['endDate'],
    };
  },
  ['@type', 'startDate', 'endDate'],
);

/**
 * Cast schema for mapping the IntervalDateRange application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const intervalDateRangeRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], startDate: raw['startDate'], endDate: raw['endDate'] };
  },
  ['@type', 'startDate', 'endDate'],
);
