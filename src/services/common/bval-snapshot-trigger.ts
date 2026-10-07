import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  BvalSnapshotTriggerType,
  bvalSnapshotTriggerType,
} from '../triggers/models/bval-snapshot-trigger-type';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
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

export interface BvalSnapshotTrigger {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  /** JSON-LD type */
  _type: 'BvalSnapshotTrigger';
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
  snapshotTime: BvalSnapshotTime;
  snapshotTimeZoneName: BvalSnapshotTimeZoneName;
  snapshotDate?: BvalSnapshotDate | undefined;
  /** Dublin Core Metadata Terms, see 'issued' */
  issued: Issued;
  /** Dublin Core Metadata Terms, see 'modified' */
  modified: Modified;
}

export namespace BvalSnapshotTrigger {
  export type _Type = BvalSnapshotTriggerType;
}

/**
 * Cast schema for the BvalSnapshotTrigger model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bvalSnapshotTrigger = core.cast.identity<BvalSnapshotTrigger>();

/**
 * Cast schema for mapping API responses to the BvalSnapshotTrigger application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bvalSnapshotTriggerResponse = core.cast.object(
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
  ],
);

/**
 * Cast schema for mapping the BvalSnapshotTrigger application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bvalSnapshotTriggerRequest = core.cast.object(
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
  ],
);
