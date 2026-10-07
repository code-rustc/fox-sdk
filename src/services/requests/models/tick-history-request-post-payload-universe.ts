import * as core from '../../../core';
import {
  RequestUniverse,
  requestUniverse,
  requestUniverseRequest,
  requestUniverseResponse,
} from '../../common/request-universe';
import { Id } from '../../common/id';

/**
 * Cast schema for the TickHistoryRequestPostPayloadUniverse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const tickHistoryRequestPostPayloadUniverse =
  core.cast.identity<TickHistoryRequestPostPayloadUniverse>();

export type TickHistoryRequestPostPayloadUniverse = RequestUniverse | Id;

export const tickHistoryRequestPostPayloadUniverseResponse =
  core.cast.identity<TickHistoryRequestPostPayloadUniverse>();

export const tickHistoryRequestPostPayloadUniverseRequest =
  core.cast.identity<TickHistoryRequestPostPayloadUniverse>();
