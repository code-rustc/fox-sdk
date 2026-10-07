import * as core from '../../core';
import { Vocabulary } from './vocabulary';
import { BaseUrl } from './base-url';

/**
 * The JSON-LD context.
 */
export interface Context {
  /** The JSON-LD vocabulary. */
  '@vocab'?: Vocabulary | undefined;
  /** The base JSON-LD base URL. */
  '@base'?: BaseUrl | undefined;
}

/**
 * Cast schema for the Context model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const context = core.cast.identity<Context>();

/**
 * Cast schema for mapping API responses to the Context application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const contextResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['@vocab', '@base']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return { ...__extras, '@vocab': raw['@vocab'], '@base': raw['@base'] };
}, []);

/**
 * Cast schema for mapping the Context application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const contextRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return { '@vocab': raw['@vocab'], '@base': raw['@base'] };
}, []);
