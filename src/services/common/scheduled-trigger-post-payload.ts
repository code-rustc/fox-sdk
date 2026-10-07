import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  ScheduledTriggerPostPayloadType,
  scheduledTriggerPostPayloadType,
} from '../triggers/models/scheduled-trigger-post-payload-type';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
import {
  RequestScheduledTrigger,
  requestScheduledTrigger,
  requestScheduledTriggerRequest,
  requestScheduledTriggerResponse,
} from './request-scheduled-trigger';
import { PostComponentIdentifier } from './post-component-identifier';
import { Title } from './title';
import { Description } from './description';
import { TriggerDate } from './trigger-date';
import { TriggerTime } from './trigger-time';

export interface ScheduledTriggerPostPayload extends RequestScheduledTrigger {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** The unique identifier for the reusable resource (i.e., universe, field list, or trigger) that you want to create. For more: [Creating Reusable Resources](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4743). */
  identifier: PostComponentIdentifier;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
}

export namespace ScheduledTriggerPostPayload {
  export type _Type = ScheduledTriggerPostPayloadType;
}

/**
 * Cast schema for the ScheduledTriggerPostPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const scheduledTriggerPostPayload = core.cast.identity<ScheduledTriggerPostPayload>();

/**
 * Cast schema for mapping API responses to the ScheduledTriggerPostPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const scheduledTriggerPostPayloadResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@type',
      'identifier',
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
      '@context':
        raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
      '@type': raw['@type'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      frequency: raw['frequency'],
      startDate: raw['startDate'],
      startTime: raw['startTime'],
    };
  },
  ['@type', 'identifier', 'title', 'frequency'],
);

/**
 * Cast schema for mapping the ScheduledTriggerPostPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const scheduledTriggerPostPayloadRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@type': raw['@type'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      frequency: raw['frequency'],
      startDate: raw['startDate'],
      startTime: raw['startTime'],
    };
  },
  ['@type', 'identifier', 'title', 'frequency'],
);
