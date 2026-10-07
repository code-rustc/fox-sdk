import * as core from '../../core';
import { Description } from './description';
import { Title } from './title';
import { FacetValueIdentifier } from './facet-value-identifier';
import { Link } from './link';
import { TotalItems } from './total-items';

/**
 * summary data for a single Facet
 */
export interface FacetValue {
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  identifier?: FacetValueIdentifier | undefined;
  /** Bloomberg vocabulary */
  link: Link;
  /** The total number of items in the response. */
  totalItems?: TotalItems | undefined;
}

/**
 * Cast schema for the FacetValue model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const facetValue = core.cast.identity<FacetValue>();

/**
 * Cast schema for mapping API responses to the FacetValue application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const facetValueResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'description',
      'title',
      'identifier',
      'link',
      'totalItems',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      description: raw['description'],
      title: raw['title'],
      identifier: raw['identifier'],
      link: raw['link'],
      totalItems: raw['totalItems'],
    };
  },
  ['title', 'link'],
);

/**
 * Cast schema for mapping the FacetValue application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const facetValueRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      description: raw['description'],
      title: raw['title'],
      identifier: raw['identifier'],
      link: raw['link'],
      totalItems: raw['totalItems'],
    };
  },
  ['title', 'link'],
);
