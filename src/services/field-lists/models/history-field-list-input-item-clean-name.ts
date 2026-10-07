import * as core from '../../../core';
import { Parameter, parameter, parameterRequest, parameterResponse } from '../../common/parameter';
import {
  FieldListInputItemCleanName,
  fieldListInputItemCleanName,
  fieldListInputItemCleanNameRequest,
  fieldListInputItemCleanNameResponse,
} from '../../common/field-list-input-item-clean-name';
import { CleanName } from '../../common/clean-name';
import { FieldAlias } from '../../common/field-alias';
import { Parameters } from '../../common/parameters';

export interface HistoryFieldListInputItemCleanName extends FieldListInputItemCleanName {
  /** An optional alias used as the field name in the output. */
  alias?: FieldAlias | undefined;
  /** A list of parameter values for a field list input item. */
  parameters?: Parameters | undefined;
}

/**
 * Cast schema for the HistoryFieldListInputItemCleanName model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const historyFieldListInputItemCleanName =
  core.cast.identity<HistoryFieldListInputItemCleanName>();

/**
 * Cast schema for mapping API responses to the HistoryFieldListInputItemCleanName application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const historyFieldListInputItemCleanNameResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['cleanName', 'alias', 'parameters']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      cleanName: raw['cleanName'],
      alias: raw['alias'],
      parameters: Array.isArray(raw['parameters'])
        ? (raw['parameters'] as any[]).map((v: any) => (v == null ? v : parameterResponse.parse(v)))
        : (raw['parameters'] as any),
    };
  },
  ['cleanName'],
);

/**
 * Cast schema for mapping the HistoryFieldListInputItemCleanName application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const historyFieldListInputItemCleanNameRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      cleanName: raw['cleanName'],
      alias: raw['alias'],
      parameters: Array.isArray(raw['parameters'])
        ? (raw['parameters'] as any[]).map((v: any) => (v == null ? v : parameterRequest.parse(v)))
        : (raw['parameters'] as any),
    };
  },
  ['cleanName'],
);
