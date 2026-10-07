import * as core from '../../../core';
import { Id } from '../../common/id';
import { Type_ } from '../../common/type';
import { Description } from '../../common/description';
import { Identifier } from '../../common/identifier';
import { Title } from '../../common/title';

export interface PublisherResourcesResponseContainsItem {
  /** JSON-LD id */
  '@id'?: Id | undefined;
  /** JSON-LD type */
  '@type'?: Type_ | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier?: Identifier | undefined;
  datasetCount?: number | undefined;
  image?: string | undefined;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title?: Title | undefined;
}

/**
 * Cast schema for the PublisherResourcesResponseContainsItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const publisherResourcesResponseContainsItem =
  core.cast.identity<PublisherResourcesResponseContainsItem>();

/**
 * Cast schema for mapping API responses to the PublisherResourcesResponseContainsItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const publisherResourcesResponseContainsItemResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>([
    '@id',
    '@type',
    'description',
    'identifier',
    'datasetCount',
    'image',
    'title',
  ]);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return {
    ...__extras,
    '@id': raw['@id'],
    '@type': raw['@type'],
    description: raw['description'],
    identifier: raw['identifier'],
    datasetCount: raw['datasetCount'],
    image: raw['image'],
    title: raw['title'],
  };
}, []);

/**
 * Cast schema for mapping the PublisherResourcesResponseContainsItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const publisherResourcesResponseContainsItemRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    '@id': raw['@id'],
    '@type': raw['@type'],
    description: raw['description'],
    identifier: raw['identifier'],
    datasetCount: raw['datasetCount'],
    image: raw['image'],
    title: raw['title'],
  };
}, []);
