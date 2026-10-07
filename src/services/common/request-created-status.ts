import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  RequestCreatedStatusRequest,
  requestCreatedStatusRequestRequest,
  requestCreatedStatusRequestResponse,
  requestCreatedStatusRequest_3,
} from '../requests/models/request-created-status-request';
import { Type_ } from './type';
import { StatusTitle } from './status-title';
import { StatusDescription } from './status-description';
import { StatusCode } from './status-code';

export interface RequestCreatedStatus {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** JSON-LD type */
  '@type'?: Type_ | undefined;
  /** The status of your request according to the HTTP response that the service returns. For more: [Troubleshooting](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4746). */
  title?: StatusTitle | undefined;
  /** Further detail about the status of your request according to the HTTP status code that the service returns. For more: [Troubleshooting](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4746). */
  description?: StatusDescription | undefined;
  /** The HTTP status code */
  statusCode?: StatusCode | undefined;
  /** Description of the created request */
  request?: RequestCreatedStatusRequest | undefined;
}

export namespace RequestCreatedStatus {
  export interface Request {
    identifier?: RequestCreatedStatusRequest['identifier'];
  }
}

/**
 * Cast schema for the RequestCreatedStatus model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestCreatedStatus = core.cast.identity<RequestCreatedStatus>();

/**
 * Cast schema for mapping API responses to the RequestCreatedStatus application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestCreatedStatusResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>([
    '@context',
    '@type',
    'title',
    'description',
    'statusCode',
    'request',
  ]);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return {
    ...__extras,
    '@context': raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
    '@type': raw['@type'],
    title: raw['title'],
    description: raw['description'],
    statusCode: raw['statusCode'],
    request:
      raw['request'] == null
        ? raw['request']
        : requestCreatedStatusRequestResponse.parse(raw['request']),
  };
}, []);

/**
 * Cast schema for mapping the RequestCreatedStatus application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestCreatedStatusRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
    '@type': raw['@type'],
    title: raw['title'],
    description: raw['description'],
    statusCode: raw['statusCode'],
    request:
      raw['request'] == null
        ? raw['request']
        : requestCreatedStatusRequestRequest.parse(raw['request']),
  };
}, []);
