import * as core from '../../core';

export const OutputFileType = {
  UnixFileType: 'unixFileType',
  WindowsFileType: 'windowsFileType',
} as const;

export type OutputFileType = (typeof OutputFileType)[keyof typeof OutputFileType];

export const outputFileType = core.cast.identity<OutputFileType>();
