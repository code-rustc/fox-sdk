import * as core from '../../../core';
import {
  MediaType as _MediaType,
  mediaType,
  mediaTypeRequest,
  mediaTypeResponse,
} from '../../common/media-type';
import {
  BvalSnapshotFormat as _BvalSnapshotFormat,
  bvalSnapshotFormat,
  bvalSnapshotFormatRequest,
  bvalSnapshotFormatResponse,
} from '../../common/bval-snapshot-format';

/**
 * Cast schema for the BvalSnapshotRequestPostPayloadFormatting model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const bvalSnapshotRequestPostPayloadFormatting =
  core.cast.identity<BvalSnapshotRequestPostPayloadFormatting>();

export type BvalSnapshotRequestPostPayloadFormatting =
  | BvalSnapshotRequestPostPayloadFormatting.MediaType
  | BvalSnapshotRequestPostPayloadFormatting.BvalSnapshotFormat;

export namespace BvalSnapshotRequestPostPayloadFormatting {
  export interface MediaType extends _MediaType {
    _type: 'MediaType';
  }
  export interface BvalSnapshotFormat extends _BvalSnapshotFormat {
    _type: 'BvalSnapshotFormat';
  }
}

export const bvalSnapshotRequestPostPayloadFormattingResponse =
  core.cast.identity<BvalSnapshotRequestPostPayloadFormatting>();

export const bvalSnapshotRequestPostPayloadFormattingRequest =
  core.cast.identity<BvalSnapshotRequestPostPayloadFormatting>();
