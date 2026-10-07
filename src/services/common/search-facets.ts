import * as core from '../../core';
import {
  FacetMapping,
  facetMapping,
  facetMappingRequest,
  facetMappingResponse,
} from './facet-mapping';
import { IriType } from './iri-type';
import { FacetMappings } from './facet-mappings';
import { IriTemplate } from './iri-template';
import { VariableRepresentation } from './variable-representation';

/**
 * List of all Bloomberg Bulk facets and summary information. This only applies when catalog is `bbg`.
 */
export interface SearchFacets {
  /** Hydra IRI template type */
  '@type': IriType;
  /** Hydra IRI template mapping definition for facets */
  mapping: FacetMappings;
  /** Hydra IRI template */
  template: IriTemplate;
  /** Hydra variable representation */
  variableRepresentation: VariableRepresentation;
}

/**
 * Cast schema for the SearchFacets model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const searchFacets = core.cast.identity<SearchFacets>();

/**
 * Cast schema for mapping API responses to the SearchFacets application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const searchFacetsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      'mapping',
      'template',
      'variableRepresentation',
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
      mapping: Array.isArray(raw['mapping'])
        ? (raw['mapping'] as any[]).map((v: any) => (v == null ? v : facetMappingResponse.parse(v)))
        : (raw['mapping'] as any),
      template: raw['template'],
      variableRepresentation: raw['variableRepresentation'],
    };
  },
  ['@type', 'mapping', 'template', 'variableRepresentation'],
);

/**
 * Cast schema for mapping the SearchFacets application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const searchFacetsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      mapping: Array.isArray(raw['mapping'])
        ? (raw['mapping'] as any[]).map((v: any) => (v == null ? v : facetMappingRequest.parse(v)))
        : (raw['mapping'] as any),
      template: raw['template'],
      variableRepresentation: raw['variableRepresentation'],
    };
  },
  ['@type', 'mapping', 'template', 'variableRepresentation'],
);
