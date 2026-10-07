import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  RequestUniversePatch,
  requestUniversePatch,
  requestUniversePatchRequest,
  requestUniversePatchResponse,
} from './request-universe-patch';
import { Title } from './title';
import { Description } from './description';
import { Enabled } from './enabled';

/**
 * The PATCH payload required to update the contents of a request. This has a subset of properties of Request. The only accepted value for the 'enabled' property is 'false'.
 */
export interface RequestPatchPayload {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title?: Title | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** Whether the request is enabled or not. It is set to true by default. This attribute only exists for recurring requests. Once set to false, it cannot be reverted back to true, and the corresponding request is permanently disabled. */
  enabled?: Enabled | undefined;
  /** The PATCH payload required to patch a universe directly within a Request. This patch is only allowed for the requests created after 1st Jan 2022. */
  universe?: RequestUniversePatch | undefined;
}

/**
 * Cast schema for the RequestPatchPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestPatchPayload = core.cast.identity<RequestPatchPayload>();

/**
 * Cast schema for mapping API responses to the RequestPatchPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestPatchPayloadResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>([
    '@context',
    'title',
    'description',
    'enabled',
    'universe',
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
    title: raw['title'],
    description: raw['description'],
    enabled: raw['enabled'],
    universe: raw['universe'],
  };
}, []);

/**
 * Cast schema for mapping the RequestPatchPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestPatchPayloadRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
    title: raw['title'],
    description: raw['description'],
    enabled: raw['enabled'],
    universe: raw['universe'],
  };
}, []);
