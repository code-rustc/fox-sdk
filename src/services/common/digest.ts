import * as core from '../../core';
import { Type_ } from './type';
import { DigestValue } from './digest-value';
import { DigestAlgorithm } from './digest-algorithm';

/**
 * Unique hash information about the distribution, including the hash value and algorithm.
 */
export interface Digest {
  /** JSON-LD type */
  '@type': Type_;
  /** The hexadecimal hash value of the distribution. */
  digestValue: DigestValue;
  /** The hash algorithm used to calculate the digest of the distribution. */
  digestAlgorithm: DigestAlgorithm;
}

/**
 * Cast schema for the Digest model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const digest = core.cast.identity<Digest>();

/**
 * Cast schema for mapping API responses to the Digest application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const digestResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'digestValue', 'digestAlgorithm']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      digestValue: raw['digestValue'],
      digestAlgorithm: raw['digestAlgorithm'],
    };
  },
  ['@type', 'digestValue', 'digestAlgorithm'],
);

/**
 * Cast schema for mapping the Digest application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const digestRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      digestValue: raw['digestValue'],
      digestAlgorithm: raw['digestAlgorithm'],
    };
  },
  ['@type', 'digestValue', 'digestAlgorithm'],
);
