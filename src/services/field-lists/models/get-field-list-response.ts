import * as core from '../../../core';
import {
  DataFieldList,
  dataFieldList,
  dataFieldListRequest,
  dataFieldListResponse,
} from '../../common/data-field-list';
import {
  HistoryFieldList,
  historyFieldList,
  historyFieldListRequest,
  historyFieldListResponse,
} from '../../common/history-field-list';
import { FieldList, fieldList, fieldListRequest, fieldListResponse } from '../../common/field-list';

/**
 * Cast schema for the GetFieldListResponse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const getFieldListResponse = core.cast.identity<GetFieldListResponse>();

export type GetFieldListResponse = DataFieldList | HistoryFieldList | FieldList;

export const getFieldListResponseResponse = core.cast.identity<GetFieldListResponse>();

export const getFieldListResponseRequest = core.cast.identity<GetFieldListResponse>();
