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
 * Cast schema for the PricingSnapshotRequestFormatting model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const pricingSnapshotRequestFormatting =
  core.cast.identity<PricingSnapshotRequestFormatting>();

export type PricingSnapshotRequestFormatting =
  | PricingSnapshotRequestFormatting.MediaType
  | PricingSnapshotRequestFormatting.PricingSnapshotFormat;

export namespace PricingSnapshotRequestFormatting {
  export interface MediaType extends _MediaType {
    _type: 'MediaType';
  }
  export interface PricingSnapshotFormat extends _PricingSnapshotFormat {
    _type: 'PricingSnapshotFormat';
  }
}

export const pricingSnapshotRequestFormattingResponse =
  core.cast.identity<PricingSnapshotRequestFormatting>();

export const pricingSnapshotRequestFormattingRequest =
  core.cast.identity<PricingSnapshotRequestFormatting>();
