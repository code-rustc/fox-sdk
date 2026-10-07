import * as core from '../../../core';

export const GetBulkCollectionRequestFileExtensions = {
  Avro: 'avro',
  Cax: 'cax',
  Csv: 'csv',
  Dif: 'dif',
  Dlt: 'dlt',
  Epx: 'epx',
  Hdc: 'hdc',
  Hpc: 'hpc',
  Hpx: 'hpx',
  Json: 'json',
  Out: 'out',
  Parquet: 'parquet',
  Px: 'px',
  Rpx: 'rpx',
  Trr: 'trr',
  Ttl: 'ttl',
  Xlsx: 'xlsx',
} as const;

export type GetBulkCollectionRequestFileExtensions =
  (typeof GetBulkCollectionRequestFileExtensions)[keyof typeof GetBulkCollectionRequestFileExtensions];

export const getBulkCollectionRequestFileExtensions =
  core.cast.identity<GetBulkCollectionRequestFileExtensions>();
