import * as core from '../../core';
import { DeletedOn } from './deleted-on';

export interface DeletedComponent {
  /** Date and time at which the component was archived */
  deletedOn: DeletedOn;
}

/**
 * Cast schema for the DeletedComponent model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const deletedComponent = core.cast.identity<DeletedComponent>();

/**
 * Cast schema for mapping API responses to the DeletedComponent application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const deletedComponentResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['deletedOn']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, deletedOn: raw['deletedOn'] };
  },
  ['deletedOn'],
);

/**
 * Cast schema for mapping the DeletedComponent application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const deletedComponentRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { deletedOn: raw['deletedOn'] };
  },
  ['deletedOn'],
);
