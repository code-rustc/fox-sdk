import * as core from '../../core';
import {
  BlpTerminalIdentityType,
  blpTerminalIdentityType,
} from '../requests/models/blp-terminal-identity-type';
import { UserNumber } from './user-number';
import { SerialNumber } from './serial-number';
import { WorkStation } from './work-station';

export interface BlpTerminalIdentity {
  /** A BLP (Bloomberg Professional) user account. */
  _type: 'BlpTerminalIdentity';
  /** Denotes user number of the terminal identity. Users can locate this number by running {IAM&lt;GO&gt;} on the BLOOMBERG PROFESSIONAL service. */
  userNumber: UserNumber;
  /** Denotes serial number of the terminal identity. Users can locate this number by running {IAM&lt;GO&gt;} on the BLOOMBERG PROFESSIONAL service and using the number to the left of the hyphen within `S/N`.

Required if `workStation` is specified.
 */
  serialNumber?: SerialNumber | undefined;
  /** Denotes work station number of the terminal identity. Users can locate this number by running {IAM&lt;GO&gt;} on the BLOOMBERG PROFESSIONAL service and using the number to the right of the hyphen within `S/N`.

Optional if `serialNumber` is specified.
 */
  workStation?: WorkStation | undefined;
}

export namespace BlpTerminalIdentity {
  export type _Type = BlpTerminalIdentityType;
}

/**
 * Cast schema for the BlpTerminalIdentity model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const blpTerminalIdentity = core.cast.identity<BlpTerminalIdentity>();

/**
 * Cast schema for mapping API responses to the BlpTerminalIdentity application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const blpTerminalIdentityResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'userNumber', 'serialNumber', 'workStation']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      userNumber: raw['userNumber'],
      serialNumber: raw['serialNumber'],
      workStation: raw['workStation'],
    };
  },
  ['@type', 'userNumber'],
);

/**
 * Cast schema for mapping the BlpTerminalIdentity application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const blpTerminalIdentityRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      userNumber: raw['userNumber'],
      serialNumber: raw['serialNumber'],
      workStation: raw['workStation'],
    };
  },
  ['@type', 'userNumber'],
);
