import * as core from '../../core';
import { ActionsFormatType, actionsFormatType } from '../requests/models/actions-format-type';
import { DateFormat, dateFormat } from './date-format';
import { OutputFileType, outputFileType } from './output-file-type';

export interface ActionsFormat {
  /** JSON-LD type */
  _type: 'ActionsFormat';
  /** Controls the format of dates produced in the responses. */
  dateFormat?: DateFormat | undefined;
  /** Determines the usage of carriage returns before encrypting the dataset. If fileType is set to 'windowsFileType', then a carriage return is added to the end of each line of the response before it is encrypted. This allows the decrypted response to be opened in various DOS applications which require the carriage return to signal the end of a line. */
  fileType?: OutputFileType | undefined;
}

export namespace ActionsFormat {
  export type _Type = ActionsFormatType;
}

/**
 * Cast schema for the ActionsFormat model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const actionsFormat = core.cast.identity<ActionsFormat>();

/**
 * Cast schema for mapping API responses to the ActionsFormat application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const actionsFormatResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'dateFormat', 'fileType']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      dateFormat: raw['dateFormat'],
      fileType: raw['fileType'],
    };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the ActionsFormat application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const actionsFormatRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], dateFormat: raw['dateFormat'], fileType: raw['fileType'] };
  },
  ['@type'],
);
