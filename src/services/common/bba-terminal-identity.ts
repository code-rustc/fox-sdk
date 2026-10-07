import * as core from '../../core';
import {
  BbaTerminalIdentityType,
  bbaTerminalIdentityType,
} from '../requests/models/bba-terminal-identity-type';
import { UserNumber } from './user-number';

export interface BbaTerminalIdentity {
  /** A BBA (Bloomberg Anywhere) user account. */
  _type: 'BbaTerminalIdentity';
  /** Denotes user number of the terminal identity. Users can locate this number by running {IAM&lt;GO&gt;} on the BLOOMBERG PROFESSIONAL service. */
  userNumber: UserNumber;
}

export namespace BbaTerminalIdentity {
  export type _Type = BbaTerminalIdentityType;
}

/**
 * Cast schema for the BbaTerminalIdentity model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bbaTerminalIdentity = core.cast.identity<BbaTerminalIdentity>();

/**
 * Cast schema for mapping API responses to the BbaTerminalIdentity application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bbaTerminalIdentityResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'userNumber']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'], userNumber: raw['userNumber'] };
  },
  ['@type', 'userNumber'],
);

/**
 * Cast schema for mapping the BbaTerminalIdentity application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bbaTerminalIdentityRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], userNumber: raw['userNumber'] };
  },
  ['@type', 'userNumber'],
);
