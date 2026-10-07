import * as core from '../../../core';

export const ScheduledTriggerType = {
  ScheduledTrigger: 'ScheduledTrigger',
} as const;

export type ScheduledTriggerType = (typeof ScheduledTriggerType)[keyof typeof ScheduledTriggerType];

export const scheduledTriggerType = core.cast.identity<ScheduledTriggerType>();
