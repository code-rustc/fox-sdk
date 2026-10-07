import * as core from '../../core';

export const UniverseItemType = {
  Identifier: 'Identifier',
  UniverseLookup: 'UniverseLookup',
} as const;

export type UniverseItemType = (typeof UniverseItemType)[keyof typeof UniverseItemType];

export const universeItemType = core.cast.identity<UniverseItemType>();
