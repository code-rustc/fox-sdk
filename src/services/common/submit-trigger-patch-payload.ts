import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import { Title } from './title';
import { Description } from './description';

/**
 * The PATCH payload required to update the data of a trigger. This has a subset of properties of Trigger.
 */
export interface SubmitTriggerPatchPayload {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title?: Title | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
}

/**
 * Cast schema for the SubmitTriggerPatchPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const submitTriggerPatchPayload = core.cast.identity<SubmitTriggerPatchPayload>();

/**
 * Cast schema for mapping API responses to the SubmitTriggerPatchPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const submitTriggerPatchPayloadResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['@context', 'title', 'description']);
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
  };
}, []);

/**
 * Cast schema for mapping the SubmitTriggerPatchPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const submitTriggerPatchPayloadRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
    title: raw['title'],
    description: raw['description'],
  };
}, []);
