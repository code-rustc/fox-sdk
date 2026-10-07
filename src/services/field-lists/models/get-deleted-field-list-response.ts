import * as core from '../../../core';
import {
  DeletedDataFieldList,
  deletedDataFieldList,
  deletedDataFieldListRequest,
  deletedDataFieldListResponse,
} from '../../common/deleted-data-field-list';
import {
  DeletedHistoryFieldList,
  deletedHistoryFieldList,
  deletedHistoryFieldListRequest,
  deletedHistoryFieldListResponse,
} from '../../common/deleted-history-field-list';
import {
  DeletedFieldList,
  deletedFieldList,
  deletedFieldListRequest,
  deletedFieldListResponse,
} from '../../common/deleted-field-list';

/**
 * Cast schema for the GetDeletedFieldListResponse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const getDeletedFieldListResponse = core.cast.identity<GetDeletedFieldListResponse>();

export type GetDeletedFieldListResponse =
  | DeletedDataFieldList
  | DeletedHistoryFieldList
  | DeletedFieldList;

export const getDeletedFieldListResponseResponse =
  core.cast.identity<GetDeletedFieldListResponse>();

export const getDeletedFieldListResponseRequest = core.cast.identity<GetDeletedFieldListResponse>();
