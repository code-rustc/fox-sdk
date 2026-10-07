import * as core from '../../../core';
import {
  UniverseInputItem,
  universeInputItem,
  universeInputItemRequest,
  universeInputItemResponse,
} from '../../common/universe-input-item';
import { UniverseInputItems } from '../../common/universe-input-items';

export interface RequestUniversePatchContains {
  /** List of identifiers. DL REST API supports up to 80,000 securities in a universe without security overrides. If the universe contains security overrides, Bloomberg recommends limiting the universe size to 20,000 securities. */
  contains: UniverseInputItems;
}

/**
 * Cast schema for the RequestUniversePatchContains model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestUniversePatchContains = core.cast.identity<RequestUniversePatchContains>();

/**
 * Cast schema for mapping API responses to the RequestUniversePatchContains application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestUniversePatchContainsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['contains']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : universeInputItemResponse.parse(v),
          )
        : (raw['contains'] as any),
    };
  },
  ['contains'],
);

/**
 * Cast schema for mapping the RequestUniversePatchContains application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestUniversePatchContainsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) =>
            v == null ? v : universeInputItemRequest.parse(v),
          )
        : (raw['contains'] as any),
    };
  },
  ['contains'],
);
