import * as core from '../../../core';

export const DeletedSubmitTriggerType = {
  SubmitTrigger: 'SubmitTrigger',
} as const;

export type DeletedSubmitTriggerType =
  (typeof DeletedSubmitTriggerType)[keyof typeof DeletedSubmitTriggerType];

export const deletedSubmitTriggerType = core.cast.identity<DeletedSubmitTriggerType>();
