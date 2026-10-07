import * as core from '../../../core';
import { Parameter, parameter, parameterRequest, parameterResponse } from '../../common/parameter';
import { DataFieldListType, dataFieldListType } from '../../common/data-field-list-type';
import { CleanName } from '../../common/clean-name';
import { FieldAlias } from '../../common/field-alias';
import { Parameters } from '../../common/parameters';

export interface DataFieldListInputItemCleanName {
  /** A valid XML and JSON name. */
  cleanName: CleanName;
  /** An optional alias used as the field name in the output. */
  alias?: FieldAlias | undefined;
  /** A list of parameter values for a field list input item. */
  parameters?: Parameters | undefined;
  /** JSON-LD type */
  '@type'?: DataFieldListType | undefined;
}

/**
 * Cast schema for the DataFieldListInputItemCleanName model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const dataFieldListInputItemCleanName =
  core.cast.identity<DataFieldListInputItemCleanName>();

/**
 * Cast schema for mapping API responses to the DataFieldListInputItemCleanName application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const dataFieldListInputItemCleanNameResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['cleanName', 'alias', 'parameters', '@type']);
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
      '@type': raw['@type'],
    };
  },
  ['cleanName'],
);

/**
 * Cast schema for mapping the DataFieldListInputItemCleanName application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const dataFieldListInputItemCleanNameRequest = core.cast.object(
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
      '@type': raw['@type'],
    };
  },
  ['cleanName'],
);
