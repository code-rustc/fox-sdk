import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  UniverseInputItem,
  universeInputItem,
  universeInputItemRequest,
  universeInputItemResponse,
} from './universe-input-item';
import { Title } from './title';
import { Description } from './description';
import { UniverseInputItems } from './universe-input-items';

/**
 * The PATCH payload required to add a new update a universe. This has a subset of properties of Universe.
 */
export interface UniversePatchPayload {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title?: Title | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** List of identifiers. DL REST API supports up to 80,000 securities in a universe without security overrides. If the universe contains security overrides, Bloomberg recommends limiting the universe size to 20,000 securities. */
  contains?: UniverseInputItems | undefined;
}

/**
 * Cast schema for the UniversePatchPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const universePatchPayload = core.cast.identity<UniversePatchPayload>();

/**
 * Cast schema for mapping API responses to the UniversePatchPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const universePatchPayloadResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['@context', 'title', 'description', 'contains']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return {
    ...__extras,
    '@context': raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
    title: raw['title'],
    description: raw['description'],
    contains: Array.isArray(raw['contains'])
      ? (raw['contains'] as any[]).map((v: any) =>
          v == null ? v : universeInputItemResponse.parse(v),
        )
      : (raw['contains'] as any),
  };
}, []);

/**
 * Cast schema for mapping the UniversePatchPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const universePatchPayloadRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
    title: raw['title'],
    description: raw['description'],
    contains: Array.isArray(raw['contains'])
      ? (raw['contains'] as any[]).map((v: any) =>
          v == null ? v : universeInputItemRequest.parse(v),
        )
      : (raw['contains'] as any),
  };
}, []);
