import * as core from '../../../core';

export const DeletedHistoryFieldListId = {
  Empty: '',
} as const;

export type DeletedHistoryFieldListId =
  (typeof DeletedHistoryFieldListId)[keyof typeof DeletedHistoryFieldListId];

export const deletedHistoryFieldListId = core.cast.identity<DeletedHistoryFieldListId>();
