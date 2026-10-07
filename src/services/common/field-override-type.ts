import * as core from '../../core';

export const FieldOverrideType = {
  FieldOverride: 'FieldOverride',
} as const;

export type FieldOverrideType = (typeof FieldOverrideType)[keyof typeof FieldOverrideType];

export const fieldOverrideType = core.cast.identity<FieldOverrideType>();
