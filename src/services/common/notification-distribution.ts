import * as core from '../../core';
import { Digest, digest, digestRequest, digestResponse } from './digest';
import {
  NotificationSnapshot,
  notificationSnapshot,
  notificationSnapshotRequest,
  notificationSnapshotResponse,
} from './notification-snapshot';
import { Type_ } from './type';
import { Id } from './id';
import { DistributionName } from './distribution-name';
import { ContentType } from './content-type';

/**
 * An accessible form of dataset. See 'distribution' in DCAT specification.
 */
export interface NotificationDistribution {
  /** JSON-LD type */
  '@type': Type_;
  /** JSON-LD id */
  '@id': Id;
  /** Distribution name */
  identifier: DistributionName;
  /** The media format for the data-ready alert. For more: [SSE Event Stream for DL Platform Notifications > Media Format](https://developer.bloomberg.com/portal/products/dl/reference#tag/Notifications/operation/getSse). */
  contentType: ContentType;
  /** Unique hash information about the distribution, including the hash value and algorithm. */
  digest: Digest;
  /** Represents the data within a Dataset at a particular point-in-time. */
  snapshot: NotificationSnapshot;
}

/**
 * Cast schema for the NotificationDistribution model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const notificationDistribution = core.cast.identity<NotificationDistribution>();

/**
 * Cast schema for mapping API responses to the NotificationDistribution application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const notificationDistributionResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      '@id',
      'identifier',
      'contentType',
      'digest',
      'snapshot',
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
      '@id': raw['@id'],
      identifier: raw['identifier'],
      contentType: raw['contentType'],
      digest: raw['digest'] == null ? raw['digest'] : digestResponse.parse(raw['digest']),
      snapshot:
        raw['snapshot'] == null
          ? raw['snapshot']
          : notificationSnapshotResponse.parse(raw['snapshot']),
    };
  },
  ['@type', '@id', 'identifier', 'contentType', 'digest', 'snapshot'],
);

/**
 * Cast schema for mapping the NotificationDistribution application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const notificationDistributionRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      '@id': raw['@id'],
      identifier: raw['identifier'],
      contentType: raw['contentType'],
      digest: raw['digest'] == null ? raw['digest'] : digestRequest.parse(raw['digest']),
      snapshot:
        raw['snapshot'] == null
          ? raw['snapshot']
          : notificationSnapshotRequest.parse(raw['snapshot']),
    };
  },
  ['@type', '@id', 'identifier', 'contentType', 'digest', 'snapshot'],
);
