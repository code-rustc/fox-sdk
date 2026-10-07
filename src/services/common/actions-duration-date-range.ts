import * as core from '../../core';
import {
  ActionsDurationDateRangeType,
  actionsDurationDateRangeType,
} from '../requests/models/actions-duration-date-range-type';

/**
 * A date range specified by a number of calendar days previous to the current day.
 */
export interface ActionsDurationDateRange {
  /** JSON-LD type */
  _type: 'ActionsDurationDateRange';
  /** The number of calendar days between the start of the request and the current day. */
  days: number;
}

export namespace ActionsDurationDateRange {
  export type _Type = ActionsDurationDateRangeType;
}

/**
 * Cast schema for the ActionsDurationDateRange model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const actionsDurationDateRange = core.cast.identity<ActionsDurationDateRange>();

/**
 * Cast schema for mapping API responses to the ActionsDurationDateRange application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const actionsDurationDateRangeResponse = core.cast.object(
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
 * Cast schema for mapping the ActionsDurationDateRange application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const actionsDurationDateRangeRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], days: raw['days'] };
  },
  ['@type', 'days'],
);
