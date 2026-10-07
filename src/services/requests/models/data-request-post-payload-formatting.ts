import * as core from '../../../core';
import {
  MediaType as _MediaType,
  mediaType,
  mediaTypeRequest,
  mediaTypeResponse,
} from '../../common/media-type';
import {
  DataFormat as _DataFormat,
  dataFormat,
  dataFormatRequest,
  dataFormatResponse,
} from '../../common/data-format';

/**
 * Cast schema for the DataRequestPostPayloadFormatting model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const dataRequestPostPayloadFormatting =
  core.cast.identity<DataRequestPostPayloadFormatting>();

export type DataRequestPostPayloadFormatting =
  | DataRequestPostPayloadFormatting.MediaType
  | DataRequestPostPayloadFormatting.DataFormat;

export namespace DataRequestPostPayloadFormatting {
  export interface MediaType extends _MediaType {
    _type: 'MediaType';
  }
  export interface DataFormat extends _DataFormat {
    _type: 'DataFormat';
  }
}

export const dataRequestPostPayloadFormattingResponse =
  core.cast.identity<DataRequestPostPayloadFormatting>();

export const dataRequestPostPayloadFormattingRequest =
  core.cast.identity<DataRequestPostPayloadFormatting>();
