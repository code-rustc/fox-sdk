import * as core from '../../../core';

export const FieldListCollectionType = {
  FieldListCollection: 'FieldListCollection',
} as const;

export type FieldListCollectionType =
  (typeof FieldListCollectionType)[keyof typeof FieldListCollectionType];

export const fieldListCollectionType = core.cast.identity<FieldListCollectionType>();
