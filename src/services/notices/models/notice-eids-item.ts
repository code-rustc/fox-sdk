import * as core from '../../../core';

export interface NoticeEidsItem {
  /** Impacted EID */
  impacted?: string | undefined;
  /** New EID */
  new?: string | undefined;
}

/**
 * Cast schema for the NoticeEidsItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const noticeEidsItem = core.cast.identity<NoticeEidsItem>();

/**
 * Cast schema for mapping API responses to the NoticeEidsItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const noticeEidsItemResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['impacted', 'new']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return { ...__extras, impacted: raw['impacted'], new: raw['new'] };
}, []);

/**
 * Cast schema for mapping the NoticeEidsItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const noticeEidsItemRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return { impacted: raw['impacted'], new: raw['new'] };
}, []);
