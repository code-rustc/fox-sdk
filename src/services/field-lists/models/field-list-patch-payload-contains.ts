import * as core from '../../../core';
import {
  DataFieldListInputItem,
  dataFieldListInputItem,
  dataFieldListInputItemRequest,
  dataFieldListInputItemResponse,
} from '../../common/data-field-list-input-item';
import {
  HistoryFieldListInputItem,
  historyFieldListInputItem,
  historyFieldListInputItemRequest,
  historyFieldListInputItemResponse,
} from '../../common/history-field-list-input-item';
import {
  FieldListInputItem,
  fieldListInputItem,
  fieldListInputItemRequest,
  fieldListInputItemResponse,
} from '../../common/field-list-input-item';
import { DataFieldListInputItems } from '../../common/data-field-list-input-items';
import { HistoryFieldListInputItems } from '../../common/history-field-list-input-items';
import { FieldListInputItems } from '../../common/field-list-input-items';

/**
 * Cast schema for the FieldListPatchPayloadContains model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const fieldListPatchPayloadContains = core.cast.identity<FieldListPatchPayloadContains>();

export type FieldListPatchPayloadContains =
  | DataFieldListInputItems
  | HistoryFieldListInputItems
  | FieldListInputItems;

export const fieldListPatchPayloadContainsResponse =
  core.cast.identity<FieldListPatchPayloadContains>();

export const fieldListPatchPayloadContainsRequest =
  core.cast.identity<FieldListPatchPayloadContains>();
