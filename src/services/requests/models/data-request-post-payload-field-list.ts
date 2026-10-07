import * as core from '../../../core';
import {
  RequestDataFieldList,
  requestDataFieldList,
  requestDataFieldListRequest,
  requestDataFieldListResponse,
} from '../../common/request-data-field-list';
import { Id } from '../../common/id';

/**
 * Cast schema for the DataRequestPostPayloadFieldList model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const dataRequestPostPayloadFieldList =
  core.cast.identity<DataRequestPostPayloadFieldList>();

export type DataRequestPostPayloadFieldList = RequestDataFieldList | Id;

export const dataRequestPostPayloadFieldListResponse =
  core.cast.identity<DataRequestPostPayloadFieldList>();

export const dataRequestPostPayloadFieldListRequest =
  core.cast.identity<DataRequestPostPayloadFieldList>();
