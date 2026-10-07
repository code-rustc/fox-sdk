import * as core from '../../core';

export const Region = {
  Amer: 'AMER',
  Apac: 'APAC',
  Emea: 'EMEA',
} as const;

export type Region = (typeof Region)[keyof typeof Region];

export const region = core.cast.identity<Region>();
