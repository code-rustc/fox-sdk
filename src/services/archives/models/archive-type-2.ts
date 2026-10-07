import * as core from '../../../core';

export const ArchiveType2 = {
  Archives: 'Archives',
} as const;

export type ArchiveType2 = (typeof ArchiveType2)[keyof typeof ArchiveType2];

export const archiveType2 = core.cast.identity<ArchiveType2>();
