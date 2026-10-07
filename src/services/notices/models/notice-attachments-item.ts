import * as core from '../../../core';

export interface NoticeAttachmentsItem {
  /** Key is used to download the file from `/notices/{noticeId}/attachments/{attachmentKey}` */
  key?: string | undefined;
  /** Name of the file */
  name?: string | undefined;
}

/**
 * Cast schema for the NoticeAttachmentsItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const noticeAttachmentsItem = core.cast.identity<NoticeAttachmentsItem>();

/**
 * Cast schema for mapping API responses to the NoticeAttachmentsItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const noticeAttachmentsItemResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['key', 'name']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return { ...__extras, key: raw['key'], name: raw['name'] };
}, []);

/**
 * Cast schema for mapping the NoticeAttachmentsItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const noticeAttachmentsItemRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return { key: raw['key'], name: raw['name'] };
}, []);
