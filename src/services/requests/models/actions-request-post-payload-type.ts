import * as core from '../../../core';

export const ActionsRequestPostPayloadType = {
  ActionsRequest: 'ActionsRequest',
} as const;

export type ActionsRequestPostPayloadType =
  (typeof ActionsRequestPostPayloadType)[keyof typeof ActionsRequestPostPayloadType];

export const actionsRequestPostPayloadType = core.cast.identity<ActionsRequestPostPayloadType>();
