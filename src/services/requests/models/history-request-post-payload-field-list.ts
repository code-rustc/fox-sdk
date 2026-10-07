import * as core from '../../../core';
import {
  RequestHistoryFieldList,
  requestHistoryFieldList,
  requestHistoryFieldListRequest,
  requestHistoryFieldListResponse,
} from '../../common/request-history-field-list';
import { Id } from '../../common/id';

/**
 * Cast schema for the HistoryRequestPostPayloadFieldList model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const historyRequestPostPayloadFieldList =
  core.cast.identity<HistoryRequestPostPayloadFieldList>();

export type HistoryRequestPostPayloadFieldList = RequestHistoryFieldList | Id;

export const historyRequestPostPayloadFieldListResponse =
  core.cast.identity<HistoryRequestPostPayloadFieldList>();

export const historyRequestPostPayloadFieldListRequest =
  core.cast.identity<HistoryRequestPostPayloadFieldList>();
