import * as core from '../../../core';

export interface SecuritiesContainsItem {
  /** BB unique ID */
  bbUnique?: string | undefined;
  /** FIGI */
  bbgid?: string | undefined;
  /** Parsekey */
  parsekeyableDescription?: string | undefined;
}

/**
 * Cast schema for the SecuritiesContainsItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const securitiesContainsItem = core.cast.identity<SecuritiesContainsItem>();

/**
 * Cast schema for mapping API responses to the SecuritiesContainsItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const securitiesContainsItemResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['bbUnique', 'bbgid', 'parsekeyableDescription']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return {
    ...__extras,
    bbUnique: raw['bbUnique'],
    bbgid: raw['bbgid'],
    parsekeyableDescription: raw['parsekeyableDescription'],
  };
}, []);

/**
 * Cast schema for mapping the SecuritiesContainsItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const securitiesContainsItemRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    bbUnique: raw['bbUnique'],
    bbgid: raw['bbgid'],
    parsekeyableDescription: raw['parsekeyableDescription'],
  };
}, []);
