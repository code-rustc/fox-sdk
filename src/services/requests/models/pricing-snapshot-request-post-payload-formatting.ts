import * as core from '../../../core';
import {
  MediaType as _MediaType,
  mediaType,
  mediaTypeRequest,
  mediaTypeResponse,
} from '../../common/media-type';
import {
  PricingSnapshotFormat as _PricingSnapshotFormat,
  pricingSnapshotFormat,
  pricingSnapshotFormatRequest,
  pricingSnapshotFormatResponse,
} from '../../common/pricing-snapshot-format';

/**
 * Cast schema for the PricingSnapshotRequestPostPayloadFormatting model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const pricingSnapshotRequestPostPayloadFormatting =
  core.cast.identity<PricingSnapshotRequestPostPayloadFormatting>();

export type PricingSnapshotRequestPostPayloadFormatting =
  | PricingSnapshotRequestPostPayloadFormatting.MediaType
  | PricingSnapshotRequestPostPayloadFormatting.PricingSnapshotFormat;

export namespace PricingSnapshotRequestPostPayloadFormatting {
  export interface MediaType extends _MediaType {
    _type: 'MediaType';
  }
  export interface PricingSnapshotFormat extends _PricingSnapshotFormat {
    _type: 'PricingSnapshotFormat';
  }
}

export const pricingSnapshotRequestPostPayloadFormattingResponse =
  core.cast.identity<PricingSnapshotRequestPostPayloadFormatting>();

export const pricingSnapshotRequestPostPayloadFormattingRequest =
  core.cast.identity<PricingSnapshotRequestPostPayloadFormatting>();
