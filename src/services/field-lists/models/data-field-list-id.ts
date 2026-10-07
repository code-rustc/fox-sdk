import * as core from '../../../core';

export const DataFieldListId = {
  Empty: '',
} as const;

export type DataFieldListId = (typeof DataFieldListId)[keyof typeof DataFieldListId];

export const dataFieldListId = core.cast.identity<DataFieldListId>();
