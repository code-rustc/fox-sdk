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
 * Cast schema for the DataRequestFormatting model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const dataRequestFormatting = core.cast.identity<DataRequestFormatting>();

export type DataRequestFormatting =
  | DataRequestFormatting.MediaType
  | DataRequestFormatting.DataFormat;

export namespace DataRequestFormatting {
  export interface MediaType extends _MediaType {
    _type: 'MediaType';
  }
  export interface DataFormat extends _DataFormat {
    _type: 'DataFormat';
  }
}

export const dataRequestFormattingResponse = core.cast.identity<DataRequestFormatting>();

export const dataRequestFormattingRequest = core.cast.identity<DataRequestFormatting>();
