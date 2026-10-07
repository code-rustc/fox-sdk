import * as core from '../../../core';

export const RequestScheduledTriggerType = {
  ScheduledTrigger: 'ScheduledTrigger',
} as const;

export type RequestScheduledTriggerType =
  (typeof RequestScheduledTriggerType)[keyof typeof RequestScheduledTriggerType];

export const requestScheduledTriggerType = core.cast.identity<RequestScheduledTriggerType>();
