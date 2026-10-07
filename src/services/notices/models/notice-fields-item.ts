import * as core from '../../../core';

export interface NoticeFieldsItem {
  /** Field identifier */
  id?: string | undefined;
  /** Field mnemonic */
  mnemonic?: string | undefined;
  /** Field name */
  name?: string | undefined;
}

/**
 * Cast schema for the NoticeFieldsItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const noticeFieldsItem = core.cast.identity<NoticeFieldsItem>();

/**
 * Cast schema for mapping API responses to the NoticeFieldsItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const noticeFieldsItemResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['id', 'mnemonic', 'name']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return { ...__extras, id: raw['id'], mnemonic: raw['mnemonic'], name: raw['name'] };
}, []);

/**
 * Cast schema for mapping the NoticeFieldsItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const noticeFieldsItemRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return { id: raw['id'], mnemonic: raw['mnemonic'], name: raw['name'] };
}, []);
