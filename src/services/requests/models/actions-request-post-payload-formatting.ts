import * as core from '../../../core';
import {
  MediaTypeOnlyJson as _MediaTypeOnlyJson,
  mediaTypeOnlyJson,
  mediaTypeOnlyJsonRequest,
  mediaTypeOnlyJsonResponse,
} from '../../common/media-type-only-json';
import {
  ActionsFormat as _ActionsFormat,
  actionsFormat,
  actionsFormatRequest,
  actionsFormatResponse,
} from '../../common/actions-format';

/**
 * Cast schema for the ActionsRequestPostPayloadFormatting model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const actionsRequestPostPayloadFormatting =
  core.cast.identity<ActionsRequestPostPayloadFormatting>();

export type ActionsRequestPostPayloadFormatting =
  | ActionsRequestPostPayloadFormatting.MediaType
  | ActionsRequestPostPayloadFormatting.ActionsFormat;

export namespace ActionsRequestPostPayloadFormatting {
  export interface MediaType extends _MediaTypeOnlyJson {
    _type: 'MediaType';
  }
  export interface ActionsFormat extends _ActionsFormat {
    _type: 'ActionsFormat';
  }
}

export const actionsRequestPostPayloadFormattingResponse =
  core.cast.identity<ActionsRequestPostPayloadFormatting>();

export const actionsRequestPostPayloadFormattingRequest =
  core.cast.identity<ActionsRequestPostPayloadFormatting>();
