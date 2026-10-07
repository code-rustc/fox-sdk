import * as core from '../../core';
import {
  PricingSnapshotFormatType,
  pricingSnapshotFormatType,
} from '../requests/models/pricing-snapshot-format-type';
import { OutputFileType, outputFileType } from './output-file-type';
import {
  PricingSnapshotFormatDelimiter,
  pricingSnapshotFormatDelimiter,
} from '../requests/models/pricing-snapshot-format-delimiter';
import { BaseFormat, baseFormat, baseFormatRequest, baseFormatResponse } from './base-format';

export interface PricingSnapshotFormat extends BaseFormat {
  /** JSON-LD type */
  _type: 'PricingSnapshotFormat';
  /** Determines if the response will return the title of each column of data. */
  columnHeader?: boolean | undefined;
  /** This option allows the specification of the delimiter that is used in the response. If a delimiter is specified and it is not a `|` (Unix pipe character), all text fields will be surrounded with double quotes. */
  delimiter?: PricingSnapshotFormatDelimiter | undefined;
}

export namespace PricingSnapshotFormat {
  export type _Type = PricingSnapshotFormatType;
  export type Delimiter = PricingSnapshotFormatDelimiter;
}

/**
 * Cast schema for the PricingSnapshotFormat model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const pricingSnapshotFormat = core.cast.identity<PricingSnapshotFormat>();

/**
 * Cast schema for mapping API responses to the PricingSnapshotFormat application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const pricingSnapshotFormatResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'fileType', 'columnHeader', 'delimiter']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      fileType: raw['fileType'],
      columnHeader: raw['columnHeader'],
      delimiter: raw['delimiter'],
    };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the PricingSnapshotFormat application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const pricingSnapshotFormatRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      fileType: raw['fileType'],
      columnHeader: raw['columnHeader'],
      delimiter: raw['delimiter'],
    };
  },
  ['@type'],
);
