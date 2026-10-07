import * as core from '../../core';
import {
  RequestScheduledTriggerType,
  requestScheduledTriggerType,
} from '../triggers/models/request-scheduled-trigger-type';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
import { TriggerDate } from './trigger-date';
import { TriggerTime } from './trigger-time';

/**
 * The POST payload required to define a scheduled trigger directly within a request.
 */
export interface RequestScheduledTrigger {
  /** Run the request according to the schedule specified. */
  _type: 'ScheduledTrigger';
  /** Request frequency. */
  frequency: TriggerFrequency;
  /** Request start date, in YYYY-MM-DD format. If not provided, the request will start running at the next scheduled time, based on the timezone of the account. Past 'startDate' values will be rejected at request submission. */
  startDate?: TriggerDate | undefined;
  /** Request start time, in HH:MM:00 format in the default time zone for your account (i.e., Eastern Daylight Time (New York), Greenwhich Mean Time (London), or Japan Standard Time (Tokyo)). If you do not provide a `startTime` and the `startDate` is in the future, your request is scheduled for 00:00 on the `startDate`. */
  startTime?: TriggerTime | undefined;
}

export namespace RequestScheduledTrigger {
  export type _Type = RequestScheduledTriggerType;
}

/**
 * Cast schema for the RequestScheduledTrigger model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestScheduledTrigger = core.cast.identity<RequestScheduledTrigger>();

/**
 * Cast schema for mapping API responses to the RequestScheduledTrigger application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestScheduledTriggerResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'frequency', 'startDate', 'startTime']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      frequency: raw['frequency'],
      startDate: raw['startDate'],
      startTime: raw['startTime'],
    };
  },
  ['@type', 'frequency'],
);

/**
 * Cast schema for mapping the RequestScheduledTrigger application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestScheduledTriggerRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      frequency: raw['frequency'],
      startDate: raw['startDate'],
      startTime: raw['startTime'],
    };
  },
  ['@type', 'frequency'],
);
