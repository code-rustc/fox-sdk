import * as core from '../../core';
import { Type1, type1 } from '../distributions/models/type-1';
import { Id } from './id';
import { Identifier } from './identifier';
import { ContentType } from './content-type';
import { Accessible } from './accessible';

/**
 * Distribution of a snapshot
 */
export interface Distribution {
  /** JSON-LD id */
  '@id': Id;
  /** JSON-LD type */
  '@type': Type1;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** The media format for the data-ready alert. For more: [SSE Event Stream for DL Platform Notifications > Media Format](https://developer.bloomberg.com/portal/products/dl/reference#tag/Notifications/operation/getSse). */
  contentType: ContentType;
  /** Indicates whether a bulk distribution can be accessed or not. */
  accessible: Accessible;
}

export namespace Distribution {
  export type _Type = Type1;
}

/**
 * Cast schema for the Distribution model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const distribution = core.cast.identity<Distribution>();

/**
 * Cast schema for mapping API responses to the Distribution application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const distributionResponse = core.cast.object(
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
    };
  },
  ['@id', '@type', 'identifier', 'contentType', 'accessible'],
);

/**
 * Cast schema for mapping the Distribution application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const distributionRequest = core.cast.object(
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
    };
  },
  ['@id', '@type', 'identifier', 'contentType', 'accessible'],
);
