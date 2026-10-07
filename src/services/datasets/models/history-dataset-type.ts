import * as core from '../../../core';

export const HistoryDatasetType = {
  HistoryDataset: 'HistoryDataset',
} as const;

export type HistoryDatasetType = (typeof HistoryDatasetType)[keyof typeof HistoryDatasetType];

export const historyDatasetType = core.cast.identity<HistoryDatasetType>();
