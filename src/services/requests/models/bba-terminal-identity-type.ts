import * as core from '../../../core';

export const BbaTerminalIdentityType = {
  BbaTerminalIdentity: 'BbaTerminalIdentity',
} as const;

export type BbaTerminalIdentityType =
  (typeof BbaTerminalIdentityType)[keyof typeof BbaTerminalIdentityType];

export const bbaTerminalIdentityType = core.cast.identity<BbaTerminalIdentityType>();
