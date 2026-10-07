import * as core from '../../core';
import {
  TickHistoryBarIntervalMinutesType,
  tickHistoryBarIntervalMinutesType,
} from '../requests/models/tick-history-bar-interval-minutes-type';

/**
 * Allows you to specify the bar interval in minutes.
 */
export interface TickHistoryBarIntervalMinutes {
  /** JSON-LD type */
  _type: 'minutes';
  /** The time period in minutes for the corresponding open, high, low, and closing price. */
  value: number;
}

export namespace TickHistoryBarIntervalMinutes {
  export type _Type = TickHistoryBarIntervalMinutesType;
}

/**
 * Cast schema for the TickHistoryBarIntervalMinutes model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const tickHistoryBarIntervalMinutes = core.cast.identity<TickHistoryBarIntervalMinutes>();

/**
 * Cast schema for mapping API responses to the TickHistoryBarIntervalMinutes application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const tickHistoryBarIntervalMinutesResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'value']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'], value: raw['value'] };
  },
  ['@type', 'value'],
);

/**
 * Cast schema for mapping the TickHistoryBarIntervalMinutes application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const tickHistoryBarIntervalMinutesRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], value: raw['value'] };
  },
  ['@type', 'value'],
);
