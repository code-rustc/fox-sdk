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
 * Cast schema for the EntityRequestFormatting model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const entityRequestFormatting = core.cast.identity<EntityRequestFormatting>();

export type EntityRequestFormatting =
  | EntityRequestFormatting.MediaType
  | EntityRequestFormatting.EntityFormat;

export namespace EntityRequestFormatting {
  export interface MediaType extends _MediaType {
    _type: 'MediaType';
  }
  export interface EntityFormat extends _EntityFormat {
    _type: 'EntityFormat';
  }
}

export const entityRequestFormattingResponse = core.cast.identity<EntityRequestFormatting>();

export const entityRequestFormattingRequest = core.cast.identity<EntityRequestFormatting>();
