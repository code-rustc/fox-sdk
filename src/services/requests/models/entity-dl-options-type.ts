import * as core from '../../../core';

export const EntityDlOptionsType = {
  EntityDl: 'EntityDl',
} as const;

export type EntityDlOptionsType = (typeof EntityDlOptionsType)[keyof typeof EntityDlOptionsType];

export const entityDlOptionsType = core.cast.identity<EntityDlOptionsType>();
