import * as core from '../../../core';

export const MediaTypeOnlyJsonOutputMediaType = {
  ApplicationJson: 'application/json',
} as const;

export type MediaTypeOnlyJsonOutputMediaType =
  (typeof MediaTypeOnlyJsonOutputMediaType)[keyof typeof MediaTypeOnlyJsonOutputMediaType];

export const mediaTypeOnlyJsonOutputMediaType =
  core.cast.identity<MediaTypeOnlyJsonOutputMediaType>();
