import * as core from '../../../core';

export const EntityRequestPostPayloadType = {
  EntityRequest: 'EntityRequest',
} as const;

export type EntityRequestPostPayloadType =
  (typeof EntityRequestPostPayloadType)[keyof typeof EntityRequestPostPayloadType];

export const entityRequestPostPayloadType = core.cast.identity<EntityRequestPostPayloadType>();
