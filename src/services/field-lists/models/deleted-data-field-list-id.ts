import * as core from '../../../core';

export const DeletedDataFieldListId = {
  Empty: '',
} as const;

export type DeletedDataFieldListId =
  (typeof DeletedDataFieldListId)[keyof typeof DeletedDataFieldListId];

export const deletedDataFieldListId = core.cast.identity<DeletedDataFieldListId>();
