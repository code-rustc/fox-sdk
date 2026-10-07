import * as core from '../../core';
import {
  RequestBvalSnapshotTriggerType,
  requestBvalSnapshotTriggerType,
} from '../triggers/models/request-bval-snapshot-trigger-type';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
import { BvalSnapshotTime } from './bval-snapshot-time';
import { BvalSnapshotTimeZoneName } from './bval-snapshot-time-zone-name';
import { BvalSnapshotDate } from './bval-snapshot-date';

/**
 * The POST payload required to define a new BVAL snapshot trigger directly within a request.
 */
export interface RequestBvalSnapshotTrigger {
  /** Run the request according to the schedule specified. */
  _type: 'BvalSnapshotTrigger';
  snapshotTime: BvalSnapshotTime;
  snapshotTimeZoneName: BvalSnapshotTimeZoneName;
  snapshotDate?: BvalSnapshotDate | undefined;
  /** Request frequency. */
  frequency: TriggerFrequency;
}

export namespace RequestBvalSnapshotTrigger {
  export type _Type = RequestBvalSnapshotTriggerType;
}

/**
 * Cast schema for the RequestBvalSnapshotTrigger model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestBvalSnapshotTrigger = core.cast.identity<RequestBvalSnapshotTrigger>();

/**
 * Cast schema for mapping API responses to the RequestBvalSnapshotTrigger application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestBvalSnapshotTriggerResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
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
      '@type': raw['@type'],
      snapshotTime: raw['snapshotTime'],
      snapshotTimeZoneName: raw['snapshotTimeZoneName'],
      snapshotDate: raw['snapshotDate'],
      frequency: raw['frequency'],
    };
  },
  ['@type', 'snapshotTime', 'snapshotTimeZoneName', 'frequency'],
);

/**
 * Cast schema for mapping the RequestBvalSnapshotTrigger application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestBvalSnapshotTriggerRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      snapshotTime: raw['snapshotTime'],
      snapshotTimeZoneName: raw['snapshotTimeZoneName'],
      snapshotDate: raw['snapshotDate'],
      frequency: raw['frequency'],
    };
  },
  ['@type', 'snapshotTime', 'snapshotTimeZoneName', 'frequency'],
);
