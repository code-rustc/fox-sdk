import * as core from '../../../core';
import {
  Dataset as _Dataset,
  dataset,
  datasetRequest,
  datasetResponse,
} from '../../common/dataset';
import {
  HistoryDataset as _HistoryDataset,
  historyDataset,
  historyDatasetRequest,
  historyDatasetResponse,
} from '../../common/history-dataset';
import {
  ActionsDataset as _ActionsDataset,
  actionsDataset,
  actionsDatasetRequest,
  actionsDatasetResponse,
} from '../../common/actions-dataset';
import {
  BvalSnapshotDataset as _BvalSnapshotDataset,
  bvalSnapshotDataset,
  bvalSnapshotDatasetRequest,
  bvalSnapshotDatasetResponse,
} from '../../common/bval-snapshot-dataset';
import {
  PricingSnapshotDataset as _PricingSnapshotDataset,
  pricingSnapshotDataset,
  pricingSnapshotDatasetRequest,
  pricingSnapshotDatasetResponse,
} from '../../common/pricing-snapshot-dataset';
import {
  TickHistoryDataset as _TickHistoryDataset,
  tickHistoryDataset,
  tickHistoryDatasetRequest,
  tickHistoryDatasetResponse,
} from '../../common/tick-history-dataset';
import {
  EntityDataset as _EntityDataset,
  entityDataset,
  entityDatasetRequest,
  entityDatasetResponse,
} from '../../common/entity-dataset';

/**
 * Cast schema for the GetDatasetResponse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const getDatasetResponse = core.cast.identity<GetDatasetResponse>();

export type GetDatasetResponse =
  | GetDatasetResponse.Dataset
  | GetDatasetResponse.HistoryDataset
  | GetDatasetResponse.ActionsDataset
  | GetDatasetResponse.BvalSnapshotDataset
  | GetDatasetResponse.PricingSnapshotDataset
  | GetDatasetResponse.TickHistoryDataset
  | GetDatasetResponse.EntityDataset;

export namespace GetDatasetResponse {
  export interface Dataset extends _Dataset {
    _type: 'Dataset';
  }
  export interface HistoryDataset extends _HistoryDataset {
    _type: 'HistoryDataset';
  }
  export interface ActionsDataset extends _ActionsDataset {
    _type: 'ActionsDataset';
  }
  export interface BvalSnapshotDataset extends _BvalSnapshotDataset {
    _type: 'BvalSnapshotDataset';
  }
  export interface PricingSnapshotDataset extends _PricingSnapshotDataset {
    _type: 'PricingSnapshotDataset';
  }
  export interface TickHistoryDataset extends _TickHistoryDataset {
    _type: 'TickHistoryDataset';
  }
  export interface EntityDataset extends _EntityDataset {
    _type: 'EntityDataset';
  }
}

export const getDatasetResponseResponse = core.cast.identity<GetDatasetResponse>();

export const getDatasetResponseRequest = core.cast.identity<GetDatasetResponse>();
