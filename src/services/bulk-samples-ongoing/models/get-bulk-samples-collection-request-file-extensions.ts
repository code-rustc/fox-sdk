import * as core from '../../../core';

export const GetBulkSamplesCollectionRequestFileExtensions = {
  Cax: 'cax',
  Csv: 'csv',
  Dif: 'dif',
  Dlt: 'dlt',
  Epx: 'epx',
  Hpc: 'hpc',
  Out: 'out',
  Parquet: 'parquet',
  Px: 'px',
  Rpx: 'rpx',
  Trr: 'trr',
} as const;

export type GetBulkSamplesCollectionRequestFileExtensions =
  (typeof GetBulkSamplesCollectionRequestFileExtensions)[keyof typeof GetBulkSamplesCollectionRequestFileExtensions];

export const getBulkSamplesCollectionRequestFileExtensions =
  core.cast.identity<GetBulkSamplesCollectionRequestFileExtensions>();
