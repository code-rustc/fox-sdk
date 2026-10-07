import * as core from '../../../core';
import {
  DataRequest as _DataRequest,
  dataRequest,
  dataRequestRequest,
  dataRequestResponse,
} from '../../common/data-request';
import {
  HistoryRequest as _HistoryRequest,
  historyRequest,
  historyRequestRequest,
  historyRequestResponse,
} from '../../common/history-request';
import {
  ActionsRequest as _ActionsRequest,
  actionsRequest,
  actionsRequestRequest,
  actionsRequestResponse,
} from '../../common/actions-request';
import {
  BvalSnapshotRequest as _BvalSnapshotRequest,
  bvalSnapshotRequest,
  bvalSnapshotRequestRequest,
  bvalSnapshotRequestResponse,
} from '../../common/bval-snapshot-request';
import {
  PricingSnapshotRequest as _PricingSnapshotRequest,
  pricingSnapshotRequest,
  pricingSnapshotRequestRequest,
  pricingSnapshotRequestResponse,
} from '../../common/pricing-snapshot-request';
import {
  TickHistoryRequest as _TickHistoryRequest,
  tickHistoryRequest,
  tickHistoryRequestRequest,
  tickHistoryRequestResponse,
} from '../../common/tick-history-request';
import {
  EntityRequest as _EntityRequest,
  entityRequest,
  entityRequestRequest,
  entityRequestResponse,
} from '../../common/entity-request';

/**
 * Cast schema for the GetRequestResponse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const getRequestResponse = core.cast.identity<GetRequestResponse>();

export type GetRequestResponse =
  | GetRequestResponse.DataRequest
  | GetRequestResponse.HistoryRequest
  | GetRequestResponse.ActionsRequest
  | GetRequestResponse.BvalSnapshotRequest
  | GetRequestResponse.PricingSnapshotRequest
  | GetRequestResponse.TickHistoryRequest
  | GetRequestResponse.EntityRequest;

export namespace GetRequestResponse {
  export interface DataRequest extends _DataRequest {
    _type: 'DataRequest';
  }
  export interface HistoryRequest extends _HistoryRequest {
    _type: 'HistoryRequest';
  }
  export interface ActionsRequest extends _ActionsRequest {
    _type: 'ActionsRequest';
  }
  export interface BvalSnapshotRequest extends _BvalSnapshotRequest {
    _type: 'BvalSnapshotRequest';
  }
  export interface PricingSnapshotRequest extends _PricingSnapshotRequest {
    _type: 'PricingSnapshotRequest';
  }
  export interface TickHistoryRequest extends _TickHistoryRequest {
    _type: 'TickHistoryRequest';
  }
  export interface EntityRequest extends _EntityRequest {
    _type: 'EntityRequest';
  }
}

export const getRequestResponseResponse = core.cast.identity<GetRequestResponse>();

export const getRequestResponseRequest = core.cast.identity<GetRequestResponse>();
