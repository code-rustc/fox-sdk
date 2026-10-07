import * as core from '../../core';

export const ErrorSourceLocation = {
  Body: 'body',
  Query: 'query',
} as const;

export type ErrorSourceLocation = (typeof ErrorSourceLocation)[keyof typeof ErrorSourceLocation];

export const errorSourceLocation = core.cast.identity<ErrorSourceLocation>();
