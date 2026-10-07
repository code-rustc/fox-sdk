import * as core from '../../core';
import {
  RequestUniversePatchContains,
  requestUniversePatchContains,
  requestUniversePatchContainsRequest,
  requestUniversePatchContainsResponse,
} from '../requests/models/request-universe-patch-contains';
import { Id } from './id';

/**
 * Cast schema for the RequestUniversePatch model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const requestUniversePatch = core.cast.identity<RequestUniversePatch>();

/**
 * The PATCH payload required to patch a universe directly within a Request. This patch is only allowed for the requests created after 1st Jan 2022.
 */
export type RequestUniversePatch = RequestUniversePatchContains | Id;

export const requestUniversePatchResponse = core.cast.identity<RequestUniversePatch>();

export const requestUniversePatchRequest = core.cast.identity<RequestUniversePatch>();
