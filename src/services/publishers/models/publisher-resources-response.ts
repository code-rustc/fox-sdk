import * as core from '../../../core';
import { Context, context, contextRequest, contextResponse } from '../../common/context';
import {
  PublisherResourcesResponseContainsItem,
  publisherResourcesResponseContainsItem,
  publisherResourcesResponseContainsItemRequest,
  publisherResourcesResponseContainsItemResponse,
} from './publisher-resources-response-contains-item';
import { Id } from '../../common/id';
import { Type_ } from '../../common/type';
import { Description } from '../../common/description';
import { Identifier } from '../../common/identifier';
import { PublisherResourcesResponseContains } from '../../common/publisher-resources-response-contains';

export interface PublisherResourcesResponse {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** JSON-LD id */
  '@id'?: Id | undefined;
  /** JSON-LD type */
  '@type'?: Type_ | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier?: Identifier | undefined;
  /** Members of this page of paginated data */
  contains?: PublisherResourcesResponseContainsItem[] | undefined;
}

export namespace PublisherResourcesResponse {
  export type Contains = PublisherResourcesResponseContains;
}

/**
 * Cast schema for the PublisherResourcesResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const publisherResourcesResponse = core.cast.identity<PublisherResourcesResponse>();

/**
 * Cast schema for mapping API responses to the PublisherResourcesResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const publisherResourcesResponseResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>([
    '@context',
    '@id',
    '@type',
    'description',
    'identifier',
    'contains',
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
    '@id': raw['@id'],
    '@type': raw['@type'],
    description: raw['description'],
    identifier: raw['identifier'],
    contains: Array.isArray(raw['contains'])
      ? (raw['contains'] as any[]).map((v: any) =>
          v == null ? v : publisherResourcesResponseContainsItemResponse.parse(v),
        )
      : (raw['contains'] as any),
  };
}, []);

/**
 * Cast schema for mapping the PublisherResourcesResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const publisherResourcesResponseRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
    '@id': raw['@id'],
    '@type': raw['@type'],
    description: raw['description'],
    identifier: raw['identifier'],
    contains: Array.isArray(raw['contains'])
      ? (raw['contains'] as any[]).map((v: any) =>
          v == null ? v : publisherResourcesResponseContainsItemRequest.parse(v),
        )
      : (raw['contains'] as any),
  };
}, []);
