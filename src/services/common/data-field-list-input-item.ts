import * as core from '../../core';
import {
  DataFieldListInputItemMnemonic,
  dataFieldListInputItemMnemonic,
  dataFieldListInputItemMnemonicRequest,
  dataFieldListInputItemMnemonicResponse,
} from '../field-lists/models/data-field-list-input-item-mnemonic';
import {
  DataFieldListInputItemCleanName,
  dataFieldListInputItemCleanName,
  dataFieldListInputItemCleanNameRequest,
  dataFieldListInputItemCleanNameResponse,
} from '../field-lists/models/data-field-list-input-item-clean-name';
import {
  DataFieldListInputItemId,
  dataFieldListInputItemId,
  dataFieldListInputItemIdRequest,
  dataFieldListInputItemIdResponse,
} from '../field-lists/models/data-field-list-input-item-id';

/**
 * Cast schema for the DataFieldListInputItem model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const dataFieldListInputItem = core.cast.identity<DataFieldListInputItem>();

export type DataFieldListInputItem =
  | DataFieldListInputItemMnemonic
  | DataFieldListInputItemCleanName
  | DataFieldListInputItemId;

export const dataFieldListInputItemResponse = core.cast.identity<DataFieldListInputItem>();

export const dataFieldListInputItemRequest = core.cast.identity<DataFieldListInputItem>();
