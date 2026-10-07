import * as core from '../../../core';

export const MediaTypeOnlyJsonType = {
  MediaType: 'MediaType',
} as const;

export type MediaTypeOnlyJsonType =
  (typeof MediaTypeOnlyJsonType)[keyof typeof MediaTypeOnlyJsonType];

export const mediaTypeOnlyJsonType = core.cast.identity<MediaTypeOnlyJsonType>();
