import * as core from '../../core';
import {
  ErrorSource,
  errorSource,
  errorSourceRequest,
  errorSourceResponse,
} from '../entrypoint/models/error-source';

export interface Error_ {
  /** The HTTP status code. */
  status?: number | undefined;
  /** The HTTP status phrase. */
  errorCode?: string | undefined;
  /** A brief statement of the error. */
  title?: string | undefined;
  /** A detailed statement of the error. */
  detail?: string | undefined;
  /** The request id, same as the value of the header 'X-Request-ID' */
  id?: string | undefined;
  source?: ErrorSource | undefined;
  /** An object with additional useful key-value pairs. */
  meta?: Record<string, unknown> | undefined;
}

export namespace Error_ {
  export type Source = ErrorSource;
}

/**
 * Cast schema for the Error_ model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const error_ = core.cast.identity<Error_>();

/**
 * Cast schema for mapping API responses to the Error_ application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const errorResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>([
    'status',
    'errorCode',
    'title',
    'detail',
    'id',
    'source',
    'meta',
  ]);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return {
    ...__extras,
    status: raw['status'],
    errorCode: raw['errorCode'],
    title: raw['title'],
    detail: raw['detail'],
    id: raw['id'],
    source: raw['source'],
    meta: raw['meta'],
  };
}, []);

/**
 * Cast schema for mapping the Error_ application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const errorRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    status: raw['status'],
    errorCode: raw['errorCode'],
    title: raw['title'],
    detail: raw['detail'],
    id: raw['id'],
    source: raw['source'],
    meta: raw['meta'],
  };
}, []);
