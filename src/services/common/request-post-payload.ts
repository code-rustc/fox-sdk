import * as core from '../../core';
import {
  DataRequestPostPayload as _DataRequestPostPayload,
  dataRequestPostPayload,
  dataRequestPostPayloadRequest,
  dataRequestPostPayloadResponse,
} from './data-request-post-payload';
import {
  HistoryRequestPostPayload as _HistoryRequestPostPayload,
  historyRequestPostPayload,
  historyRequestPostPayloadRequest,
  historyRequestPostPayloadResponse,
} from './history-request-post-payload';
import {
  ActionsRequestPostPayload as _ActionsRequestPostPayload,
  actionsRequestPostPayload,
  actionsRequestPostPayloadRequest,
  actionsRequestPostPayloadResponse,
} from './actions-request-post-payload';
import {
  BvalSnapshotRequestPostPayload as _BvalSnapshotRequestPostPayload,
  bvalSnapshotRequestPostPayload,
  bvalSnapshotRequestPostPayloadRequest,
  bvalSnapshotRequestPostPayloadResponse,
} from './bval-snapshot-request-post-payload';
import {
  PricingSnapshotRequestPostPayload as _PricingSnapshotRequestPostPayload,
  pricingSnapshotRequestPostPayload,
  pricingSnapshotRequestPostPayloadRequest,
  pricingSnapshotRequestPostPayloadResponse,
} from './pricing-snapshot-request-post-payload';
import {
  TickHistoryRequestPostPayload as _TickHistoryRequestPostPayload,
  tickHistoryRequestPostPayload,
  tickHistoryRequestPostPayloadRequest,
  tickHistoryRequestPostPayloadResponse,
} from './tick-history-request-post-payload';
import {
  EntityRequestPostPayload as _EntityRequestPostPayload,
  entityRequestPostPayload,
  entityRequestPostPayloadRequest,
  entityRequestPostPayloadResponse,
} from './entity-request-post-payload';

/**
 * Cast schema for the RequestPostPayload model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const requestPostPayload = core.cast.identity<RequestPostPayload>();

export type RequestPostPayload =
  | RequestPostPayload.DataRequest
  | RequestPostPayload.HistoryRequest
  | RequestPostPayload.ActionsRequest
  | RequestPostPayload.BvalSnapshotRequest
  | RequestPostPayload.PricingSnapshotRequest
  | RequestPostPayload.TickHistoryRequest
  | RequestPostPayload.EntityRequest;

export namespace RequestPostPayload {
  export interface DataRequest extends _DataRequestPostPayload {
    _type: 'DataRequest';
  }
  export interface HistoryRequest extends _HistoryRequestPostPayload {
    _type: 'HistoryRequest';
  }
  export interface ActionsRequest extends _ActionsRequestPostPayload {
    _type: 'ActionsRequest';
  }
  export interface BvalSnapshotRequest extends _BvalSnapshotRequestPostPayload {
    _type: 'BvalSnapshotRequest';
  }
  export interface PricingSnapshotRequest extends _PricingSnapshotRequestPostPayload {
    _type: 'PricingSnapshotRequest';
  }
  export interface TickHistoryRequest extends _TickHistoryRequestPostPayload {
    _type: 'TickHistoryRequest';
  }
  export interface EntityRequest extends _EntityRequestPostPayload {
    _type: 'EntityRequest';
  }
}

export const requestPostPayloadResponse = core.cast.identity<RequestPostPayload>();

export const requestPostPayloadRequest = core.cast.identity<RequestPostPayload>();
