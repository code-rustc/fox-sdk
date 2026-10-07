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
 * Cast schema for the HistoryRequestPostPayloadFormatting model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const historyRequestPostPayloadFormatting =
  core.cast.identity<HistoryRequestPostPayloadFormatting>();

export type HistoryRequestPostPayloadFormatting =
  | HistoryRequestPostPayloadFormatting.MediaType
  | HistoryRequestPostPayloadFormatting.HistoryFormat;

export namespace HistoryRequestPostPayloadFormatting {
  export interface MediaType extends _HistoryMediaTypeFormat {
    _type: 'MediaType';
  }
  export interface HistoryFormat extends _HistoryFormat {
    _type: 'HistoryFormat';
  }
}

export const historyRequestPostPayloadFormattingResponse =
  core.cast.identity<HistoryRequestPostPayloadFormatting>();

export const historyRequestPostPayloadFormattingRequest =
  core.cast.identity<HistoryRequestPostPayloadFormatting>();
