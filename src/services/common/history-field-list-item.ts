import * as core from '../../core';
import { Parameter, parameter, parameterRequest, parameterResponse } from './parameter';
import {
  FieldListItem,
  fieldListItem,
  fieldListItemRequest,
  fieldListItemResponse,
} from './field-list-item';
import { Id } from './id';
import { Identifier } from './identifier';
import { CleanName } from './clean-name';
import { Title } from './title';
import { DlCommercialModelCategory } from './dl-commercial-model-category';
import { LoadingSpeed } from './loading-speed';
import { XdmType } from './xdm-type';
import { Mnemonic } from './mnemonic';
import { FieldAlias } from './field-alias';
import { Parameters } from './parameters';

export interface HistoryFieldListItem extends FieldListItem {
  /** An optional alias used as the field name in the output. */
  alias?: FieldAlias | undefined;
  /** A list of parameter values for a field list input item. */
  parameters?: Parameters | undefined;
}

/**
 * Cast schema for the HistoryFieldListItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const historyFieldListItem = core.cast.identity<HistoryFieldListItem>();

/**
 * Cast schema for mapping API responses to the HistoryFieldListItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const historyFieldListItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@id',
      'identifier',
      'cleanName',
      'title',
      'dlCommercialModelCategory',
      'loadingSpeed',
      'type',
      'mnemonic',
      'alias',
      'parameters',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@id': raw['@id'],
      identifier: raw['identifier'],
      cleanName: raw['cleanName'],
      title: raw['title'],
      dlCommercialModelCategory: raw['dlCommercialModelCategory'],
      loadingSpeed: raw['loadingSpeed'],
      type: raw['type'],
      mnemonic: raw['mnemonic'],
      alias: raw['alias'],
      parameters: Array.isArray(raw['parameters'])
        ? (raw['parameters'] as any[]).map((v: any) => (v == null ? v : parameterResponse.parse(v)))
        : (raw['parameters'] as any),
    };
  },
  ['@id', 'identifier', 'cleanName', 'title', 'dlCommercialModelCategory', 'type', 'mnemonic'],
);

/**
 * Cast schema for mapping the HistoryFieldListItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const historyFieldListItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@id': raw['@id'],
      identifier: raw['identifier'],
      cleanName: raw['cleanName'],
      title: raw['title'],
      dlCommercialModelCategory: raw['dlCommercialModelCategory'],
      loadingSpeed: raw['loadingSpeed'],
      type: raw['type'],
      mnemonic: raw['mnemonic'],
      alias: raw['alias'],
      parameters: Array.isArray(raw['parameters'])
        ? (raw['parameters'] as any[]).map((v: any) => (v == null ? v : parameterRequest.parse(v)))
        : (raw['parameters'] as any),
    };
  },
  ['@id', 'identifier', 'cleanName', 'title', 'dlCommercialModelCategory', 'type', 'mnemonic'],
);
