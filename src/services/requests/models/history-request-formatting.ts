import * as core from '../../../core';
import {
  HistoryMediaTypeFormat as _HistoryMediaTypeFormat,
  historyMediaTypeFormat,
  historyMediaTypeFormatRequest,
  historyMediaTypeFormatResponse,
} from '../../common/history-media-type-format';
import {
  HistoryFormat as _HistoryFormat,
  historyFormat,
  historyFormatRequest,
  historyFormatResponse,
} from '../../common/history-format';

/**
 * Cast schema for the HistoryRequestFormatting model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const historyRequestFormatting = core.cast.identity<HistoryRequestFormatting>();

export type HistoryRequestFormatting =
  | HistoryRequestFormatting.MediaType
  | HistoryRequestFormatting.HistoryFormat;

export namespace HistoryRequestFormatting {
  export interface MediaType extends _HistoryMediaTypeFormat {
    _type: 'MediaType';
  }
  export interface HistoryFormat extends _HistoryFormat {
    _type: 'HistoryFormat';
  }
}

export const historyRequestFormattingResponse = core.cast.identity<HistoryRequestFormatting>();

export const historyRequestFormattingRequest = core.cast.identity<HistoryRequestFormatting>();
