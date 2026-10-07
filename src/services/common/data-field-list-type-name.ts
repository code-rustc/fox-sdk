import * as core from '../../core';

export const DataFieldListTypeName = {
  DataFieldList: 'DataFieldList',
} as const;

export type DataFieldListTypeName =
  (typeof DataFieldListTypeName)[keyof typeof DataFieldListTypeName];

export const dataFieldListTypeName = core.cast.identity<DataFieldListTypeName>();
