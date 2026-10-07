import * as core from '../../../core';

export const ActionsRequestType = {
  ActionsRequest: 'ActionsRequest',
} as const;

export type ActionsRequestType = (typeof ActionsRequestType)[keyof typeof ActionsRequestType];

export const actionsRequestType = core.cast.identity<ActionsRequestType>();
