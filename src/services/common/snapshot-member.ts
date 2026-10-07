import * as core from '../../core';
import { Id } from './id';
import { Types } from './types';
import { SnapshotsTitle } from './snapshots-title';
import { Description } from './description';
import { Identifier } from './identifier';
import { Issued } from './issued';
import { FullAccess } from './full-access';

/**
 * Member item of snapshot data
 */
export interface SnapshotMember {
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
  /** Dublin Core Metadata Terms, see 'issued' */
  issued: Issued;
  /** Denotes that a bulk user has full access to snapshots, optional. This field will only be returned if the user is a bulk user - per-security accounts will not have this property. */
  fullAccess?: FullAccess | undefined;
}

/**
 * Cast schema for the SnapshotMember model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const snapshotMember = core.cast.identity<SnapshotMember>();

/**
 * Cast schema for mapping API responses to the SnapshotMember application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const snapshotMemberResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@id',
      '@type',
      'title',
      'description',
      'identifier',
      'issued',
      'fullAccess',
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
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      issued: raw['issued'],
      fullAccess: raw['fullAccess'],
    };
  },
  ['@id', '@type', 'title', 'description', 'identifier', 'issued'],
);

/**
 * Cast schema for mapping the SnapshotMember application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const snapshotMemberRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      issued: raw['issued'],
      fullAccess: raw['fullAccess'],
    };
  },
  ['@id', '@type', 'title', 'description', 'identifier', 'issued'],
);
