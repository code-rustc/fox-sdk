import * as core from '../../core';

/**
 * Member item of content
 */
export interface ContentMember {
  /** Key for the downloadable output file. */
  key: string;
  /** Headers for the output file. */
  headers: Record<string, unknown>;
  /** Metadata for the output file. */
  metadata: Record<string, unknown>;
}

/**
 * Cast schema for the ContentMember model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const contentMember = core.cast.identity<ContentMember>();

/**
 * Cast schema for mapping API responses to the ContentMember application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const contentMemberResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['key', 'headers', 'metadata']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, key: raw['key'], headers: raw['headers'], metadata: raw['metadata'] };
  },
  ['key', 'headers', 'metadata'],
);

/**
 * Cast schema for mapping the ContentMember application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const contentMemberRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { key: raw['key'], headers: raw['headers'], metadata: raw['metadata'] };
  },
  ['key', 'headers', 'metadata'],
);
