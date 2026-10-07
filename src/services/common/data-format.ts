import * as core from '../../core';
import { DataFormatType, dataFormatType } from '../requests/models/data-format-type';
import { OutputFileType, outputFileType } from './output-file-type';
import { DateFormat, dateFormat } from './date-format';
import { DataFormatDelimiter, dataFormatDelimiter } from '../requests/models/data-format-delimiter';
import {
  DataFormatOutputFormat,
  dataFormatOutputFormat,
} from '../requests/models/data-format-output-format';
import { DataFormatEncoding, dataFormatEncoding } from '../requests/models/data-format-encoding';
import { BaseFormat, baseFormat, baseFormatRequest, baseFormatResponse } from './base-format';

export interface DataFormat extends BaseFormat {
  /** JSON-LD type */
  _type: 'DataFormat';
  /** Determines if the response will return the title of each column of data. */
  columnHeader?: boolean | undefined;
  /** Controls the format of dates produced in the responses. */
  dateFormat?: DateFormat | undefined;
  /** This option allows the specification of the delimiter that is used in the response. If a delimiter is specified and it is not a `|` (Unix pipe character), all text fields will be surrounded with double quotes. */
  delimiter?: DataFormatDelimiter | undefined;
  /** This option controls the format of responses, such as the implementation of a delimiter. */
  outputFormat?: DataFormatOutputFormat | undefined;
  /** This option controls the encoding of the response. For 'ASCII' the encoding is either ASCII or extended ASCII, depending on the selected fields. For more: [Data License > Special Fonts](https://developer.bloomberg.com/portal/products/dl/?chapterId=4561#bulk_datasets-special_fonts). */
  encoding?: DataFormatEncoding | undefined;
}

export namespace DataFormat {
  export type _Type = DataFormatType;
  export type Delimiter = DataFormatDelimiter;
  export type OutputFormat = DataFormatOutputFormat;
  export type Encoding = DataFormatEncoding;
}

/**
 * Cast schema for the DataFormat model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const dataFormat = core.cast.identity<DataFormat>();

/**
 * Cast schema for mapping API responses to the DataFormat application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const dataFormatResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      'fileType',
      'columnHeader',
      'dateFormat',
      'delimiter',
      'outputFormat',
      'encoding',
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
      fileType: raw['fileType'],
      columnHeader: raw['columnHeader'],
      dateFormat: raw['dateFormat'],
      delimiter: raw['delimiter'],
      outputFormat: raw['outputFormat'],
      encoding: raw['encoding'],
    };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the DataFormat application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const dataFormatRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      fileType: raw['fileType'],
      columnHeader: raw['columnHeader'],
      dateFormat: raw['dateFormat'],
      delimiter: raw['delimiter'],
      outputFormat: raw['outputFormat'],
      encoding: raw['encoding'],
    };
  },
  ['@type'],
);
