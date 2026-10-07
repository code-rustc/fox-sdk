import * as core from '../../core';
import {
  ArchivesItemType,
  archivesItemType,
  archivesItemTypeRequest,
  archivesItemTypeResponse,
} from '../archives/models/archives-item-type';
import { ArchiveStatus, archiveStatus } from './archive-status';
import { ArchiveContentType, archiveContentType } from './archive-content-type';
import { Id } from './id';
import { ArchiveStartDate } from './archive-start-date';
import { ArchiveEndDate } from './archive-end-date';
import { Issued } from './issued';

/**
 * A basic dataset archive item.
 */
export interface ArchivesItem {
  /** JSON-LD id */
  '@id': Id;
  '@type': ArchivesItemType;
  /** The archive start of the date range, inclusive. */
  startSnapshotDate: ArchiveStartDate;
  /** The archive end of the date range, inclusive. */
  endSnapshotDate: ArchiveEndDate;
  /** Dublin Core Metadata Terms, see 'issued' */
  issued: Issued;
  /** Status filter for querying dataset archives. */
  status: ArchiveStatus;
  accessible: boolean;
  /** Content-Type of the archive file. */
  contentType: ArchiveContentType;
}

export namespace ArchivesItem {
  export type _Type = ArchivesItemType;
}

/**
 * Cast schema for the ArchivesItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const archivesItem = core.cast.identity<ArchivesItem>();

/**
 * Cast schema for mapping API responses to the ArchivesItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const archivesItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@id',
      '@type',
      'startSnapshotDate',
      'endSnapshotDate',
      'issued',
      'status',
      'accessible',
      'contentType',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@id': raw['@id'],
      '@type': raw['@type'],
      startSnapshotDate: raw['startSnapshotDate'],
      endSnapshotDate: raw['endSnapshotDate'],
      issued: raw['issued'],
      status: raw['status'],
      accessible: raw['accessible'],
      contentType: raw['contentType'],
    };
  },
  [
    '@id',
    '@type',
    'startSnapshotDate',
    'endSnapshotDate',
    'issued',
    'status',
    'accessible',
    'contentType',
  ],
);

/**
 * Cast schema for mapping the ArchivesItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const archivesItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@id': raw['@id'],
      '@type': raw['@type'],
      startSnapshotDate: raw['startSnapshotDate'],
      endSnapshotDate: raw['endSnapshotDate'],
      issued: raw['issued'],
      status: raw['status'],
      accessible: raw['accessible'],
      contentType: raw['contentType'],
    };
  },
  [
    '@id',
    '@type',
    'startSnapshotDate',
    'endSnapshotDate',
    'issued',
    'status',
    'accessible',
    'contentType',
  ],
);
