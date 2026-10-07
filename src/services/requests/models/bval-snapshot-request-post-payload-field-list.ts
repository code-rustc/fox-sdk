import * as core from '../../../core';
import {
  RequestBvalSnapshotFieldList,
  requestBvalSnapshotFieldList,
  requestBvalSnapshotFieldListRequest,
  requestBvalSnapshotFieldListResponse,
} from '../../common/request-bval-snapshot-field-list';
import { Id } from '../../common/id';

/**
 * Cast schema for the BvalSnapshotRequestPostPayloadFieldList model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const bvalSnapshotRequestPostPayloadFieldList =
  core.cast.identity<BvalSnapshotRequestPostPayloadFieldList>();

export type BvalSnapshotRequestPostPayloadFieldList = RequestBvalSnapshotFieldList | Id;

export const bvalSnapshotRequestPostPayloadFieldListResponse =
  core.cast.identity<BvalSnapshotRequestPostPayloadFieldList>();

export const bvalSnapshotRequestPostPayloadFieldListRequest =
  core.cast.identity<BvalSnapshotRequestPostPayloadFieldList>();
