import * as core from '../../../core';
import { Parameter, parameter, parameterRequest, parameterResponse } from '../../common/parameter';
import {
  FieldListInputItemId,
  fieldListInputItemId,
  fieldListInputItemIdRequest,
  fieldListInputItemIdResponse,
} from '../../common/field-list-input-item-id';
import { Id } from '../../common/id';
import { FieldAlias } from '../../common/field-alias';
import { Parameters } from '../../common/parameters';

export interface HistoryFieldListInputItemId extends FieldListInputItemId {
  /** An optional alias used as the field name in the output. */
  alias?: FieldAlias | undefined;
  /** A list of parameter values for a field list input item. */
  parameters?: Parameters | undefined;
}

/**
 * Cast schema for the HistoryFieldListInputItemId model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const historyFieldListInputItemId = core.cast.identity<HistoryFieldListInputItemId>();

/**
 * Cast schema for mapping API responses to the HistoryFieldListInputItemId application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const historyFieldListInputItemIdResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@id', 'alias', 'parameters']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@id': raw['@id'],
      alias: raw['alias'],
      parameters: Array.isArray(raw['parameters'])
        ? (raw['parameters'] as any[]).map((v: any) => (v == null ? v : parameterResponse.parse(v)))
        : (raw['parameters'] as any),
    };
  },
  ['@id'],
);

/**
 * Cast schema for mapping the HistoryFieldListInputItemId application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const historyFieldListInputItemIdRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@id': raw['@id'],
      alias: raw['alias'],
      parameters: Array.isArray(raw['parameters'])
        ? (raw['parameters'] as any[]).map((v: any) => (v == null ? v : parameterRequest.parse(v)))
        : (raw['parameters'] as any),
    };
  },
  ['@id'],
);
