import * as core from '../../../core';
import {
  RequestEntityFieldList,
  requestEntityFieldList,
  requestEntityFieldListRequest,
  requestEntityFieldListResponse,
} from '../../common/request-entity-field-list';
import { Id } from '../../common/id';

/**
 * Cast schema for the EntityRequestPostPayloadFieldList model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const entityRequestPostPayloadFieldList =
  core.cast.identity<EntityRequestPostPayloadFieldList>();

export type EntityRequestPostPayloadFieldList = RequestEntityFieldList | Id;

export const entityRequestPostPayloadFieldListResponse =
  core.cast.identity<EntityRequestPostPayloadFieldList>();

export const entityRequestPostPayloadFieldListRequest =
  core.cast.identity<EntityRequestPostPayloadFieldList>();
