import * as core from '../../core';
import { EntityFormatType, entityFormatType } from '../requests/models/entity-format-type';
import { OutputFileType, outputFileType } from './output-file-type';
import { DateFormat, dateFormat } from './date-format';
import {
  EntityFormatDelimiter,
  entityFormatDelimiter,
} from '../requests/models/entity-format-delimiter';
import {
  EntityFormatOutputFormat,
  entityFormatOutputFormat,
} from '../requests/models/entity-format-output-format';
import { BaseFormat, baseFormat, baseFormatRequest, baseFormatResponse } from './base-format';

export interface EntityFormat extends BaseFormat {
  /** JSON-LD type */
  _type: 'EntityFormat';
  /** Determines if the response will return the title of each column of data. */
  columnHeader?: boolean | undefined;
  /** Controls the format of dates produced in the responses. */
  dateFormat?: DateFormat | undefined;
  /** This option allows the specification of the delimiter that is used in the response. If a delimiter is specified and it is not a `|` (Unix pipe character), all text fields will be surrounded with double quotes. */
  delimiter?: EntityFormatDelimiter | undefined;
  /** This option controls the format of responses, such as the implementation of a delimiter. */
  outputFormat?: EntityFormatOutputFormat | undefined;
}

export namespace EntityFormat {
  export type _Type = EntityFormatType;
  export type Delimiter = EntityFormatDelimiter;
  export type OutputFormat = EntityFormatOutputFormat;
}

/**
 * Cast schema for the EntityFormat model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const entityFormat = core.cast.identity<EntityFormat>();

/**
 * Cast schema for mapping API responses to the EntityFormat application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const entityFormatResponse = core.cast.object(
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
    };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the EntityFormat application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const entityFormatRequest = core.cast.object(
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
    };
  },
  ['@type'],
);
