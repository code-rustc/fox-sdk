import * as core from '../../core';

export const TriggerFrequency = {
  Once: 'once',
  Daily: 'daily',
  Weekday: 'weekday',
  Weekend: 'weekend',
  Weekly: 'weekly',
  Monthly: 'monthly',
} as const;

export type TriggerFrequency = (typeof TriggerFrequency)[keyof typeof TriggerFrequency];

export const triggerFrequency = core.cast.identity<TriggerFrequency>();
