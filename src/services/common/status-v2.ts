import * as core from '../../core';
import { Error_, errorRequest, errorResponse, error_ } from './error_';
import { StatusTitle } from './status-title';
import { StatusDescription } from './status-description';
import { StatusCode } from './status-code';
import { Errors } from './errors';

export const statusV2 = core.cast.identity<StatusV2>();

export interface StatusV2 {
  title?: StatusTitle;
  description?: StatusDescription;
  statusCode?: StatusCode;
  errors?: Errors;
}

export const statusV2Response = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['title', 'description', 'statusCode', 'errors']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return {
    ...__extras,
    title: raw['title'],
    description: raw['description'],
    statusCode: raw['statusCode'],
    errors: Array.isArray(raw['errors'])
      ? (raw['errors'] as any[]).map((v: any) => (v == null ? v : errorResponse.parse(v)))
      : (raw['errors'] as any),
  };
}, []);

export const statusV2Request = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    title: raw['title'],
    description: raw['description'],
    statusCode: raw['statusCode'],
    errors: Array.isArray(raw['errors'])
      ? (raw['errors'] as any[]).map((v: any) => (v == null ? v : errorRequest.parse(v)))
      : (raw['errors'] as any),
  };
}, []);
