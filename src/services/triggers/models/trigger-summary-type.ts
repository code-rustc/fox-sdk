import * as core from '../../../core';

export const TriggerSummaryType = {
  SubmitTrigger: 'SubmitTrigger',
  ScheduledTrigger: 'ScheduledTrigger',
  BvalSnapshotTrigger: 'BvalSnapshotTrigger',
  PricingSnapshotTrigger: 'PricingSnapshotTrigger',
} as const;

export type TriggerSummaryType = (typeof TriggerSummaryType)[keyof typeof TriggerSummaryType];

export const triggerSummaryType = core.cast.identity<TriggerSummaryType>();
