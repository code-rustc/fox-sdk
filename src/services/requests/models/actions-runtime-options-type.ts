import * as core from '../../../core';

export const ActionsRuntimeOptionsType = {
  ActionsRuntimeOptions: 'ActionsRuntimeOptions',
} as const;

export type ActionsRuntimeOptionsType =
  (typeof ActionsRuntimeOptionsType)[keyof typeof ActionsRuntimeOptionsType];

export const actionsRuntimeOptionsType = core.cast.identity<ActionsRuntimeOptionsType>();
