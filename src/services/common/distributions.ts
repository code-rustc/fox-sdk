import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  Distribution,
  distribution,
  distributionRequest,
  distributionResponse,
} from './distribution';
import { Id } from './id';
import { Types } from './types';
import { Title } from './title';
import { Description } from './description';
import { Identifier } from './identifier';

export interface Distributions {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  /** Items in the type */
  '@type': Types;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description: Description;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** Members of this page of paginated data */
  contains: Distribution[];
}

/**
 * Cast schema for the Distributions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const distributions = core.cast.identity<Distributions>();

/**
 * Cast schema for mapping API responses to the Distributions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const distributionsResponse = core.cast.object(
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
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : distributionResponse.parse(v),
          )
        : (raw['contains'] as any),
    };
  },
  ['@context', '@id', '@type', 'title', 'description', 'identifier', 'contains'],
);

/**
 * Cast schema for mapping the Distributions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const distributionsRequest = core.cast.object(
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
        ? (raw['contains'] as any[]).map((v: any) => (v == null ? v : distributionRequest.parse(v)))
        : (raw['contains'] as any),
    };
  },
  ['@context', '@id', '@type', 'title', 'description', 'identifier', 'contains'],
);
