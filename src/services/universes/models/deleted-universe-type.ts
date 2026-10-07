import * as core from '../../../core';

export const DeletedUniverseType = {
  Universe: 'Universe',
} as const;

export type DeletedUniverseType = (typeof DeletedUniverseType)[keyof typeof DeletedUniverseType];

export const deletedUniverseType = core.cast.identity<DeletedUniverseType>();
