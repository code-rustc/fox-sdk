import * as core from '../../core';
import {
  BbaTerminalIdentity as _BbaTerminalIdentity,
  bbaTerminalIdentity,
  bbaTerminalIdentityRequest,
  bbaTerminalIdentityResponse,
} from './bba-terminal-identity';
import {
  BlpTerminalIdentity as _BlpTerminalIdentity,
  blpTerminalIdentity,
  blpTerminalIdentityRequest,
  blpTerminalIdentityResponse,
} from './blp-terminal-identity';

/**
 * Cast schema for the TerminalIdentity model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const terminalIdentity = core.cast.identity<TerminalIdentity>();

/**
 * Clients whose firms subscribe to the BLOOMBERG PROFESSIONAL service have the option of linking their data license account to their BLOOMBERG terminal to take advantage of personal defaults (for example a contributor pricing source). Linking your Data License requests to a Bloomberg Terminal that has been cancelled or moved may impact data in the response. Users should to be aware of any changes to the linked Bloomberg Terminals at all times. If a Bloomberg terminal becomes cancelled users should remove any links to it from their Data License requests immediately.

 */
export type TerminalIdentity =
  | TerminalIdentity.BbaTerminalIdentity
  | TerminalIdentity.BlpTerminalIdentity;

export namespace TerminalIdentity {
  export interface BbaTerminalIdentity extends _BbaTerminalIdentity {
    _type: 'BbaTerminalIdentity';
  }
  export interface BlpTerminalIdentity extends _BlpTerminalIdentity {
    _type: 'BlpTerminalIdentity';
  }
}

export const terminalIdentityResponse = core.cast.identity<TerminalIdentity>();

export const terminalIdentityRequest = core.cast.identity<TerminalIdentity>();
