import * as core from '../../../core';

export const SubmitTriggerPostPayloadType = {
  SubmitTrigger: 'SubmitTrigger',
} as const;

export type SubmitTriggerPostPayloadType =
  (typeof SubmitTriggerPostPayloadType)[keyof typeof SubmitTriggerPostPayloadType];

export const submitTriggerPostPayloadType = core.cast.identity<SubmitTriggerPostPayloadType>();
