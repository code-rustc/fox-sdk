import * as core from '../../../core';

export const ActionsFormatType = {
  ActionsFormat: 'ActionsFormat',
} as const;

export type ActionsFormatType = (typeof ActionsFormatType)[keyof typeof ActionsFormatType];

export const actionsFormatType = core.cast.identity<ActionsFormatType>();
