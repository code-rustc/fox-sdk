import * as core from '../../../core';

export const MediaTypeType = {
  MediaType: 'MediaType',
} as const;

export type MediaTypeType = (typeof MediaTypeType)[keyof typeof MediaTypeType];

export const mediaTypeType = core.cast.identity<MediaTypeType>();
