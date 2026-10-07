import * as core from '../../../core';

export const ActionsDatasetType = {
  ActionsDataset: 'ActionsDataset',
} as const;

export type ActionsDatasetType = (typeof ActionsDatasetType)[keyof typeof ActionsDatasetType];

export const actionsDatasetType = core.cast.identity<ActionsDatasetType>();
