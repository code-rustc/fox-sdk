import * as core from '../../../core';
import {
  MediaType as _MediaType,
  mediaType,
  mediaTypeRequest,
  mediaTypeResponse,
} from '../../common/media-type';
import {
  EntityFormat as _EntityFormat,
  entityFormat,
  entityFormatRequest,
  entityFormatResponse,
} from '../../common/entity-format';

/**
 * Cast schema for the EntityRequestPostPayloadFormatting model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const entityRequestPostPayloadFormatting =
  core.cast.identity<EntityRequestPostPayloadFormatting>();

export type EntityRequestPostPayloadFormatting =
  | EntityRequestPostPayloadFormatting.MediaType
  | EntityRequestPostPayloadFormatting.EntityFormat;

export namespace EntityRequestPostPayloadFormatting {
  export interface MediaType extends _MediaType {
    _type: 'MediaType';
  }
  export interface EntityFormat extends _EntityFormat {
    _type: 'EntityFormat';
  }
}

export const entityRequestPostPayloadFormattingResponse =
  core.cast.identity<EntityRequestPostPayloadFormatting>();

export const entityRequestPostPayloadFormattingRequest =
  core.cast.identity<EntityRequestPostPayloadFormatting>();
