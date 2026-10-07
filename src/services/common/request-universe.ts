import * as core from '../../core';
import { UniverseType, universeType } from './universe-type';
import {
  UniverseInputItem,
  universeInputItem,
  universeInputItemRequest,
  universeInputItemResponse,
} from './universe-input-item';
import { UniverseInputItems } from './universe-input-items';

/**
 * The POST payload required to create a new universe directly within a Request.
 */
export interface RequestUniverse {
  /** JSON-LD type */
  '@type': UniverseType;
  /** List of identifiers. DL REST API supports up to 80,000 securities in a universe without security overrides. If the universe contains security overrides, Bloomberg recommends limiting the universe size to 20,000 securities. */
  contains: UniverseInputItems;
}

/**
 * Cast schema for the RequestUniverse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestUniverse = core.cast.identity<RequestUniverse>();

/**
 * Cast schema for mapping API responses to the RequestUniverse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestUniverseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'contains']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : universeInputItemResponse.parse(v),
          )
        : (raw['contains'] as any),
    };
  },
  ['@type', 'contains'],
);

/**
 * Cast schema for mapping the RequestUniverse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestUniverseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : universeInputItemRequest.parse(v),
          )
        : (raw['contains'] as any),
    };
  },
  ['@type', 'contains'],
);
