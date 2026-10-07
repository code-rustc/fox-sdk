import * as core from '../../../core';

export const TickHistoryDatasetType = {
  TickHistoryDataset: 'TickHistoryDataset',
} as const;

export type TickHistoryDatasetType =
  (typeof TickHistoryDatasetType)[keyof typeof TickHistoryDatasetType];

export const tickHistoryDatasetType = core.cast.identity<TickHistoryDatasetType>();
