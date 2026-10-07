import * as core from '../../core';
import { Id } from './id';
import { Types } from './types';
import { Identifier } from './identifier';
import { ContentType } from './content-type';
import { Accessible } from './accessible';
import { SampleOf } from './sample-of';

/**
 * Member item of distributions data
 */
export interface DistributionsMember {
  /** JSON-LD id */
  '@id': Id;
  /** Items in the type */
  '@type'?: Types | undefined;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** The media format for the data-ready alert. For more: [SSE Event Stream for DL Platform Notifications > Media Format](https://developer.bloomberg.com/portal/products/dl/reference#tag/Notifications/operation/getSse). */
  contentType: ContentType;
  /** Indicates whether a bulk distribution can be accessed or not. */
  accessible: Accessible;
  sampleOf?: SampleOf | undefined;
}

/**
 * Cast schema for the DistributionsMember model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const distributionsMember = core.cast.identity<DistributionsMember>();

/**
 * Cast schema for mapping API responses to the DistributionsMember application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const distributionsMemberResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@id',
      '@type',
      'identifier',
      'contentType',
      'accessible',
      'sampleOf',
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
      identifier: raw['identifier'],
      contentType: raw['contentType'],
      accessible: raw['accessible'],
      sampleOf: raw['sampleOf'],
    };
  },
  ['@id', 'identifier', 'contentType', 'accessible'],
);

/**
 * Cast schema for mapping the DistributionsMember application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const distributionsMemberRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@id': raw['@id'],
      '@type': raw['@type'],
      identifier: raw['identifier'],
      contentType: raw['contentType'],
      accessible: raw['accessible'],
      sampleOf: raw['sampleOf'],
    };
  },
  ['@id', 'identifier', 'contentType', 'accessible'],
);
