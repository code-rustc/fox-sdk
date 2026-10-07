import * as core from '../../../core';
import {
  RequestScheduledTrigger,
  requestScheduledTrigger,
  requestScheduledTriggerRequest,
  requestScheduledTriggerResponse,
} from '../../common/request-scheduled-trigger';
import {
  RequestSubmitTrigger,
  requestSubmitTrigger,
  requestSubmitTriggerRequest,
  requestSubmitTriggerResponse,
} from '../../common/request-submit-trigger';
import { Id } from '../../common/id';

/**
 * Cast schema for the DataRequestPostPayloadTrigger model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const dataRequestPostPayloadTrigger = core.cast.identity<DataRequestPostPayloadTrigger>();

export type DataRequestPostPayloadTrigger = RequestScheduledTrigger | RequestSubmitTrigger | Id;

export const dataRequestPostPayloadTriggerResponse =
  core.cast.identity<DataRequestPostPayloadTrigger>();

export const dataRequestPostPayloadTriggerRequest =
  core.cast.identity<DataRequestPostPayloadTrigger>();
