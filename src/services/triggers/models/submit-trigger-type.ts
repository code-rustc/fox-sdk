import * as core from '../../../core';

export const SubmitTriggerType = {
  SubmitTrigger: 'SubmitTrigger',
} as const;

export type SubmitTriggerType = (typeof SubmitTriggerType)[keyof typeof SubmitTriggerType];

export const submitTriggerType = core.cast.identity<SubmitTriggerType>();
