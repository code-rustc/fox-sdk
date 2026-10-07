import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import { Error_, errorRequest, errorResponse, error_ } from './error_';
import { Type_ } from './type';
import { StatusTitle } from './status-title';
import { StatusDescription } from './status-description';
import { StatusCode } from './status-code';
import { Errors } from './errors';

export const status = core.cast.identity<Status>();

export interface Status {
  _context?: Context;
  _type?: Type_;
  title?: StatusTitle;
  description?: StatusDescription;
  statusCode?: StatusCode;
  error?: string;
  error_description?: string;
  errors?: Errors;
}

export const statusResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>([
    '@context',
    '@type',
    'title',
    'description',
    'statusCode',
    'error',
    'error_description',
    'errors',
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
    error: raw['error'],
    error_description: raw['error_description'],
    errors: Array.isArray(raw['errors'])
      ? (raw['errors'] as any[]).map((v: any) => (v == null ? v : errorResponse.parse(v)))
      : (raw['errors'] as any),
  };
}, []);

export const statusRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
    '@type': raw['@type'],
    title: raw['title'],
    description: raw['description'],
    statusCode: raw['statusCode'],
    error: raw['error'],
    error_description: raw['error_description'],
    errors: Array.isArray(raw['errors'])
      ? (raw['errors'] as any[]).map((v: any) => (v == null ? v : errorRequest.parse(v)))
      : (raw['errors'] as any),
  };
}, []);
