import * as core from '../../core';

export const DataFieldListType = {
  DataFieldList: 'DataFieldList',
} as const;

export type DataFieldListType = (typeof DataFieldListType)[keyof typeof DataFieldListType];

export const dataFieldListType = core.cast.identity<DataFieldListType>();
