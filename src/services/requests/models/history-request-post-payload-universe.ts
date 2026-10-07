import * as core from '../../../core';
import {
  RequestUniverse,
  requestUniverse,
  requestUniverseRequest,
  requestUniverseResponse,
} from '../../common/request-universe';
import { Id } from '../../common/id';

/**
 * Cast schema for the HistoryRequestPostPayloadUniverse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const historyRequestPostPayloadUniverse =
  core.cast.identity<HistoryRequestPostPayloadUniverse>();

export type HistoryRequestPostPayloadUniverse = RequestUniverse | Id;

export const historyRequestPostPayloadUniverseResponse =
  core.cast.identity<HistoryRequestPostPayloadUniverse>();

export const historyRequestPostPayloadUniverseRequest =
  core.cast.identity<HistoryRequestPostPayloadUniverse>();
