import * as core from '../../../core';

export interface NoticeExchangesItem {
  /** Impacted exchange */
  impacted?: string | undefined;
  /** New exchange */
  new?: string | undefined;
}

/**
 * Cast schema for the NoticeExchangesItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const noticeExchangesItem = core.cast.identity<NoticeExchangesItem>();

/**
 * Cast schema for mapping API responses to the NoticeExchangesItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const noticeExchangesItemResponse = core.cast.object((raw: any): any => {
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
 * Cast schema for mapping the NoticeExchangesItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const noticeExchangesItemRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return { impacted: raw['impacted'], new: raw['new'] };
}, []);
