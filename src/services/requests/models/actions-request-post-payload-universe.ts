import * as core from '../../../core';
import {
  RequestUniverse,
  requestUniverse,
  requestUniverseRequest,
  requestUniverseResponse,
} from '../../common/request-universe';
import { Id } from '../../common/id';

/**
 * Cast schema for the ActionsRequestPostPayloadUniverse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const actionsRequestPostPayloadUniverse =
  core.cast.identity<ActionsRequestPostPayloadUniverse>();

export type ActionsRequestPostPayloadUniverse = RequestUniverse | Id;

export const actionsRequestPostPayloadUniverseResponse =
  core.cast.identity<ActionsRequestPostPayloadUniverse>();

export const actionsRequestPostPayloadUniverseRequest =
  core.cast.identity<ActionsRequestPostPayloadUniverse>();
