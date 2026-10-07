import * as core from '../../core';
import {
  FieldListInputItemMnemonic,
  fieldListInputItemMnemonic,
  fieldListInputItemMnemonicRequest,
  fieldListInputItemMnemonicResponse,
} from './field-list-input-item-mnemonic';
import {
  FieldListInputItemCleanName,
  fieldListInputItemCleanName,
  fieldListInputItemCleanNameRequest,
  fieldListInputItemCleanNameResponse,
} from './field-list-input-item-clean-name';
import {
  FieldListInputItemId,
  fieldListInputItemId,
  fieldListInputItemIdRequest,
  fieldListInputItemIdResponse,
} from './field-list-input-item-id';

/**
 * Cast schema for the FieldListInputItem model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const fieldListInputItem = core.cast.identity<FieldListInputItem>();

export type FieldListInputItem =
  | FieldListInputItemMnemonic
  | FieldListInputItemCleanName
  | FieldListInputItemId;

export const fieldListInputItemResponse = core.cast.identity<FieldListInputItem>();

export const fieldListInputItemRequest = core.cast.identity<FieldListInputItem>();
