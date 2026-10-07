import * as core from '../../core';

export const TickHistoryOutputMediaType = {
  ApplicationXTarArchiveMediaTypeGzipCsv: 'application/x-tar;archive-media-type=gzip-csv',
  ApplicationXTarArchiveMediaTypeParquet: 'application/x-tar;archive-media-type=parquet',
  ApplicationZipArchiveMediaTypeGzipCsv: 'application/zip;archive-media-type=gzip-csv',
  ApplicationZipArchiveMediaTypeParquet: 'application/zip;archive-media-type=parquet',
} as const;

export type TickHistoryOutputMediaType =
  (typeof TickHistoryOutputMediaType)[keyof typeof TickHistoryOutputMediaType];

export const tickHistoryOutputMediaType = core.cast.identity<TickHistoryOutputMediaType>();
