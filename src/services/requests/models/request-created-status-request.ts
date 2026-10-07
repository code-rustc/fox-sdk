import * as core from '../../../core';
import { RequestIdentifier } from '../../common/request-identifier';

/**
 * Description of the created request
 */
export interface RequestCreatedStatusRequest {
  /** The unique identifier for the request. If not supplied, one will be generated on the user's behalf. For more: [Handling ID Limitations](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4749&entityType=document#advanced_concepts-handling_id_limitations). */
  identifier?: RequestIdentifier | undefined;
}

/**
 * Cast schema for the RequestCreatedStatusRequest model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestCreatedStatusRequest_3 = core.cast.identity<RequestCreatedStatusRequest>();

/**
 * Cast schema for mapping API responses to the RequestCreatedStatusRequest application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestCreatedStatusRequestResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['identifier']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return { ...__extras, identifier: raw['identifier'] };
}, []);

/**
 * Cast schema for mapping the RequestCreatedStatusRequest application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestCreatedStatusRequestRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return { identifier: raw['identifier'] };
}, []);
