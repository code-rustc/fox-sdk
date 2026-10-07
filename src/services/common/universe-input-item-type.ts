import * as core from '../../core';

export const UniverseInputItemType = {
  Identifier: 'Identifier',
} as const;

export type UniverseInputItemType =
  (typeof UniverseInputItemType)[keyof typeof UniverseInputItemType];

export const universeInputItemType = core.cast.identity<UniverseInputItemType>();
