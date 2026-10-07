import * as core from '../../../core';

export const EntityDlPlusOptionsType = {
  EntityDlPlus: 'EntityDlPlus',
} as const;

export type EntityDlPlusOptionsType =
  (typeof EntityDlPlusOptionsType)[keyof typeof EntityDlPlusOptionsType];

export const entityDlPlusOptionsType = core.cast.identity<EntityDlPlusOptionsType>();
