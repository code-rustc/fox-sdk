import * as core from '../../core';
import {
  MediaTypeOnlyJsonType,
  mediaTypeOnlyJsonType,
} from '../requests/models/media-type-only-json-type';
import {
  MediaTypeOnlyJsonOutputMediaType,
  mediaTypeOnlyJsonOutputMediaType,
} from '../requests/models/media-type-only-json-output-media-type';

export interface MediaTypeOnlyJson {
  /** JSON-LD type */
  _type: 'MediaType';
  /** Use the mediaType to request custom datasets in [JSON](https://www.ietf.org/rfc/rfc8259.txt) format. */
  outputMediaType: MediaTypeOnlyJsonOutputMediaType;
}

export namespace MediaTypeOnlyJson {
  export type _Type = MediaTypeOnlyJsonType;
  export type OutputMediaType = MediaTypeOnlyJsonOutputMediaType;
}

/**
 * Cast schema for the MediaTypeOnlyJson model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const mediaTypeOnlyJson = core.cast.identity<MediaTypeOnlyJson>();

/**
 * Cast schema for mapping API responses to the MediaTypeOnlyJson application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const mediaTypeOnlyJsonResponse = core.cast.object(
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
 * Cast schema for mapping the MediaTypeOnlyJson application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const mediaTypeOnlyJsonRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], outputMediaType: raw['outputMediaType'] };
  },
  ['@type', 'outputMediaType'],
);
