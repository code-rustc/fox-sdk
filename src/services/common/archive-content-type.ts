import * as core from '../../core';

export const ArchiveContentType = {
  Parquet: 'parquet',
} as const;

export type ArchiveContentType = (typeof ArchiveContentType)[keyof typeof ArchiveContentType];

export const archiveContentType = core.cast.identity<ArchiveContentType>();
