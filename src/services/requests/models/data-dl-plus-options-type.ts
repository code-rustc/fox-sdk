import * as core from '../../../core';

export const DataDlPlusOptionsType = {
  DataDlPlus: 'DataDlPlus',
} as const;

export type DataDlPlusOptionsType =
  (typeof DataDlPlusOptionsType)[keyof typeof DataDlPlusOptionsType];

export const dataDlPlusOptionsType = core.cast.identity<DataDlPlusOptionsType>();
