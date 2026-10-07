import * as core from '../../../core';

export const RequestSummaryType = {
  DataRequest: 'DataRequest',
  HistoryRequest: 'HistoryRequest',
  ActionsRequest: 'ActionsRequest',
  BvalSnapshotRequest: 'BvalSnapshotRequest',
  PricingSnapshotRequest: 'PricingSnapshotRequest',
  TickHistoryRequest: 'TickHistoryRequest',
  EntityRequest: 'EntityRequest',
} as const;

export type RequestSummaryType = (typeof RequestSummaryType)[keyof typeof RequestSummaryType];

export const requestSummaryType = core.cast.identity<RequestSummaryType>();
