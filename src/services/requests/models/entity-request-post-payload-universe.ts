import * as core from '../../../core';
import {
  RequestUniverse,
  requestUniverse,
  requestUniverseRequest,
  requestUniverseResponse,
} from '../../common/request-universe';
import { Id } from '../../common/id';

/**
 * Cast schema for the EntityRequestPostPayloadUniverse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const entityRequestPostPayloadUniverse =
  core.cast.identity<EntityRequestPostPayloadUniverse>();

export type EntityRequestPostPayloadUniverse = RequestUniverse | Id;

export const entityRequestPostPayloadUniverseResponse =
  core.cast.identity<EntityRequestPostPayloadUniverse>();

export const entityRequestPostPayloadUniverseRequest =
  core.cast.identity<EntityRequestPostPayloadUniverse>();
