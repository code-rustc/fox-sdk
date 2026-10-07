import * as core from '../../core';

export const RequestExecutionStatus = {
  Scheduled: 'scheduled',
  InProgress: 'inProgress',
  Complete: 'complete',
  Cancelling: 'cancelling',
  Cancelled: 'cancelled',
  Failed: 'failed',
} as const;

export type RequestExecutionStatus =
  (typeof RequestExecutionStatus)[keyof typeof RequestExecutionStatus];

export const requestExecutionStatus = core.cast.identity<RequestExecutionStatus>();
