import * as core from '../../../core';

export const DataDlOptionsType = {
  DataDl: 'DataDl',
} as const;

export type DataDlOptionsType = (typeof DataDlOptionsType)[keyof typeof DataDlOptionsType];

export const dataDlOptionsType = core.cast.identity<DataDlOptionsType>();
