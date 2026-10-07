import * as core from '../../../core';

export const AuthGetTokenRequestGrantType = {
  ClientCredentials: 'client_credentials',
} as const;

export type AuthGetTokenRequestGrantType =
  (typeof AuthGetTokenRequestGrantType)[keyof typeof AuthGetTokenRequestGrantType];

export const authGetTokenRequestGrantType = core.cast.identity<AuthGetTokenRequestGrantType>();
