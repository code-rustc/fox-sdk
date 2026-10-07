import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  DeletedScheduledTriggerType,
  deletedScheduledTriggerType,
} from '../triggers/models/deleted-scheduled-trigger-type';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
import {
  ScheduledTrigger,
  scheduledTrigger,
  scheduledTriggerRequest,
  scheduledTriggerResponse,
} from './scheduled-trigger';
import {
  DeletedComponent,
  deletedComponent,
  deletedComponentRequest,
  deletedComponentResponse,
} from './deleted-component';
import { Id } from './id';
import { ComponentIdentifier } from './component-identifier';
import { ReferencedByActiveRequests } from './referenced-by-active-requests';
import { Title } from './title';
import { Description } from './description';
import { TriggerDate } from './trigger-date';
import { TriggerTime } from './trigger-time';
import { Issued } from './issued';
import { Modified } from './modified';
import { DeletedOn } from './deleted-on';

export interface DeletedScheduledTrigger extends ScheduledTrigger, DeletedComponent {}

export namespace DeletedScheduledTrigger {
  export type _Type = DeletedScheduledTriggerType;
}

/**
 * Cast schema for the DeletedScheduledTrigger model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const deletedScheduledTrigger = core.cast.identity<DeletedScheduledTrigger>();

/**
 * Cast schema for mapping API responses to the DeletedScheduledTrigger application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const deletedScheduledTriggerResponse = core.cast.object(
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
      'deletedOn',
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
      deletedOn: raw['deletedOn'],
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
    'deletedOn',
  ],
);

/**
 * Cast schema for mapping the DeletedScheduledTrigger application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const deletedScheduledTriggerRequest = core.cast.object(
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
      deletedOn: raw['deletedOn'],
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
    'deletedOn',
  ],
);
