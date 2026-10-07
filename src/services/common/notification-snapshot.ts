import * as core from '../../core';
import {
  NotificationDataset,
  notificationDataset,
  notificationDatasetRequest,
  notificationDatasetResponse,
} from './notification-dataset';
import { Type_ } from './type';
import { Id } from './id';
import { Identifier } from './identifier';
import { NotificationIssued } from './notification-issued';

/**
 * Represents the data within a Dataset at a particular point-in-time.
 */
export interface NotificationSnapshot {
  /** JSON-LD type */
  '@type': Type_;
  /** JSON-LD id */
  '@id': Id;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** Dublin Core Metadata Terms, see 'issued' */
  issued: NotificationIssued;
  /** A collection of data. See 'dataset' in DCAT specification. */
  dataset: NotificationDataset;
}

/**
 * Cast schema for the NotificationSnapshot model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const notificationSnapshot = core.cast.identity<NotificationSnapshot>();

/**
 * Cast schema for mapping API responses to the NotificationSnapshot application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const notificationSnapshotResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', '@id', 'identifier', 'issued', 'dataset']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      '@id': raw['@id'],
      identifier: raw['identifier'],
      issued: raw['issued'],
      dataset:
        raw['dataset'] == null ? raw['dataset'] : notificationDatasetResponse.parse(raw['dataset']),
    };
  },
  ['@type', '@id', 'identifier', 'issued', 'dataset'],
);

/**
 * Cast schema for mapping the NotificationSnapshot application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const notificationSnapshotRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      '@id': raw['@id'],
      identifier: raw['identifier'],
      issued: raw['issued'],
      dataset:
        raw['dataset'] == null ? raw['dataset'] : notificationDatasetRequest.parse(raw['dataset']),
    };
  },
  ['@type', '@id', 'identifier', 'issued', 'dataset'],
);
