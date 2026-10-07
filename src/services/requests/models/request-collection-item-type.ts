import * as core from '../../../core';

export const RequestCollectionItemType = {
  RequestCollection: 'RequestCollection',
} as const;

export type RequestCollectionItemType =
  (typeof RequestCollectionItemType)[keyof typeof RequestCollectionItemType];

export const requestCollectionItemType = core.cast.identity<RequestCollectionItemType>();
