import * as core from '../../../core';

export const DataRequestType = {
  DataRequest: 'DataRequest',
} as const;

export type DataRequestType = (typeof DataRequestType)[keyof typeof DataRequestType];

export const dataRequestType = core.cast.identity<DataRequestType>();
