import * as core from '../../core';
import { FieldListType, fieldListType } from './field-list-type';
import { Id } from './id';
import { Identifier } from './identifier';
import { Title } from './title';
import { Description } from './description';
import { Issued } from './issued';
import { Modified } from './modified';

export interface FieldListSummary {
  /** JSON-LD id */
  '@id': Id;
  /** JSON-LD type */
  '@type': FieldListType;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** Dublin Core Metadata Terms, see 'issued' */
  issued: Issued;
  /** Dublin Core Metadata Terms, see 'modified' */
  modified: Modified;
}

/**
 * Cast schema for the FieldListSummary model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fieldListSummary = core.cast.identity<FieldListSummary>();

/**
 * Cast schema for mapping API responses to the FieldListSummary application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldListSummaryResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@id',
      '@type',
      'identifier',
      'title',
      'description',
      'issued',
      'modified',
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
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      issued: raw['issued'],
      modified: raw['modified'],
    };
  },
  ['@id', '@type', 'identifier', 'title', 'issued', 'modified'],
);

/**
 * Cast schema for mapping the FieldListSummary application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldListSummaryRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@id': raw['@id'],
      '@type': raw['@type'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      issued: raw['issued'],
      modified: raw['modified'],
    };
  },
  ['@id', '@type', 'identifier', 'title', 'issued', 'modified'],
);
