import * as core from '../../../core';

export const EntityDatasetType = {
  EntityDataset: 'EntityDataset',
} as const;

export type EntityDatasetType = (typeof EntityDatasetType)[keyof typeof EntityDatasetType];

export const entityDatasetType = core.cast.identity<EntityDatasetType>();
