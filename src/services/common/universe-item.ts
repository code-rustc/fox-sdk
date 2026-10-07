import * as core from '../../core';
import { UniverseItemType, universeItemType } from './universe-item-type';
import { SecId, secId } from './sec-id';
import {
  FieldOverride,
  fieldOverride,
  fieldOverrideRequest,
  fieldOverrideResponse,
} from './field-override';
import { FieldOverrides } from './field-overrides';
import { IgnoredFieldOverrides } from './ignored-field-overrides';

/**
 * An identifier for a financial instrument.
 */
export interface UniverseItem {
  '@type': UniverseItemType;
  /** The type of identifier for a financial instrument.

Note: `BB_COMPANY` and `LEGAL_ENTITY_IDENTIFIER` are only supported by `EntityRequest`.
 */
  identifierType: SecId;
  /** The identifier for the financial instrument. */
  identifierValue: string;
  /** The list of field overrides defined for this security. If `requestType` is provided, this list is restricted to those field overrides which are applicable to the request type. */
  fieldOverrides?: FieldOverrides | undefined;
  /** This only appears in the response if the request contains the optional `requestType` query parameter. It is the list of field overrides which are inapplicable to the request type provided. */
  ignoredFieldOverrides?: IgnoredFieldOverrides | undefined;
}

/**
 * Cast schema for the UniverseItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const universeItem = core.cast.identity<UniverseItem>();

/**
 * Cast schema for mapping API responses to the UniverseItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const universeItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      'identifierType',
      'identifierValue',
      'fieldOverrides',
      'ignoredFieldOverrides',
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
            v == null ? v : fieldOverrideResponse.parse(v),
          )
        : (raw['fieldOverrides'] as any),
      ignoredFieldOverrides: Array.isArray(raw['ignoredFieldOverrides'])
        ? (raw['ignoredFieldOverrides'] as any[]).map((v: any) =>
            v == null ? v : fieldOverrideResponse.parse(v),
          )
        : (raw['ignoredFieldOverrides'] as any),
    };
  },
  ['@type', 'identifierType', 'identifierValue'],
);

/**
 * Cast schema for mapping the UniverseItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const universeItemRequest = core.cast.object(
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
            v == null ? v : fieldOverrideRequest.parse(v),
          )
        : (raw['fieldOverrides'] as any),
      ignoredFieldOverrides: Array.isArray(raw['ignoredFieldOverrides'])
        ? (raw['ignoredFieldOverrides'] as any[]).map((v: any) =>
            v == null ? v : fieldOverrideRequest.parse(v),
          )
        : (raw['ignoredFieldOverrides'] as any),
    };
  },
  ['@type', 'identifierType', 'identifierValue'],
);
