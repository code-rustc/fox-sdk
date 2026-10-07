import * as core from '../../core';
import { HistoryFormatType, historyFormatType } from '../requests/models/history-format-type';
import { OutputFileType, outputFileType } from './output-file-type';
import { DateFormat, dateFormat } from './date-format';
import { BaseFormat, baseFormat, baseFormatRequest, baseFormatResponse } from './base-format';

export interface HistoryFormat extends BaseFormat {
  /** JSON-LD type */
  _type: 'HistoryFormat';
  /** Controls the format of dates produced in the responses. */
  dateFormat?: DateFormat | undefined;
  /** This option is deprecated. Please use `includeSourceInOutput` in `pricingSourceOptions` instead. */
  displayPricingSource?: boolean | undefined;
}

export namespace HistoryFormat {
  export type _Type = HistoryFormatType;
}

/**
 * Cast schema for the HistoryFormat model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const historyFormat = core.cast.identity<HistoryFormat>();

/**
 * Cast schema for mapping API responses to the HistoryFormat application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const historyFormatResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      'fileType',
      'dateFormat',
      'displayPricingSource',
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
      dateFormat: raw['dateFormat'],
      displayPricingSource: raw['displayPricingSource'],
    };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the HistoryFormat application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const historyFormatRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      fileType: raw['fileType'],
      dateFormat: raw['dateFormat'],
      displayPricingSource: raw['displayPricingSource'],
    };
  },
  ['@type'],
);
