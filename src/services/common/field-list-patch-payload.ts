import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  FieldListPatchPayloadContains,
  fieldListPatchPayloadContains,
  fieldListPatchPayloadContainsRequest,
  fieldListPatchPayloadContainsResponse,
} from '../field-lists/models/field-list-patch-payload-contains';
import { Title } from './title';
import { Description } from './description';

/**
 * The PATCH payload required to update the contents of a field list. This has a subset of properties of FieldList.
 */
export interface FieldListPatchPayload {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title?: Title | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  contains?: FieldListPatchPayloadContains | undefined;
}

export namespace FieldListPatchPayload {
  export type Contains = FieldListPatchPayloadContains;
}

/**
 * Cast schema for the FieldListPatchPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fieldListPatchPayload = core.cast.identity<FieldListPatchPayload>();

/**
 * Cast schema for mapping API responses to the FieldListPatchPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldListPatchPayloadResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['@context', 'title', 'description', 'contains']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return {
    ...__extras,
    '@context': raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
    title: raw['title'],
    description: raw['description'],
    contains: raw['contains'],
  };
}, []);

/**
 * Cast schema for mapping the FieldListPatchPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldListPatchPayloadRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
    title: raw['title'],
    description: raw['description'],
    contains: raw['contains'],
  };
}, []);
