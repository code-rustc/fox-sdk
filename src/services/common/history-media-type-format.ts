import * as core from '../../core';
import {
  HistoryMediaTypeFormatType,
  historyMediaTypeFormatType,
} from '../requests/models/history-media-type-format-type';
import { HistoryOutputMediaType, historyOutputMediaType } from './history-output-media-type';

/**
 * Formatting options for the output History distribution.
 */
export interface HistoryMediaTypeFormat {
  /** JSON-LD type */
  _type: 'MediaType';
  /** Use the mediaType to request custom datasets in [CSV](https://www.ietf.org/rfc/rfc4180.txt) or [JSON](https://www.ietf.org/rfc/rfc8259.txt) format. CSV output from DL REST API is normalised to [XSD 1.1 types](https://www.w3.org/TR/xmlschema11-2/) such as xsd:boolean and xsd:date to facilitate ingestion. */
  outputMediaType: HistoryOutputMediaType;
}

export namespace HistoryMediaTypeFormat {
  export type _Type = HistoryMediaTypeFormatType;
}

/**
 * Cast schema for the HistoryMediaTypeFormat model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const historyMediaTypeFormat = core.cast.identity<HistoryMediaTypeFormat>();

/**
 * Cast schema for mapping API responses to the HistoryMediaTypeFormat application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const historyMediaTypeFormatResponse = core.cast.object(
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
 * Cast schema for mapping the HistoryMediaTypeFormat application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const historyMediaTypeFormatRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], outputMediaType: raw['outputMediaType'] };
  },
  ['@type', 'outputMediaType'],
);
