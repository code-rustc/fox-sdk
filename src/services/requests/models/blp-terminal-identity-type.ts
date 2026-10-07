import * as core from '../../../core';

export const BlpTerminalIdentityType = {
  BlpTerminalIdentity: 'BlpTerminalIdentity',
} as const;

export type BlpTerminalIdentityType =
  (typeof BlpTerminalIdentityType)[keyof typeof BlpTerminalIdentityType];

export const blpTerminalIdentityType = core.cast.identity<BlpTerminalIdentityType>();
