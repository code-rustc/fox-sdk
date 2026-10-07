import * as core from '../../../core';

export const RequestSubmitTriggerType = {
  SubmitTrigger: 'SubmitTrigger',
} as const;

export type RequestSubmitTriggerType =
  (typeof RequestSubmitTriggerType)[keyof typeof RequestSubmitTriggerType];

export const requestSubmitTriggerType = core.cast.identity<RequestSubmitTriggerType>();
