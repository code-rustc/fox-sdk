import * as core from '../../core';

export const ChangeDriver = {
  Bloomberg: 'BLOOMBERG',
  Contributor: 'CONTRIBUTOR',
  Exchange: 'EXCHANGE',
  Regulator: 'REGULATOR',
} as const;

export type ChangeDriver = (typeof ChangeDriver)[keyof typeof ChangeDriver];

export const changeDriver = core.cast.identity<ChangeDriver>();
