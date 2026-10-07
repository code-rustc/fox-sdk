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
 * Cast schema for the EntityRequestPostPayloadTrigger model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const entityRequestPostPayloadTrigger =
  core.cast.identity<EntityRequestPostPayloadTrigger>();

export type EntityRequestPostPayloadTrigger = RequestSubmitTrigger | RequestScheduledTrigger | Id;

export const entityRequestPostPayloadTriggerResponse =
  core.cast.identity<EntityRequestPostPayloadTrigger>();

export const entityRequestPostPayloadTriggerRequest =
  core.cast.identity<EntityRequestPostPayloadTrigger>();
