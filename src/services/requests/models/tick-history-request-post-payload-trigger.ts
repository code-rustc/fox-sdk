import * as core from '../../../core';
import {
  RequestSubmitTrigger,
  requestSubmitTrigger,
  requestSubmitTriggerRequest,
  requestSubmitTriggerResponse,
} from '../../common/request-submit-trigger';
import {
  RequestScheduledTrigger,
  requestScheduledTrigger,
  requestScheduledTriggerRequest,
  requestScheduledTriggerResponse,
} from '../../common/request-scheduled-trigger';
import { Id } from '../../common/id';

/**
 * Cast schema for the TickHistoryRequestPostPayloadTrigger model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const tickHistoryRequestPostPayloadTrigger =
  core.cast.identity<TickHistoryRequestPostPayloadTrigger>();

export type TickHistoryRequestPostPayloadTrigger =
  | RequestSubmitTrigger
  | RequestScheduledTrigger
  | Id;

export const tickHistoryRequestPostPayloadTriggerResponse =
  core.cast.identity<TickHistoryRequestPostPayloadTrigger>();

export const tickHistoryRequestPostPayloadTriggerRequest =
  core.cast.identity<TickHistoryRequestPostPayloadTrigger>();
