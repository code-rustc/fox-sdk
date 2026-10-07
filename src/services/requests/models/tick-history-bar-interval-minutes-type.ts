import * as core from '../../../core';

export const TickHistoryBarIntervalMinutesType = {
  Minutes: 'minutes',
} as const;

export type TickHistoryBarIntervalMinutesType =
  (typeof TickHistoryBarIntervalMinutesType)[keyof typeof TickHistoryBarIntervalMinutesType];

export const tickHistoryBarIntervalMinutesType =
  core.cast.identity<TickHistoryBarIntervalMinutesType>();
