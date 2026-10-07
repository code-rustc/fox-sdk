import * as core from '../../core';

export const UniverseType = {
  Universe: 'Universe',
} as const;

export type UniverseType = (typeof UniverseType)[keyof typeof UniverseType];

export const universeType = core.cast.identity<UniverseType>();
