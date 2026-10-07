import * as core from '../../../core';

export const DatasetMemberType = {
  Dataset: 'Dataset',
  HistoryDataset: 'HistoryDataset',
  ActionsDataset: 'ActionsDataset',
  BvalSnapshotDataset: 'BvalSnapshotDataset',
  PricingSnapshotDataset: 'PricingSnapshotDataset',
  TickHistoryDataset: 'TickHistoryDataset',
  EntityDataset: 'EntityDataset',
} as const;

export type DatasetMemberType = (typeof DatasetMemberType)[keyof typeof DatasetMemberType];

export const datasetMemberType = core.cast.identity<DatasetMemberType>();
