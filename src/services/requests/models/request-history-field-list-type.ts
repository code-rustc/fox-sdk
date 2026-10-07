import * as core from '../../../core';

export const RequestHistoryFieldListType = {
  HistoryFieldList: 'HistoryFieldList',
} as const;

export type RequestHistoryFieldListType =
  (typeof RequestHistoryFieldListType)[keyof typeof RequestHistoryFieldListType];

export const requestHistoryFieldListType = core.cast.identity<RequestHistoryFieldListType>();
