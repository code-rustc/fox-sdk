import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import { UniverseType, universeType } from './universe-type';
import {
  UniverseInputItem,
  universeInputItem,
  universeInputItemRequest,
  universeInputItemResponse,
} from './universe-input-item';
import { PostComponentIdentifier } from './post-component-identifier';
import { Title } from './title';
import { Description } from './description';
import { UniverseInputItems } from './universe-input-items';

/**
 * The POST payload required to create a new universe. This has a subset of properties of Universe.
 */
export interface UniversePostPayload {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** JSON-LD type */
  '@type': UniverseType;
  /** The unique identifier for the reusable resource (i.e., universe, field list, or trigger) that you want to create. For more: [Creating Reusable Resources](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4743). */
  identifier: PostComponentIdentifier;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** List of identifiers. DL REST API supports up to 80,000 securities in a universe without security overrides. If the universe contains security overrides, Bloomberg recommends limiting the universe size to 20,000 securities. */
  contains: UniverseInputItems;
}

/**
 * Cast schema for the UniversePostPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const universePostPayload = core.cast.identity<UniversePostPayload>();

/**
 * Cast schema for mapping API responses to the UniversePostPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const universePostPayloadResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@type',
      'identifier',
      'title',
      'description',
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
      '@type': raw['@type'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : universeInputItemResponse.parse(v),
          )
        : (raw['contains'] as any),
    };
  },
  ['@type', 'identifier', 'title', 'contains'],
);

/**
 * Cast schema for mapping the UniversePostPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const universePostPayloadRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@type': raw['@type'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : universeInputItemRequest.parse(v),
          )
        : (raw['contains'] as any),
    };
  },
  ['@type', 'identifier', 'title', 'contains'],
);
