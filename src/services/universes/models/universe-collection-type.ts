import * as core from '../../../core';

export const UniverseCollectionType = {
  UniverseCollection: 'UniverseCollection',
} as const;

export type UniverseCollectionType =
  (typeof UniverseCollectionType)[keyof typeof UniverseCollectionType];

export const universeCollectionType = core.cast.identity<UniverseCollectionType>();
