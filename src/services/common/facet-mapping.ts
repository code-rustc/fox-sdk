import * as core from '../../core';
import { FacetValue, facetValue, facetValueRequest, facetValueResponse } from './facet-value';
import { IriMappingType } from './iri-mapping-type';
import { IsFacet } from './is-facet';
import { Property } from './property';
import { Required } from './required';
import { Title } from './title';
import { FacetValues } from './facet-values';
import { Variable } from './variable';

/**
 * Hydra IRI template mapping definition for single facet
 */
export interface FacetMapping {
  /** Hydra IRI template mapping Type */
  '@type': IriMappingType;
  /** Returns True if the given variable is a Bloomberg Facet */
  isFacet: IsFacet;
  /** Indicates the type of value that you can use to search for objects within the corresponding list of resources. For example, `meta:freetextQuery` indicates you can use any text string to search for objects. `meta:enumeratedQuery` indicates that you can query based on pre-defined values of enumerated fields. For more on using the Data License REST API to search for content: [Data License REST API > Search](https://developer.bloomberg.com/portal/apis/data_license_rest_api/reference#section/Getting-Started/Search). For more on the hydra search property: [hydra-cg.com > Supported property data source](https://www.hydra-cg.com/spec/latest/core/#supported-property-data-source).
   */
  property: Property;
  /** Returns True if the given variable is a required Bloomberg Facet */
  required: Required;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** Facet level summary data in Hydra IRI template format */
  values?: FacetValues | undefined;
  /** Hydra variable */
  variable: Variable;
}

/**
 * Cast schema for the FacetMapping model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const facetMapping = core.cast.identity<FacetMapping>();

/**
 * Cast schema for mapping API responses to the FacetMapping application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const facetMappingResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      'isFacet',
      'property',
      'required',
      'title',
      'values',
      'variable',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      isFacet: raw['isFacet'],
      property: raw['property'],
      required: raw['required'],
      title: raw['title'],
      values: Array.isArray(raw['values'])
        ? (raw['values'] as any[]).map((v: any) => (v == null ? v : facetValueResponse.parse(v)))
        : (raw['values'] as any),
      variable: raw['variable'],
    };
  },
  ['@type', 'isFacet', 'property', 'required', 'title', 'variable'],
);

/**
 * Cast schema for mapping the FacetMapping application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const facetMappingRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      isFacet: raw['isFacet'],
      property: raw['property'],
      required: raw['required'],
      title: raw['title'],
      values: Array.isArray(raw['values'])
        ? (raw['values'] as any[]).map((v: any) => (v == null ? v : facetValueRequest.parse(v)))
        : (raw['values'] as any),
      variable: raw['variable'],
    };
  },
  ['@type', 'isFacet', 'property', 'required', 'title', 'variable'],
);
