import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  PricingSnapshotTriggerPostPayloadType,
  pricingSnapshotTriggerPostPayloadType,
} from '../triggers/models/pricing-snapshot-trigger-post-payload-type';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
import {
  RequestPricingSnapshotTrigger,
  requestPricingSnapshotTrigger,
  requestPricingSnapshotTriggerRequest,
  requestPricingSnapshotTriggerResponse,
} from './request-pricing-snapshot-trigger';
import { Title } from './title';
import { PostComponentIdentifier } from './post-component-identifier';
import { Description } from './description';
import { PricingSnapshotTime } from './pricing-snapshot-time';
import { PricingSnapshotTimeZoneName } from './pricing-snapshot-time-zone-name';
import { PricingSnapshotDate } from './pricing-snapshot-date';

export interface PricingSnapshotTriggerPostPayload extends RequestPricingSnapshotTrigger {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The unique identifier for the reusable resource (i.e., universe, field list, or trigger) that you want to create. For more: [Creating Reusable Resources](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4743). */
  identifier: PostComponentIdentifier;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
}

export namespace PricingSnapshotTriggerPostPayload {
  export type _Type = PricingSnapshotTriggerPostPayloadType;
}

/**
 * Cast schema for the PricingSnapshotTriggerPostPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const pricingSnapshotTriggerPostPayload =
  core.cast.identity<PricingSnapshotTriggerPostPayload>();

/**
 * Cast schema for mapping API responses to the PricingSnapshotTriggerPostPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const pricingSnapshotTriggerPostPayloadResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@type',
      'title',
      'identifier',
      'description',
      'snapshotTime',
      'snapshotTimeZoneName',
      'snapshotDate',
      'frequency',
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
      title: raw['title'],
      identifier: raw['identifier'],
      description: raw['description'],
      snapshotTime: raw['snapshotTime'],
      snapshotTimeZoneName: raw['snapshotTimeZoneName'],
      snapshotDate: raw['snapshotDate'],
      frequency: raw['frequency'],
    };
  },
  ['@type', 'title', 'identifier', 'snapshotTime', 'frequency'],
);

/**
 * Cast schema for mapping the PricingSnapshotTriggerPostPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const pricingSnapshotTriggerPostPayloadRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@type': raw['@type'],
      title: raw['title'],
      identifier: raw['identifier'],
      description: raw['description'],
      snapshotTime: raw['snapshotTime'],
      snapshotTimeZoneName: raw['snapshotTimeZoneName'],
      snapshotDate: raw['snapshotDate'],
      frequency: raw['frequency'],
    };
  },
  ['@type', 'title', 'identifier', 'snapshotTime', 'frequency'],
);
