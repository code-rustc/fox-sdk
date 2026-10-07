import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  DeletedBvalSnapshotTriggerType,
  deletedBvalSnapshotTriggerType,
} from '../triggers/models/deleted-bval-snapshot-trigger-type';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
import {
  BvalSnapshotTrigger,
  bvalSnapshotTrigger,
  bvalSnapshotTriggerRequest,
  bvalSnapshotTriggerResponse,
} from './bval-snapshot-trigger';
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
import { BvalSnapshotTime } from './bval-snapshot-time';
import { BvalSnapshotTimeZoneName } from './bval-snapshot-time-zone-name';
import { BvalSnapshotDate } from './bval-snapshot-date';
import { Issued } from './issued';
import { Modified } from './modified';
import { DeletedOn } from './deleted-on';

export interface DeletedBvalSnapshotTrigger extends BvalSnapshotTrigger, DeletedComponent {}

export namespace DeletedBvalSnapshotTrigger {
  export type _Type = DeletedBvalSnapshotTriggerType;
}

/**
 * Cast schema for the DeletedBvalSnapshotTrigger model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const deletedBvalSnapshotTrigger = core.cast.identity<DeletedBvalSnapshotTrigger>();

/**
 * Cast schema for mapping API responses to the DeletedBvalSnapshotTrigger application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const deletedBvalSnapshotTriggerResponse = core.cast.object(
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
      'snapshotTime',
      'snapshotTimeZoneName',
      'snapshotDate',
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
      snapshotTime: raw['snapshotTime'],
      snapshotTimeZoneName: raw['snapshotTimeZoneName'],
      snapshotDate: raw['snapshotDate'],
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
    'snapshotTime',
    'snapshotTimeZoneName',
    'issued',
    'modified',
    'deletedOn',
  ],
);

/**
 * Cast schema for mapping the DeletedBvalSnapshotTrigger application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const deletedBvalSnapshotTriggerRequest = core.cast.object(
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
      snapshotTime: raw['snapshotTime'],
      snapshotTimeZoneName: raw['snapshotTimeZoneName'],
      snapshotDate: raw['snapshotDate'],
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
    'snapshotTime',
    'snapshotTimeZoneName',
    'issued',
    'modified',
    'deletedOn',
  ],
);
