import * as core from '../../core';
import {
  EntityDlOptionsType,
  entityDlOptionsType,
} from '../requests/models/entity-dl-options-type';

export interface EntityDlOptions {
  /** JSON-LD type */
  _type: 'EntityDl';
}

export namespace EntityDlOptions {
  export type _Type = EntityDlOptionsType;
}

/**
 * Cast schema for the EntityDlOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const entityDlOptions = core.cast.identity<EntityDlOptions>();

/**
 * Cast schema for mapping API responses to the EntityDlOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const entityDlOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'] };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the EntityDlOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const entityDlOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'] };
  },
  ['@type'],
);
