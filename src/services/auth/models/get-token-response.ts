import * as core from '../../../core';

export interface GetTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

/**
 * Cast schema for the GetTokenResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const getTokenResponse = core.cast.identity<GetTokenResponse>();

/**
 * Cast schema for mapping API responses to the GetTokenResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const getTokenResponseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['access_token', 'token_type', 'expires_in']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      access_token: raw['access_token'],
      token_type: raw['token_type'],
      expires_in: raw['expires_in'],
    };
  },
  ['access_token', 'token_type', 'expires_in'],
);

/**
 * Cast schema for mapping the GetTokenResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const getTokenResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      access_token: raw['access_token'],
      token_type: raw['token_type'],
      expires_in: raw['expires_in'],
    };
  },
  ['access_token', 'token_type', 'expires_in'],
);
