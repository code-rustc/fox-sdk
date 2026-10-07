import * as core from '../../core';
import {
  HistoryFieldListInputItemMnemonic,
  historyFieldListInputItemMnemonic,
  historyFieldListInputItemMnemonicRequest,
  historyFieldListInputItemMnemonicResponse,
} from '../field-lists/models/history-field-list-input-item-mnemonic';
import {
  HistoryFieldListInputItemCleanName,
  historyFieldListInputItemCleanName,
  historyFieldListInputItemCleanNameRequest,
  historyFieldListInputItemCleanNameResponse,
} from '../field-lists/models/history-field-list-input-item-clean-name';
import {
  HistoryFieldListInputItemId,
  historyFieldListInputItemId,
  historyFieldListInputItemIdRequest,
  historyFieldListInputItemIdResponse,
} from '../field-lists/models/history-field-list-input-item-id';

/**
 * Cast schema for the HistoryFieldListInputItem model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const historyFieldListInputItem = core.cast.identity<HistoryFieldListInputItem>();

export type HistoryFieldListInputItem =
  | HistoryFieldListInputItemMnemonic
  | HistoryFieldListInputItemCleanName
  | HistoryFieldListInputItemId;

export const historyFieldListInputItemResponse = core.cast.identity<HistoryFieldListInputItem>();

export const historyFieldListInputItemRequest = core.cast.identity<HistoryFieldListInputItem>();
