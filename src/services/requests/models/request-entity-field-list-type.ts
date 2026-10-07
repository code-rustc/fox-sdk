import * as core from '../../../core';

export const RequestEntityFieldListType = {
  EntityFieldList: 'EntityFieldList',
} as const;

export type RequestEntityFieldListType =
  (typeof RequestEntityFieldListType)[keyof typeof RequestEntityFieldListType];

export const requestEntityFieldListType = core.cast.identity<RequestEntityFieldListType>();
