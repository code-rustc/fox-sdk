import * as core from '../../../core';
import {
  RequestUniverse,
  requestUniverse,
  requestUniverseRequest,
  requestUniverseResponse,
} from '../../common/request-universe';
import { Id } from '../../common/id';

/**
 * Cast schema for the DataRequestPostPayloadUniverse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const dataRequestPostPayloadUniverse = core.cast.identity<DataRequestPostPayloadUniverse>();

export type DataRequestPostPayloadUniverse = RequestUniverse | Id;

export const dataRequestPostPayloadUniverseResponse =
  core.cast.identity<DataRequestPostPayloadUniverse>();

export const dataRequestPostPayloadUniverseRequest =
  core.cast.identity<DataRequestPostPayloadUniverse>();
