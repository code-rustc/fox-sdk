import * as core from '../../../core';

export const GetNoticesRequestSortDirection = {
  Asc: 'ASC',
  Desc: 'DESC',
} as const;

export type GetNoticesRequestSortDirection =
  (typeof GetNoticesRequestSortDirection)[keyof typeof GetNoticesRequestSortDirection];

export const getNoticesRequestSortDirection = core.cast.identity<GetNoticesRequestSortDirection>();
