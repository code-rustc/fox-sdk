import * as core from '../../../core';

export interface NoticeProductsItem {
  /** Main products */
  mainProduct?: string | undefined;
  /** Granular variations of main products */
  subProduct?: string | undefined;
}

/**
 * Cast schema for the NoticeProductsItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const noticeProductsItem = core.cast.identity<NoticeProductsItem>();

/**
 * Cast schema for mapping API responses to the NoticeProductsItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const noticeProductsItemResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['mainProduct', 'subProduct']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return { ...__extras, mainProduct: raw['mainProduct'], subProduct: raw['subProduct'] };
}, []);

/**
 * Cast schema for mapping the NoticeProductsItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const noticeProductsItemRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return { mainProduct: raw['mainProduct'], subProduct: raw['subProduct'] };
}, []);
