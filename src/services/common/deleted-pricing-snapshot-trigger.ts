import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  DeletedPricingSnapshotTriggerId,
  deletedPricingSnapshotTriggerId,
} from '../triggers/models/deleted-pricing-snapshot-trigger-id';
import {
  DeletedPricingSnapshotTriggerType,
  deletedPricingSnapshotTriggerType,
} from '../triggers/models/deleted-pricing-snapshot-trigger-type';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
import {
  PricingSnapshotTrigger,
  pricingSnapshotTrigger,
  pricingSnapshotTriggerRequest,
  pricingSnapshotTriggerResponse,
} from './pricing-snapshot-trigger';
import {
  DeletedComponent,
  deletedComponent,
  deletedComponentRequest,
  deletedComponentResponse,
} from './deleted-component';
import { ComponentIdentifier } from './component-identifier';
import { ReferencedByActiveRequests } from './referenced-by-active-requests';
import { Title } from './title';
import { Description } from './description';
import { PricingSnapshotTime } from './pricing-snapshot-time';
import { PricingSnapshotTimeZoneName } from './pricing-snapshot-time-zone-name';
import { PricingSnapshotDate } from './pricing-snapshot-date';
import { Issued } from './issued';
import { Modified } from './modified';
import { DeletedOn } from './deleted-on';

export interface DeletedPricingSnapshotTrigger extends PricingSnapshotTrigger, DeletedComponent {
  /** JSON-LD id */
  '@id': DeletedPricingSnapshotTriggerId;
}

export namespace DeletedPricingSnapshotTrigger {
  export type _Id = DeletedPricingSnapshotTriggerId;
  export type _Type = DeletedPricingSnapshotTriggerType;
}

/**
 * Cast schema for the DeletedPricingSnapshotTrigger model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const deletedPricingSnapshotTrigger = core.cast.identity<DeletedPricingSnapshotTrigger>();

/**
 * Cast schema for mapping API responses to the DeletedPricingSnapshotTrigger application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const deletedPricingSnapshotTriggerResponse = core.cast.object(
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
    'description',
    'frequency',
    'snapshotTime',
    'issued',
    'modified',
    'deletedOn',
  ],
);

/**
 * Cast schema for mapping the DeletedPricingSnapshotTrigger application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const deletedPricingSnapshotTriggerRequest = core.cast.object(
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
    'description',
    'frequency',
    'snapshotTime',
    'issued',
    'modified',
    'deletedOn',
  ],
);
