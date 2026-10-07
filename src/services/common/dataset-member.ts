import * as core from '../../core';
import { DatasetMemberType, datasetMemberType } from '../datasets/models/dataset-member-type';
import { Id } from './id';
import { DatasetTitle } from './dataset-title';
import { DatasetDescription } from './dataset-description';
import { Identifier } from './identifier';
import { Extensions } from './extensions';
import { Subscribed } from './subscribed';
import { AssociatedRequest } from './associated-request';

/**
 * Member item of dataset data
 */
export interface DatasetMember {
  /** JSON-LD id */
  '@id': Id;
  /** JSON-LD type */
  '@type': DatasetMemberType;
  /** The name of the dataset as shown on [data.bloomberg.com > Bulk Datasets](https://data.bloomberg.com/search/bbgDatasets). */
  title: DatasetTitle;
  /** The description of the dataset as shown on [data.bloomberg.com > Bulk Datasets](https://data.bloomberg.com/search/bbgDatasets). */
  description: DatasetDescription;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** The available output types (i.e., file extensions) for the corresponding dataset. For more: [Data License > Request Types](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds146). */
  extensions: Extensions;
  /** When Subscribed is true, DL REST API is indicating that the user is subscribed to this dataset. */
  subscribed?: Subscribed | undefined;
  /** An IRI to the request the dataset is associated with. This only applies when catalog is not `bbg`. */
  request?: AssociatedRequest | undefined;
}

export namespace DatasetMember {
  export type _Type = DatasetMemberType;
}

/**
 * Cast schema for the DatasetMember model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const datasetMember = core.cast.identity<DatasetMember>();

/**
 * Cast schema for mapping API responses to the DatasetMember application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const datasetMemberResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@id',
      '@type',
      'title',
      'description',
      'identifier',
      'extensions',
      'subscribed',
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
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      extensions: raw['extensions'],
      subscribed: raw['subscribed'],
      request: raw['request'],
    };
  },
  ['@id', '@type', 'title', 'description', 'identifier', 'extensions'],
);

/**
 * Cast schema for mapping the DatasetMember application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const datasetMemberRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      extensions: raw['extensions'],
      subscribed: raw['subscribed'],
      request: raw['request'],
    };
  },
  ['@id', '@type', 'title', 'description', 'identifier', 'extensions'],
);
