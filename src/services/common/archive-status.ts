import * as core from '../../core';

export const ArchiveStatus = {
  Final: 'final',
  Current: 'current',
  Ongoing: 'ongoing',
} as const;

export type ArchiveStatus = (typeof ArchiveStatus)[keyof typeof ArchiveStatus];

export const archiveStatus = core.cast.identity<ArchiveStatus>();
