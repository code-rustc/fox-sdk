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
 * Cast schema for the GetFieldListByRequestResponse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const getFieldListByRequestResponse = core.cast.identity<GetFieldListByRequestResponse>();

export type GetFieldListByRequestResponse = DataFieldList | HistoryFieldList | FieldList;

export const getFieldListByRequestResponseResponse =
  core.cast.identity<GetFieldListByRequestResponse>();

export const getFieldListByRequestResponseRequest =
  core.cast.identity<GetFieldListByRequestResponse>();
