import * as core from '../../core';
import {
  UniverseSummaryType,
  universeSummaryType,
} from '../universes/models/universe-summary-type';
import { Id } from './id';
import { Identifier } from './identifier';
import { Title } from './title';
import { Description } from './description';
import { Issued } from './issued';
import { Modified } from './modified';

export interface UniverseSummary {
  /** JSON-LD id */
  '@id': Id;
  /** JSON-LD type */
  '@type': UniverseSummaryType;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description: Description;
  /** Dublin Core Metadata Terms, see 'issued' */
  issued: Issued;
  /** Dublin Core Metadata Terms, see 'modified' */
  modified: Modified;
}

export namespace UniverseSummary {
  export type _Type = UniverseSummaryType;
}

/**
 * Cast schema for the UniverseSummary model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const universeSummary = core.cast.identity<UniverseSummary>();

/**
 * Cast schema for mapping API responses to the UniverseSummary application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const universeSummaryResponse = core.cast.object(
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
  ['@id', '@type', 'identifier', 'title', 'description', 'issued', 'modified'],
);

/**
 * Cast schema for mapping the UniverseSummary application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const universeSummaryRequest = core.cast.object(
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
  ['@id', '@type', 'identifier', 'title', 'description', 'issued', 'modified'],
);
