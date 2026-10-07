import * as core from '../../core';
import { OutputFileType, outputFileType } from './output-file-type';
import { Type_ } from './type';

export interface BaseFormat {
  /** JSON-LD type */
  '@type': Type_;
  /** Determines the usage of carriage returns before encrypting the dataset. If fileType is set to 'windowsFileType', then a carriage return is added to the end of each line of the response before it is encrypted. This allows the decrypted response to be opened in various DOS applications which require the carriage return to signal the end of a line. */
  fileType?: OutputFileType | undefined;
}

/**
 * Cast schema for the BaseFormat model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const baseFormat = core.cast.identity<BaseFormat>();

/**
 * Cast schema for mapping API responses to the BaseFormat application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const baseFormatResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'fileType']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'], fileType: raw['fileType'] };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the BaseFormat application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const baseFormatRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], fileType: raw['fileType'] };
  },
  ['@type'],
);
