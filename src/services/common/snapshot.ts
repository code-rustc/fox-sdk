import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import { Member, member, memberRequest, memberResponse } from './member';
import { Id } from './id';
import { Types } from './types';
import { SnapshotsTitle } from './snapshots-title';
import { Description } from './description';
import { Identifier } from './identifier';
import { Contains } from './contains';
import { Issued } from './issued';
import { FullAccess } from './full-access';
import { SnapshotAttribute } from './snapshot-attribute';

export interface Snapshot {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  /** Items in the type */
  '@type': Types;
  /** The name of the snapshot metadata for the DL Bulk request or the name of the snapshot itself for DL Per Security requests. For more: [Finding Snapshots](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=5595#ds3). */
  title: SnapshotsTitle;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description: Description;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** Members of this page of paginated data */
  contains: Contains;
  /** Dublin Core Metadata Terms, see 'issued' */
  issued: Issued;
  /** Denotes that a bulk user has full access to snapshots, optional. This field will only be returned if the user is a bulk user - per-security accounts will not have this property. */
  fullAccess?: FullAccess | undefined;
  /** Snapshot name. This field will only be returned if a custom dataset was requested. */
  snapshot?: SnapshotAttribute | undefined;
}

/**
 * Cast schema for the Snapshot model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const snapshot = core.cast.identity<Snapshot>();

/**
 * Cast schema for mapping API responses to the Snapshot application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const snapshotResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@id',
      '@type',
      'title',
      'description',
      'identifier',
      'contains',
      'issued',
      'fullAccess',
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
      '@context':
        raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) => (v == null ? v : memberResponse.parse(v)))
        : (raw['contains'] as any),
      issued: raw['issued'],
      fullAccess: raw['fullAccess'],
      snapshot: raw['snapshot'],
    };
  },
  ['@context', '@id', '@type', 'title', 'description', 'identifier', 'contains', 'issued'],
);

/**
 * Cast schema for mapping the Snapshot application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const snapshotRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) => (v == null ? v : memberRequest.parse(v)))
        : (raw['contains'] as any),
      issued: raw['issued'],
      fullAccess: raw['fullAccess'],
      snapshot: raw['snapshot'],
    };
  },
  ['@context', '@id', '@type', 'title', 'description', 'identifier', 'contains', 'issued'],
);
