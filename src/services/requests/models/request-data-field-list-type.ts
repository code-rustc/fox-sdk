import * as core from '../../../core';

export const RequestDataFieldListType = {
  DataFieldList: 'DataFieldList',
} as const;

export type RequestDataFieldListType =
  (typeof RequestDataFieldListType)[keyof typeof RequestDataFieldListType];

export const requestDataFieldListType = core.cast.identity<RequestDataFieldListType>();
