import * as core from '../../../core';

/**
 * The effective date range
 */
export interface PartialNoticeEffectiveDate {
  /** Effective end date */
  end?: string | undefined;
  /** Effective start date */
  start?: string | undefined;
  /** Whether the notice is tentative */
  isTentative?: boolean | undefined;
}

/**
 * Cast schema for the PartialNoticeEffectiveDate model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const partialNoticeEffectiveDate = core.cast.identity<PartialNoticeEffectiveDate>();

/**
 * Cast schema for mapping API responses to the PartialNoticeEffectiveDate application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const partialNoticeEffectiveDateResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['end', 'start', 'isTentative']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return { ...__extras, end: raw['end'], start: raw['start'], isTentative: raw['isTentative'] };
}, []);

/**
 * Cast schema for mapping the PartialNoticeEffectiveDate application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const partialNoticeEffectiveDateRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return { end: raw['end'], start: raw['start'], isTentative: raw['isTentative'] };
}, []);
