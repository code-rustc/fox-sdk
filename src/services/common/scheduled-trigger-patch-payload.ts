import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
import { Title } from './title';
import { Description } from './description';
import { TriggerDate } from './trigger-date';
import { TriggerTime } from './trigger-time';

/**
 * The PATCH payload required to update the data of a trigger. This has a subset of properties of Trigger.
 */
export interface ScheduledTriggerPatchPayload {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title?: Title | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** Request frequency. */
  frequency?: TriggerFrequency | undefined;
  /** Request start date, in YYYY-MM-DD format. If not provided, the request will start running at the next scheduled time, based on the timezone of the account. Past 'startDate' values will be rejected at request submission. */
  startDate?: TriggerDate | undefined;
  /** Request start time, in HH:MM:00 format in the default time zone for your account (i.e., Eastern Daylight Time (New York), Greenwhich Mean Time (London), or Japan Standard Time (Tokyo)). If you do not provide a `startTime` and the `startDate` is in the future, your request is scheduled for 00:00 on the `startDate`. */
  startTime?: TriggerTime | undefined;
}

/**
 * Cast schema for the ScheduledTriggerPatchPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const scheduledTriggerPatchPayload = core.cast.identity<ScheduledTriggerPatchPayload>();

/**
 * Cast schema for mapping API responses to the ScheduledTriggerPatchPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const scheduledTriggerPatchPayloadResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>([
    '@context',
    'title',
    'description',
    'frequency',
    'startDate',
    'startTime',
  ]);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return {
    ...__extras,
    '@context': raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
    title: raw['title'],
    description: raw['description'],
    frequency: raw['frequency'],
    startDate: raw['startDate'],
    startTime: raw['startTime'],
  };
}, []);

/**
 * Cast schema for mapping the ScheduledTriggerPatchPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const scheduledTriggerPatchPayloadRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
    title: raw['title'],
    description: raw['description'],
    frequency: raw['frequency'],
    startDate: raw['startDate'],
    startTime: raw['startTime'],
  };
}, []);
