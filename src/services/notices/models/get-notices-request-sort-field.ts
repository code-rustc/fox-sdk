import * as core from '../../../core';

export const GetNoticesRequestSortField = {
  EffectiveDate: 'effectiveDate',
  Id: 'id',
  PublishedDate: 'publishedDate',
  RefId: 'refId',
} as const;

export type GetNoticesRequestSortField =
  (typeof GetNoticesRequestSortField)[keyof typeof GetNoticesRequestSortField];

export const getNoticesRequestSortField = core.cast.identity<GetNoticesRequestSortField>();
