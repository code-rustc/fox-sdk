import * as core from '../../../core';

export const GetUniverseRequestRequestType = {
  DataRequest: 'DataRequest',
  HistoryRequest: 'HistoryRequest',
  ActionsRequest: 'ActionsRequest',
  BvalSnapshotRequest: 'BvalSnapshotRequest',
  PricingSnapshotRequest: 'PricingSnapshotRequest',
  EntityRequest: 'EntityRequest',
} as const;

export type GetUniverseRequestRequestType =
  (typeof GetUniverseRequestRequestType)[keyof typeof GetUniverseRequestRequestType];

export const getUniverseRequestRequestType = core.cast.identity<GetUniverseRequestRequestType>();
