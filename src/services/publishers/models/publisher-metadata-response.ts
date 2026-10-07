import * as core from '../../../core';
import { Context, context, contextRequest, contextResponse } from '../../common/context';
import { Id } from '../../common/id';
import { Types } from '../../common/types';
import { Description } from '../../common/description';
import { Identifier } from '../../common/identifier';
import { Title } from '../../common/title';

export interface PublisherMetadataResponse {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** JSON-LD id */
  '@id'?: Id | undefined;
  /** Items in the type */
  '@type'?: Types | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier?: Identifier | undefined;
  datasetCount?: number | undefined;
  image?: string | undefined;
  datasets?: string | undefined;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title?: Title | undefined;
}

/**
 * Cast schema for the PublisherMetadataResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const publisherMetadataResponse = core.cast.identity<PublisherMetadataResponse>();

/**
 * Cast schema for mapping API responses to the PublisherMetadataResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const publisherMetadataResponseResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>([
    '@context',
    '@id',
    '@type',
    'description',
    'identifier',
    'datasetCount',
    'image',
    'datasets',
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
    '@context': raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
    '@id': raw['@id'],
    '@type': raw['@type'],
    description: raw['description'],
    identifier: raw['identifier'],
    datasetCount: raw['datasetCount'],
    image: raw['image'],
    datasets: raw['datasets'],
    title: raw['title'],
  };
}, []);

/**
 * Cast schema for mapping the PublisherMetadataResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const publisherMetadataResponseRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
    '@id': raw['@id'],
    '@type': raw['@type'],
    description: raw['description'],
    identifier: raw['identifier'],
    datasetCount: raw['datasetCount'],
    image: raw['image'],
    datasets: raw['datasets'],
    title: raw['title'],
  };
}, []);
