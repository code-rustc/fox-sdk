import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  PricingSnapshotTriggerId,
  pricingSnapshotTriggerId,
} from '../triggers/models/pricing-snapshot-trigger-id';
import {
  PricingSnapshotTriggerType,
  pricingSnapshotTriggerType,
} from '../triggers/models/pricing-snapshot-trigger-type';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
import { ComponentIdentifier } from './component-identifier';
import { ReferencedByActiveRequests } from './referenced-by-active-requests';
import { Title } from './title';
import { Description } from './description';
import { PricingSnapshotTime } from './pricing-snapshot-time';
import { PricingSnapshotTimeZoneName } from './pricing-snapshot-time-zone-name';
import { PricingSnapshotDate } from './pricing-snapshot-date';
import { Issued } from './issued';
import { Modified } from './modified';

export interface PricingSnapshotTrigger {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': PricingSnapshotTriggerId;
  /** JSON-LD type */
  _type: 'PricingSnapshotTrigger';
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: ComponentIdentifier;
  /** When ReferencedByActiveRequests is true, DL REST API is indicating that this resource is referenced by an active scheduled request. For fieldLists and Triggers, the consequence of this is that only the title and description may be PATCHed; Attempting PATCH other properties of a fieldList or Trigger which is referenced by an active scheduled request will fail, returning a 400 response code. This constraint does not exist for Universes which can be patched even when linked to an active request: Universes are always evaluated at execution time for a scheduled request. */
  referencedByActiveRequests: ReferencedByActiveRequests;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description: Description;
  /** Request frequency. */
  frequency: TriggerFrequency;
  snapshotTime: PricingSnapshotTime;
  snapshotTimeZoneName?: PricingSnapshotTimeZoneName | undefined;
  snapshotDate?: PricingSnapshotDate | undefined;
  /** Dublin Core Metadata Terms, see 'issued' */
  issued: Issued;
  /** Dublin Core Metadata Terms, see 'modified' */
  modified: Modified;
}

export namespace PricingSnapshotTrigger {
  export type _Id = PricingSnapshotTriggerId;
  export type _Type = PricingSnapshotTriggerType;
}

/**
 * Cast schema for the PricingSnapshotTrigger model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const pricingSnapshotTrigger = core.cast.identity<PricingSnapshotTrigger>();

/**
 * Cast schema for mapping API responses to the PricingSnapshotTrigger application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const pricingSnapshotTriggerResponse = core.cast.object(
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
    'description',
    'frequency',
    'snapshotTime',
    'issued',
    'modified',
  ],
);

/**
 * Cast schema for mapping the PricingSnapshotTrigger application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const pricingSnapshotTriggerRequest = core.cast.object(
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
    'description',
    'frequency',
    'snapshotTime',
    'issued',
    'modified',
  ],
);
