import * as core from '../../../core';

export const DataRequestPostPayloadType = {
  DataRequest: 'DataRequest',
} as const;

export type DataRequestPostPayloadType =
  (typeof DataRequestPostPayloadType)[keyof typeof DataRequestPostPayloadType];

export const dataRequestPostPayloadType = core.cast.identity<DataRequestPostPayloadType>();
