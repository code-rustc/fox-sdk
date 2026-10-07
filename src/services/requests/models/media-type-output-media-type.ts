import * as core from '../../../core';

export const MediaTypeOutputMediaType = {
  TextCsv: 'text/csv',
  ApplicationJson: 'application/json',
} as const;

export type MediaTypeOutputMediaType =
  (typeof MediaTypeOutputMediaType)[keyof typeof MediaTypeOutputMediaType];

export const mediaTypeOutputMediaType = core.cast.identity<MediaTypeOutputMediaType>();
