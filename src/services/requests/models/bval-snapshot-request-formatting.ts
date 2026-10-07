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
 * Cast schema for the BvalSnapshotRequestFormatting model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const bvalSnapshotRequestFormatting = core.cast.identity<BvalSnapshotRequestFormatting>();

export type BvalSnapshotRequestFormatting =
  | BvalSnapshotRequestFormatting.MediaType
  | BvalSnapshotRequestFormatting.BvalSnapshotFormat;

export namespace BvalSnapshotRequestFormatting {
  export interface MediaType extends _MediaType {
    _type: 'MediaType';
  }
  export interface BvalSnapshotFormat extends _BvalSnapshotFormat {
    _type: 'BvalSnapshotFormat';
  }
}

export const bvalSnapshotRequestFormattingResponse =
  core.cast.identity<BvalSnapshotRequestFormatting>();

export const bvalSnapshotRequestFormattingRequest =
  core.cast.identity<BvalSnapshotRequestFormatting>();
