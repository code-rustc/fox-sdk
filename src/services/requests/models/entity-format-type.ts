import * as core from '../../../core';

export const EntityFormatType = {
  EntityFormat: 'EntityFormat',
} as const;

export type EntityFormatType = (typeof EntityFormatType)[keyof typeof EntityFormatType];

export const entityFormatType = core.cast.identity<EntityFormatType>();
