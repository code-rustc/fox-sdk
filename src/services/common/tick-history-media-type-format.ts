import * as core from '../../core';
import {
  TickHistoryMediaTypeFormatType,
  tickHistoryMediaTypeFormatType,
} from '../requests/models/tick-history-media-type-format-type';
import {
  TickHistoryOutputMediaType,
  tickHistoryOutputMediaType,
} from './tick-history-output-media-type';

/**
 * Formatting options for the output Tick History distribution.
 */
export interface TickHistoryMediaTypeFormat {
  /** JSON-LD type */
  '@type': TickHistoryMediaTypeFormatType;
  /** Use the outputMediaType to request custom dataset outputs in [CSV](https://www.ietf.org/rfc/rfc4180.txt) or [APACHE PARQUET](https://parquet.apache.org/docs/) format. Outputs will be delivered in either [TAR](https://www.loc.gov/preservation/digital/formats/fdd/fdd000531.shtml) or [ZIP](https://www.iso.org/standard/60101.html) archives, as specified by outputMediaType. CSV output from HAPI is normalised to [XSD 1.1 types](https://www.w3.org/TR/xmlschema11-2/) such as xsd:boolean and xsd:date to facilitate ingestion. */
  outputMediaType: TickHistoryOutputMediaType;
}

export namespace TickHistoryMediaTypeFormat {
  export type _Type = TickHistoryMediaTypeFormatType;
}

/**
 * Cast schema for the TickHistoryMediaTypeFormat model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const tickHistoryMediaTypeFormat = core.cast.identity<TickHistoryMediaTypeFormat>();

/**
 * Cast schema for mapping API responses to the TickHistoryMediaTypeFormat application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const tickHistoryMediaTypeFormatResponse = core.cast.object(
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
 * Cast schema for mapping the TickHistoryMediaTypeFormat application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const tickHistoryMediaTypeFormatRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], outputMediaType: raw['outputMediaType'] };
  },
  ['@type', 'outputMediaType'],
);
