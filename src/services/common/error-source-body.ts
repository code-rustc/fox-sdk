import * as core from '../../core';
import { ErrorSourceLocation, errorSourceLocation } from './error-source-location';

export interface ErrorSourceBody {
  /** This attribute indicates the domain of the error. */
  location: 'body';
  /** A [RFC6901 JSON pointer](https://tools.ietf.org/html/rfc6901) to the invalid data within the request body. */
  pointer: string;
}

/**
 * Cast schema for the ErrorSourceBody model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const errorSourceBody = core.cast.identity<ErrorSourceBody>();

/**
 * Cast schema for mapping API responses to the ErrorSourceBody application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const errorSourceBodyResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['location', 'pointer']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, location: raw['location'], pointer: raw['pointer'] };
  },
  ['location', 'pointer'],
);

/**
 * Cast schema for mapping the ErrorSourceBody application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const errorSourceBodyRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { location: raw['location'], pointer: raw['pointer'] };
  },
  ['location', 'pointer'],
);
