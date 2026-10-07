import * as core from '../../core';
import { UniverseInputItemType, universeInputItemType } from './universe-input-item-type';
import { SecId, secId } from './sec-id';
import {
  FieldOverrideInput,
  fieldOverrideInput,
  fieldOverrideInputRequest,
  fieldOverrideInputResponse,
} from './field-override-input';
import { FieldOverridesInput } from './field-overrides-input';

/**
 * An input identifier for a financial instrument.
 */
export interface UniverseInputItem {
  '@type': UniverseInputItemType;
  /** The type of identifier for a financial instrument.

Note: `BB_COMPANY` and `LEGAL_ENTITY_IDENTIFIER` are only supported by `EntityRequest`.
 */
  identifierType: SecId;
  /** The identifier for the financial instrument. */
  identifierValue: string;
  /** List of field overrides.

If duplicate overrides are supplied, it is the value of the last such duplicate that will be applied when the request is processed.

Note that field overrides are not supported by all request types. Please refer to [this table](#tag/Requests/operation/postRequest) for details.
 */
  fieldOverrides?: FieldOverridesInput | undefined;
}

/**
 * Cast schema for the UniverseInputItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const universeInputItem = core.cast.identity<UniverseInputItem>();

/**
 * Cast schema for mapping API responses to the UniverseInputItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const universeInputItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      'identifierType',
      'identifierValue',
      'fieldOverrides',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      identifierType: raw['identifierType'],
      identifierValue: raw['identifierValue'],
      fieldOverrides: Array.isArray(raw['fieldOverrides'])
        ? (raw['fieldOverrides'] as any[]).map((v: any) =>
            v == null ? v : fieldOverrideInputResponse.parse(v),
          )
        : (raw['fieldOverrides'] as any),
    };
  },
  ['@type', 'identifierType', 'identifierValue'],
);

/**
 * Cast schema for mapping the UniverseInputItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const universeInputItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      identifierType: raw['identifierType'],
      identifierValue: raw['identifierValue'],
      fieldOverrides: Array.isArray(raw['fieldOverrides'])
        ? (raw['fieldOverrides'] as any[]).map((v: any) =>
            v == null ? v : fieldOverrideInputRequest.parse(v),
          )
        : (raw['fieldOverrides'] as any),
    };
  },
  ['@type', 'identifierType', 'identifierValue'],
);
