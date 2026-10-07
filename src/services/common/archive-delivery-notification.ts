import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  NotificationArchive,
  notificationArchive,
  notificationArchiveRequest,
  notificationArchiveResponse,
} from './notification-archive';
import { Type_ } from './type';
import { EndedAtTime } from './ended-at-time';

/**
 * Archive delivery notification.
 */
export interface ArchiveDeliveryNotification {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD type */
  '@type': Type_;
  /** Date and time at which the notification was published */
  endedAtTime: EndedAtTime;
  /** An accessible form of archive dataset. */
  generated: NotificationArchive;
}

/**
 * Cast schema for the ArchiveDeliveryNotification model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const archiveDeliveryNotification = core.cast.identity<ArchiveDeliveryNotification>();

/**
 * Cast schema for mapping API responses to the ArchiveDeliveryNotification application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const archiveDeliveryNotificationResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@context', '@type', 'endedAtTime', 'generated']);
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
      endedAtTime: raw['endedAtTime'],
      generated:
        raw['generated'] == null
          ? raw['generated']
          : notificationArchiveResponse.parse(raw['generated']),
    };
  },
  ['@context', '@type', 'endedAtTime', 'generated'],
);

/**
 * Cast schema for mapping the ArchiveDeliveryNotification application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const archiveDeliveryNotificationRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@type': raw['@type'],
      endedAtTime: raw['endedAtTime'],
      generated:
        raw['generated'] == null
          ? raw['generated']
          : notificationArchiveRequest.parse(raw['generated']),
    };
  },
  ['@context', '@type', 'endedAtTime', 'generated'],
);
