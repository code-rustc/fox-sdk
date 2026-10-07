import * as core from '../../../core';

export const EntityRequestType = {
  EntityRequest: 'EntityRequest',
} as const;

export type EntityRequestType = (typeof EntityRequestType)[keyof typeof EntityRequestType];

export const entityRequestType = core.cast.identity<EntityRequestType>();
