import * as core from '../../../core';

export const UniverseSummaryType = {
  Universe: 'Universe',
} as const;

export type UniverseSummaryType = (typeof UniverseSummaryType)[keyof typeof UniverseSummaryType];

export const universeSummaryType = core.cast.identity<UniverseSummaryType>();
