import * as core from '../../core';
import {
  PartialNotice,
  partialNotice,
  partialNoticeRequest,
  partialNoticeResponse,
} from './partial-notice';
import {
  NoticesPageView,
  noticesPageView,
  noticesPageViewRequest,
  noticesPageViewResponse,
} from './notices-page-view';

/**
 * List of notices
 */
export interface Notices {
  contains?: PartialNotice[] | undefined;
  /** Current notices list pagination information */
  view?: NoticesPageView | undefined;
}

/**
 * Cast schema for the Notices model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const notices = core.cast.identity<Notices>();

/**
 * Cast schema for mapping API responses to the Notices application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const noticesResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['contains', 'view']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return {
    ...__extras,
    contains: Array.isArray(raw['contains'])
      ? (raw['contains'] as any[]).map((v: any) => (v == null ? v : partialNoticeResponse.parse(v)))
      : (raw['contains'] as any),
    view: raw['view'] == null ? raw['view'] : noticesPageViewResponse.parse(raw['view']),
  };
}, []);

/**
 * Cast schema for mapping the Notices application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const noticesRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    contains: Array.isArray(raw['contains'])
      ? (raw['contains'] as any[]).map((v: any) => (v == null ? v : partialNoticeRequest.parse(v)))
      : (raw['contains'] as any),
    view: raw['view'] == null ? raw['view'] : noticesPageViewRequest.parse(raw['view']),
  };
}, []);
