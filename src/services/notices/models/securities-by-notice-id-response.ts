import * as core from '../../../core';
import {
  Securities,
  securities,
  securitiesRequest,
  securitiesResponse,
} from '../../common/securities';

export interface SecuritiesByNoticeIdResponse {
  /** Page of securities data associated with the notice */
  securities?: Securities | undefined;
}

/**
 * Cast schema for the SecuritiesByNoticeIdResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const securitiesByNoticeIdResponse = core.cast.identity<SecuritiesByNoticeIdResponse>();

/**
 * Cast schema for mapping API responses to the SecuritiesByNoticeIdResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const securitiesByNoticeIdResponseResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['securities']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return {
    ...__extras,
    securities:
      raw['securities'] == null ? raw['securities'] : securitiesResponse.parse(raw['securities']),
  };
}, []);

/**
 * Cast schema for mapping the SecuritiesByNoticeIdResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const securitiesByNoticeIdResponseRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    securities:
      raw['securities'] == null ? raw['securities'] : securitiesRequest.parse(raw['securities']),
  };
}, []);
