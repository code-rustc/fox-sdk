import * as core from '../../../core';
import {
  GetContentSseResponseEvent,
  getContentSseResponseEvent,
} from './get-content-sse-response-event';

/**
 * Event notification object for content endpoints.
 */
export interface GetContentSseResponse {
  /** A unique identifier for this specific event */
  id: string;
  /** An identifier for the event type */
  event: GetContentSseResponseEvent;
  /** The event payload. */
  data: Record<string, unknown>;
}

export namespace GetContentSseResponse {
  export type Event = GetContentSseResponseEvent;
}

/**
 * Cast schema for the GetContentSseResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const getContentSseResponse = core.cast.identity<GetContentSseResponse>();

/**
 * Cast schema for mapping API responses to the GetContentSseResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const getContentSseResponseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['id', 'event', 'data']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, id: raw['id'], event: raw['event'], data: raw['data'] };
  },
  ['id', 'event', 'data'],
);

/**
 * Cast schema for mapping the GetContentSseResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const getContentSseResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { id: raw['id'], event: raw['event'], data: raw['data'] };
  },
  ['id', 'event', 'data'],
);
