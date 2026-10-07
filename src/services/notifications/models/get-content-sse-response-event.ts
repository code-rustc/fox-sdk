import * as core from '../../../core';

export const GetContentSseResponseEvent = {
  ContentDelivered: 'ContentDelivered',
} as const;

export type GetContentSseResponseEvent =
  (typeof GetContentSseResponseEvent)[keyof typeof GetContentSseResponseEvent];

export const getContentSseResponseEvent = core.cast.identity<GetContentSseResponseEvent>();
