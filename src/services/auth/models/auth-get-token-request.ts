import * as core from '../../../core';
import {
  AuthGetTokenRequestGrantType,
  authGetTokenRequestGrantType,
} from './auth-get-token-request-grant-type';

export interface AuthGetTokenRequest {
  /** The client ID of the application */
  client_id: string;
  /** The client secret of the application */
  client_secret: string;
  grant_type: AuthGetTokenRequestGrantType;
}

export namespace AuthGetTokenRequest {
  export type GrantType = AuthGetTokenRequestGrantType;
}

/**
 * Cast schema for the AuthGetTokenRequest model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const authGetTokenRequest = core.cast.identity<AuthGetTokenRequest>();

/**
 * Cast schema for mapping API responses to the AuthGetTokenRequest application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const authGetTokenRequestResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['client_id', 'client_secret', 'grant_type']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      client_id: raw['client_id'],
      client_secret: raw['client_secret'],
      grant_type: raw['grant_type'],
    };
  },
  ['client_id', 'client_secret', 'grant_type'],
);

/**
 * Cast schema for mapping the AuthGetTokenRequest application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const authGetTokenRequestRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      client_id: raw['client_id'],
      client_secret: raw['client_secret'],
      grant_type: raw['grant_type'],
    };
  },
  ['client_id', 'client_secret', 'grant_type'],
);
