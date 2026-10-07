import * as core from '../../core';
import { MediaTypeType, mediaTypeType } from '../requests/models/media-type-type';
import {
  MediaTypeOutputMediaType,
  mediaTypeOutputMediaType,
} from '../requests/models/media-type-output-media-type';

export interface MediaType {
  /** JSON-LD type */
  _type: 'MediaType';
  /** Use the mediaType to request custom datasets in [CSV](https://www.ietf.org/rfc/rfc4180.txt) or [JSON](https://www.ietf.org/rfc/rfc8259.txt) format. CSV output from DL REST API is normalised to [XSD 1.1 types](https://www.w3.org/TR/xmlschema11-2/) such as xsd:boolean and xsd:date to facilitate ingestion. */
  outputMediaType: MediaTypeOutputMediaType;
}

export namespace MediaType {
  export type _Type = MediaTypeType;
  export type OutputMediaType = MediaTypeOutputMediaType;
}

/**
 * Cast schema for the MediaType model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const mediaType = core.cast.identity<MediaType>();

/**
 * Cast schema for mapping API responses to the MediaType application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const mediaTypeResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'outputMediaType']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'], outputMediaType: raw['outputMediaType'] };
  },
  ['@type', 'outputMediaType'],
);

/**
 * Cast schema for mapping the MediaType application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const mediaTypeRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], outputMediaType: raw['outputMediaType'] };
  },
  ['@type', 'outputMediaType'],
);
