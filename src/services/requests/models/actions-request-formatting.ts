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
 * Cast schema for the ActionsRequestFormatting model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const actionsRequestFormatting = core.cast.identity<ActionsRequestFormatting>();

export type ActionsRequestFormatting =
  | ActionsRequestFormatting.MediaType
  | ActionsRequestFormatting.ActionsFormat;

export namespace ActionsRequestFormatting {
  export interface MediaType extends _MediaTypeOnlyJson {
    _type: 'MediaType';
  }
  export interface ActionsFormat extends _ActionsFormat {
    _type: 'ActionsFormat';
  }
}

export const actionsRequestFormattingResponse = core.cast.identity<ActionsRequestFormatting>();

export const actionsRequestFormattingRequest = core.cast.identity<ActionsRequestFormatting>();
