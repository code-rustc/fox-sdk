import * as core from '../../../core';

export const ParameterType = {
  FieldParameter: 'FieldParameter',
} as const;

export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

export const parameterType = core.cast.identity<ParameterType>();
