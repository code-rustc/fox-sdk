import * as core from '../../core';
import { ErrorSourceLocation, errorSourceLocation } from './error-source-location';

export interface ErrorSourceQuery {
  /** This attribute indicates the domain of the error. */
  location: 'query';
  /** The query parameter responsible for the error. */
  parameter: string;
}

/**
 * Cast schema for the ErrorSourceQuery model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const errorSourceQuery = core.cast.identity<ErrorSourceQuery>();

/**
 * Cast schema for mapping API responses to the ErrorSourceQuery application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const errorSourceQueryResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['location', 'parameter']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, location: raw['location'], parameter: raw['parameter'] };
  },
  ['location', 'parameter'],
);

/**
 * Cast schema for mapping the ErrorSourceQuery application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const errorSourceQueryRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { location: raw['location'], parameter: raw['parameter'] };
  },
  ['location', 'parameter'],
);
