import * as core from '../../core';
import { ArchiveContentType, archiveContentType } from './archive-content-type';
import { ArchiveStatus, archiveStatus } from './archive-status';
import { Digest, digest, digestRequest, digestResponse } from './digest';
import {
  NotificationDataset,
  notificationDataset,
  notificationDatasetRequest,
  notificationDatasetResponse,
} from './notification-dataset';
import { Type_ } from './type';
import { Id } from './id';
import { ArchiveName } from './archive-name';
import { ArchiveStartDate } from './archive-start-date';
import { ArchiveEndDate } from './archive-end-date';
import { Issued } from './issued';

/**
 * An accessible form of archive dataset.
 */
export interface NotificationArchive {
  /** JSON-LD type */
  '@type': Type_;
  /** JSON-LD id */
  '@id': Id;
  /** Archive name */
  identifier: ArchiveName;
  /** Content-Type of the archive file. */
  contentType: ArchiveContentType;
  /** The archive start of the date range, inclusive. */
  startDate: ArchiveStartDate;
  /** The archive end of the date range, inclusive. */
  endDate: ArchiveEndDate;
  /** Dublin Core Metadata Terms, see 'issued' */
  issued: Issued;
  /** Status filter for querying dataset archives. */
  status: ArchiveStatus;
  /** Unique hash information about the distribution, including the hash value and algorithm. */
  digest: Digest;
  /** A collection of data. See 'dataset' in DCAT specification. */
  dataset: NotificationDataset;
}

/**
 * Cast schema for the NotificationArchive model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const notificationArchive = core.cast.identity<NotificationArchive>();

/**
 * Cast schema for mapping API responses to the NotificationArchive application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const notificationArchiveResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      '@id',
      'identifier',
      'contentType',
      'startDate',
      'endDate',
      'issued',
      'status',
      'digest',
      'dataset',
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
      startDate: raw['startDate'],
      endDate: raw['endDate'],
      issued: raw['issued'],
      status: raw['status'],
      digest: raw['digest'] == null ? raw['digest'] : digestResponse.parse(raw['digest']),
      dataset:
        raw['dataset'] == null ? raw['dataset'] : notificationDatasetResponse.parse(raw['dataset']),
    };
  },
  [
    '@type',
    '@id',
    'identifier',
    'contentType',
    'startDate',
    'endDate',
    'issued',
    'status',
    'digest',
    'dataset',
  ],
);

/**
 * Cast schema for mapping the NotificationArchive application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const notificationArchiveRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      '@id': raw['@id'],
      identifier: raw['identifier'],
      contentType: raw['contentType'],
      startDate: raw['startDate'],
      endDate: raw['endDate'],
      issued: raw['issued'],
      status: raw['status'],
      digest: raw['digest'] == null ? raw['digest'] : digestRequest.parse(raw['digest']),
      dataset:
        raw['dataset'] == null ? raw['dataset'] : notificationDatasetRequest.parse(raw['dataset']),
    };
  },
  [
    '@type',
    '@id',
    'identifier',
    'contentType',
    'startDate',
    'endDate',
    'issued',
    'status',
    'digest',
    'dataset',
  ],
);
