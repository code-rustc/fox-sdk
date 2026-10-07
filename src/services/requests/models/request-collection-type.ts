import * as core from '../../../core';

export const RequestCollectionType = {
  RequestCollection: 'RequestCollection',
} as const;

export type RequestCollectionType =
  (typeof RequestCollectionType)[keyof typeof RequestCollectionType];

export const requestCollectionType = core.cast.identity<RequestCollectionType>();
