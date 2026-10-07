import * as core from '../../../core';

export const GetContentSseRequestCollection = {
  Responses: 'responses',
  Bulk: 'bulk',
} as const;

export type GetContentSseRequestCollection =
  (typeof GetContentSseRequestCollection)[keyof typeof GetContentSseRequestCollection];

export const getContentSseRequestCollection = core.cast.identity<GetContentSseRequestCollection>();
