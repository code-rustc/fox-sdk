import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
import { Title } from './title';
import { Description } from './description';
import { BvalSnapshotDate } from './bval-snapshot-date';
import { BvalSnapshotTime } from './bval-snapshot-time';
import { BvalSnapshotTimeZoneName } from './bval-snapshot-time-zone-name';

/**
 * The PATCH payload required to update the data of a trigger. This has a subset of properties of Trigger.
 */
export interface BvalSnapshotTriggerPatchPayload {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title?: Title | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** Request frequency. */
  frequency?: TriggerFrequency | undefined;
  snapshotDate?: BvalSnapshotDate | undefined;
  snapshotTime?: BvalSnapshotTime | undefined;
  snapshotTimeZoneName?: BvalSnapshotTimeZoneName | undefined;
}

/**
 * Cast schema for the BvalSnapshotTriggerPatchPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bvalSnapshotTriggerPatchPayload =
  core.cast.identity<BvalSnapshotTriggerPatchPayload>();

/**
 * Cast schema for mapping API responses to the BvalSnapshotTriggerPatchPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bvalSnapshotTriggerPatchPayloadResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>([
    '@context',
    'title',
    'description',
    'frequency',
    'snapshotDate',
    'snapshotTime',
    'snapshotTimeZoneName',
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
    snapshotDate: raw['snapshotDate'],
    snapshotTime: raw['snapshotTime'],
    snapshotTimeZoneName: raw['snapshotTimeZoneName'],
  };
}, []);

/**
 * Cast schema for mapping the BvalSnapshotTriggerPatchPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bvalSnapshotTriggerPatchPayloadRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
    title: raw['title'],
    description: raw['description'],
    frequency: raw['frequency'],
    snapshotDate: raw['snapshotDate'],
    snapshotTime: raw['snapshotTime'],
    snapshotTimeZoneName: raw['snapshotTimeZoneName'],
  };
}, []);
