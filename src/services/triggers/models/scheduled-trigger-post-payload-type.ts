import * as core from '../../../core';

export const ScheduledTriggerPostPayloadType = {
  ScheduledTrigger: 'ScheduledTrigger',
} as const;

export type ScheduledTriggerPostPayloadType =
  (typeof ScheduledTriggerPostPayloadType)[keyof typeof ScheduledTriggerPostPayloadType];

export const scheduledTriggerPostPayloadType =
  core.cast.identity<ScheduledTriggerPostPayloadType>();
