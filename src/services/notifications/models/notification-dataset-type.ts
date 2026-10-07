import * as core from '../../../core';

export const NotificationDatasetType = {
  Dataset: 'Dataset',
  HistoryDataset: 'HistoryDataset',
  ActionsDataset: 'ActionsDataset',
  BvalSnapshotDataset: 'BvalSnapshotDataset',
  PricingSnapshotDataset: 'PricingSnapshotDataset',
  TickHistoryDataset: 'TickHistoryDataset',
  EntityDataset: 'EntityDataset',
} as const;

export type NotificationDatasetType =
  (typeof NotificationDatasetType)[keyof typeof NotificationDatasetType];

export const notificationDatasetType = core.cast.identity<NotificationDatasetType>();
