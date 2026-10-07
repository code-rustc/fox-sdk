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
 * Cast schema for the ActionsRequestPostPayloadTrigger model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const actionsRequestPostPayloadTrigger =
  core.cast.identity<ActionsRequestPostPayloadTrigger>();

export type ActionsRequestPostPayloadTrigger = RequestScheduledTrigger | RequestSubmitTrigger | Id;

export const actionsRequestPostPayloadTriggerResponse =
  core.cast.identity<ActionsRequestPostPayloadTrigger>();

export const actionsRequestPostPayloadTriggerRequest =
  core.cast.identity<ActionsRequestPostPayloadTrigger>();
