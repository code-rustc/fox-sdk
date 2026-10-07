import * as core from '../../../core';

export const UniverseCollectionItemType = {
  UniverseCollection: 'UniverseCollection',
} as const;

export type UniverseCollectionItemType =
  (typeof UniverseCollectionItemType)[keyof typeof UniverseCollectionItemType];

export const universeCollectionItemType = core.cast.identity<UniverseCollectionItemType>();
