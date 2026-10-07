import * as core from '../../../core';

export const FieldListCollectionItemType = {
  FieldListCollection: 'FieldListCollection',
} as const;

export type FieldListCollectionItemType =
  (typeof FieldListCollectionItemType)[keyof typeof FieldListCollectionItemType];

export const fieldListCollectionItemType = core.cast.identity<FieldListCollectionItemType>();
