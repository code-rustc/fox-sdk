import * as core from '../../../core';

export const ActionsRuntimeOptionsActionsDate = {
  Both: 'both',
  Effective: 'effective',
  Entry: 'entry',
} as const;

export type ActionsRuntimeOptionsActionsDate =
  (typeof ActionsRuntimeOptionsActionsDate)[keyof typeof ActionsRuntimeOptionsActionsDate];

export const actionsRuntimeOptionsActionsDate =
  core.cast.identity<ActionsRuntimeOptionsActionsDate>();
