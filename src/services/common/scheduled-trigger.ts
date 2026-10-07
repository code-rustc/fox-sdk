import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  ScheduledTriggerType,
  scheduledTriggerType,
} from '../triggers/models/scheduled-trigger-type';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
import { Id } from './id';
import { ComponentIdentifier } from './component-identifier';
import { ReferencedByActiveRequests } from './referenced-by-active-requests';
import { Title } from './title';
import { Description } from './description';
import { TriggerDate } from './trigger-date';
import { TriggerTime } from './trigger-time';
import { Issued } from './issued';
import { Modified } from './modified';

export interface ScheduledTrigger {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  /** JSON-LD type */
  _type: 'ScheduledTrigger';
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: ComponentIdentifier;
  /** When ReferencedByActiveRequests is true, DL REST API is indicating that this resource is referenced by an active scheduled request. For fieldLists and Triggers, the consequence of this is that only the title and description may be PATCHed; Attempting PATCH other properties of a fieldList or Trigger which is referenced by an active scheduled request will fail, returning a 400 response code. This constraint does not exist for Universes which can be patched even when linked to an active request: Universes are always evaluated at execution time for a scheduled request. */
  referencedByActiveRequests: ReferencedByActiveRequests;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** Request frequency. */
  frequency: TriggerFrequency;
  /** Request start date, in YYYY-MM-DD format. If not provided, the request will start running at the next scheduled time, based on the timezone of the account. Past 'startDate' values will be rejected at request submission. */
  startDate?: TriggerDate | undefined;
  /** Request start time, in HH:MM:00 format in the default time zone for your account (i.e., Eastern Daylight Time (New York), Greenwhich Mean Time (London), or Japan Standard Time (Tokyo)). If you do not provide a `startTime` and the `startDate` is in the future, your request is scheduled for 00:00 on the `startDate`. */
  startTime?: TriggerTime | undefined;
  /** Dublin Core Metadata Terms, see 'issued' */
  issued: Issued;
  /** Dublin Core Metadata Terms, see 'modified' */
  modified: Modified;
}

export namespace ScheduledTrigger {
  export type _Type = ScheduledTriggerType;
}

/**
 * Cast schema for the ScheduledTrigger model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const scheduledTrigger = core.cast.identity<ScheduledTrigger>();

/**
 * Cast schema for mapping API responses to the ScheduledTrigger application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const scheduledTriggerResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@id',
      '@type',
      'identifier',
      'referencedByActiveRequests',
      'title',
      'description',
      'frequency',
      'startDate',
      'startTime',
      'issued',
      'modified',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@context':
        raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      identifier: raw['identifier'],
      referencedByActiveRequests: raw['referencedByActiveRequests'],
      title: raw['title'],
      description: raw['description'],
      frequency: raw['frequency'],
      startDate: raw['startDate'],
      startTime: raw['startTime'],
      issued: raw['issued'],
      modified: raw['modified'],
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'identifier',
    'referencedByActiveRequests',
    'title',
    'frequency',
    'issued',
    'modified',
  ],
);

/**
 * Cast schema for mapping the ScheduledTrigger application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const scheduledTriggerRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      identifier: raw['identifier'],
      referencedByActiveRequests: raw['referencedByActiveRequests'],
      title: raw['title'],
      description: raw['description'],
      frequency: raw['frequency'],
      startDate: raw['startDate'],
      startTime: raw['startTime'],
      issued: raw['issued'],
      modified: raw['modified'],
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'identifier',
    'referencedByActiveRequests',
    'title',
    'frequency',
    'issued',
    'modified',
  ],
);
