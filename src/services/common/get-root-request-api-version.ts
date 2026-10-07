import * as core from '../../core';

export const GetRootRequestApiVersion = {
  Two: '2',
} as const;

export type GetRootRequestApiVersion =
  (typeof GetRootRequestApiVersion)[keyof typeof GetRootRequestApiVersion];

export const getRootRequestApiVersion = core.cast.identity<GetRootRequestApiVersion>();
