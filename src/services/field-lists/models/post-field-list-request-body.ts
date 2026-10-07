import * as core from '../../../core';
import {
  FieldListPostPayload,
  fieldListPostPayload,
  fieldListPostPayloadRequest,
  fieldListPostPayloadResponse,
} from '../../common/field-list-post-payload';
import {
  HistoryFieldListPostPayload,
  historyFieldListPostPayload,
  historyFieldListPostPayloadRequest,
  historyFieldListPostPayloadResponse,
} from '../../common/history-field-list-post-payload';
import {
  DataFieldListPostPayload,
  dataFieldListPostPayload,
  dataFieldListPostPayloadRequest,
  dataFieldListPostPayloadResponse,
} from '../../common/data-field-list-post-payload';

/**
 * Cast schema for the PostFieldListRequestBody model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const postFieldListRequestBody = core.cast.identity<PostFieldListRequestBody>();

export type PostFieldListRequestBody =
  | FieldListPostPayload
  | HistoryFieldListPostPayload
  | DataFieldListPostPayload;

export const postFieldListRequestBodyResponse = core.cast.identity<PostFieldListRequestBody>();

export const postFieldListRequestBodyRequest = core.cast.identity<PostFieldListRequestBody>();
