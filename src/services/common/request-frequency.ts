import * as core from '../../core';

export const RequestFrequency = {
  Adhoc: 'adhoc',
  Once: 'once',
  Daily: 'daily',
  Weekday: 'weekday',
  Weekend: 'weekend',
  Weekly: 'weekly',
  Monthly: 'monthly',
} as const;

export type RequestFrequency = (typeof RequestFrequency)[keyof typeof RequestFrequency];

export const requestFrequency = core.cast.identity<RequestFrequency>();
