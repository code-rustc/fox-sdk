import * as core from '../../core';
import {
  RequestPricingSnapshotTriggerType,
  requestPricingSnapshotTriggerType,
} from '../triggers/models/request-pricing-snapshot-trigger-type';
import { TriggerFrequency, triggerFrequency } from './trigger-frequency';
import { PricingSnapshotTime } from './pricing-snapshot-time';
import { PricingSnapshotTimeZoneName } from './pricing-snapshot-time-zone-name';
import { PricingSnapshotDate } from './pricing-snapshot-date';

/**
 * The POST payload required to define a new Pricing snapshot trigger directly within a request.
 */
export interface RequestPricingSnapshotTrigger {
  /** Run the request according to the schedule specified. */
  _type: 'PricingSnapshotTrigger';
  snapshotTime: PricingSnapshotTime;
  snapshotTimeZoneName?: PricingSnapshotTimeZoneName | undefined;
  snapshotDate?: PricingSnapshotDate | undefined;
  /** Request frequency. */
  frequency: TriggerFrequency;
}

export namespace RequestPricingSnapshotTrigger {
  export type _Type = RequestPricingSnapshotTriggerType;
}

/**
 * Cast schema for the RequestPricingSnapshotTrigger model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestPricingSnapshotTrigger = core.cast.identity<RequestPricingSnapshotTrigger>();

/**
 * Cast schema for mapping API responses to the RequestPricingSnapshotTrigger application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestPricingSnapshotTriggerResponse = core.cast.object(
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
  ['@type', 'snapshotTime', 'frequency'],
);

/**
 * Cast schema for mapping the RequestPricingSnapshotTrigger application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestPricingSnapshotTriggerRequest = core.cast.object(
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
  ['@type', 'snapshotTime', 'frequency'],
);
