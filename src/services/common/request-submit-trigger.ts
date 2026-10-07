import * as core from '../../core';
import {
  RequestSubmitTriggerType,
  requestSubmitTriggerType,
} from '../triggers/models/request-submit-trigger-type';

/**
 * The POST payload required to create a new submit trigger directly within a request.
 */
export interface RequestSubmitTrigger {
  /** Run the request upon request submission. */
  _type: 'SubmitTrigger';
}

export namespace RequestSubmitTrigger {
  export type _Type = RequestSubmitTriggerType;
}

/**
 * Cast schema for the RequestSubmitTrigger model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestSubmitTrigger = core.cast.identity<RequestSubmitTrigger>();

/**
 * Cast schema for mapping API responses to the RequestSubmitTrigger application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestSubmitTriggerResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, '@type': raw['@type'] };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the RequestSubmitTrigger application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestSubmitTriggerRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'] };
  },
  ['@type'],
);
