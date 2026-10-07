import * as core from '../../../core';

export const ArchivesItemType2 = {
  Archive: 'Archive',
} as const;

export type ArchivesItemType2 = (typeof ArchivesItemType2)[keyof typeof ArchivesItemType2];

export const archivesItemType2 = core.cast.identity<ArchivesItemType2>();
