import * as core from '../../../core';

export const Type2 = {
  Universe: 'Universe',
} as const;

export type Type2 = (typeof Type2)[keyof typeof Type2];

export const type2 = core.cast.identity<Type2>();
