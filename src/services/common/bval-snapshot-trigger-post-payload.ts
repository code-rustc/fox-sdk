import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  BvalSnapshotTriggerPostPayloadType,
  bvalSnapshotTriggerPostPayloadType,
} from '../triggers/models/bval-snapshot-trigger-post-payload-type';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
import {
  RequestBvalSnapshotTrigger,
  requestBvalSnapshotTrigger,
  requestBvalSnapshotTriggerRequest,
  requestBvalSnapshotTriggerResponse,
} from './request-bval-snapshot-trigger';
import { Title } from './title';
import { PostComponentIdentifier } from './post-component-identifier';
import { Description } from './description';
import { BvalSnapshotTime } from './bval-snapshot-time';
import { BvalSnapshotTimeZoneName } from './bval-snapshot-time-zone-name';
import { BvalSnapshotDate } from './bval-snapshot-date';

export interface BvalSnapshotTriggerPostPayload extends RequestBvalSnapshotTrigger {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The unique identifier for the reusable resource (i.e., universe, field list, or trigger) that you want to create. For more: [Creating Reusable Resources](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4743). */
  identifier: PostComponentIdentifier;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
}

export namespace BvalSnapshotTriggerPostPayload {
  export type _Type = BvalSnapshotTriggerPostPayloadType;
}

/**
 * Cast schema for the BvalSnapshotTriggerPostPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bvalSnapshotTriggerPostPayload = core.cast.identity<BvalSnapshotTriggerPostPayload>();

/**
 * Cast schema for mapping API responses to the BvalSnapshotTriggerPostPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bvalSnapshotTriggerPostPayloadResponse = core.cast.object(
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
  ['@type', 'title', 'identifier', 'snapshotTime', 'snapshotTimeZoneName', 'frequency'],
);

/**
 * Cast schema for mapping the BvalSnapshotTriggerPostPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bvalSnapshotTriggerPostPayloadRequest = core.cast.object(
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
  ['@type', 'title', 'identifier', 'snapshotTime', 'snapshotTimeZoneName', 'frequency'],
);
