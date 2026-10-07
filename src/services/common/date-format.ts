import * as core from '../../core';

export const DateFormat = {
  Yyyymmdd: 'yyyymmdd',
  Ddmmyyyy: 'ddmmyyyy',
  Mmddyyyy: 'mmddyyyy',
} as const;

export type DateFormat = (typeof DateFormat)[keyof typeof DateFormat];

export const dateFormat = core.cast.identity<DateFormat>();
