import * as core from '../../core';
import { CleanName } from './clean-name';

export interface FieldListInputItemCleanName {
  /** A valid XML and JSON name. */
  cleanName: CleanName;
}

/**
 * Cast schema for the FieldListInputItemCleanName model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fieldListInputItemCleanName = core.cast.identity<FieldListInputItemCleanName>();

/**
 * Cast schema for mapping API responses to the FieldListInputItemCleanName application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldListInputItemCleanNameResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['cleanName']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, cleanName: raw['cleanName'] };
  },
  ['cleanName'],
);

/**
 * Cast schema for mapping the FieldListInputItemCleanName application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldListInputItemCleanNameRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { cleanName: raw['cleanName'] };
  },
  ['cleanName'],
);
