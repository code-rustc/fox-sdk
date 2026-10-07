import * as core from '../../../core';

export const DeletedScheduledTriggerType = {
  ScheduledTrigger: 'ScheduledTrigger',
} as const;

export type DeletedScheduledTriggerType =
  (typeof DeletedScheduledTriggerType)[keyof typeof DeletedScheduledTriggerType];

export const deletedScheduledTriggerType = core.cast.identity<DeletedScheduledTriggerType>();
