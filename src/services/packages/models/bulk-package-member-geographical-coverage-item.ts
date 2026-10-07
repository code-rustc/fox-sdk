import * as core from '../../../core';
import {
  BulkPackageMemberGeographicalCoverageItemRegion,
  bulkPackageMemberGeographicalCoverageItemRegion,
} from './bulk-package-member-geographical-coverage-item-region';
import {
  BulkPackageMemberGeographicalCoverageItemCountriesItem,
  bulkPackageMemberGeographicalCoverageItemCountriesItem,
  bulkPackageMemberGeographicalCoverageItemCountriesItemRequest,
  bulkPackageMemberGeographicalCoverageItemCountriesItemResponse,
} from './bulk-package-member-geographical-coverage-item-countries-item';
import {
  BulkPackageMemberGeographicalCoverageItemExchangesItem,
  bulkPackageMemberGeographicalCoverageItemExchangesItem,
  bulkPackageMemberGeographicalCoverageItemExchangesItemRequest,
  bulkPackageMemberGeographicalCoverageItemExchangesItemResponse,
} from './bulk-package-member-geographical-coverage-item-exchanges-item';
import { BulkPackageMemberGeographicalCoverageItemCountries } from '../../common/bulk-package-member-geographical-coverage-item-countries';
import { BulkPackageMemberGeographicalCoverageItemExchanges } from '../../common/bulk-package-member-geographical-coverage-item-exchanges';

export interface BulkPackageMemberGeographicalCoverageItem {
  /** Region covered. */
  region: BulkPackageMemberGeographicalCoverageItemRegion;
  /** The full name of all countries covered within this region. */
  countries: BulkPackageMemberGeographicalCoverageItemCountriesItem[];
  /** Exchanges covered within this region. */
  exchanges?: BulkPackageMemberGeographicalCoverageItemExchangesItem[] | undefined;
}

export namespace BulkPackageMemberGeographicalCoverageItem {
  export type Region = BulkPackageMemberGeographicalCoverageItemRegion;
  export type Countries = BulkPackageMemberGeographicalCoverageItemCountries;
  export type Exchanges = BulkPackageMemberGeographicalCoverageItemExchanges;
}

/**
 * Cast schema for the BulkPackageMemberGeographicalCoverageItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageMemberGeographicalCoverageItem =
  core.cast.identity<BulkPackageMemberGeographicalCoverageItem>();

/**
 * Cast schema for mapping API responses to the BulkPackageMemberGeographicalCoverageItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageMemberGeographicalCoverageItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['region', 'countries', 'exchanges']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      region: raw['region'],
      countries: Array.isArray(raw['countries'])
        ? (raw['countries'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberGeographicalCoverageItemCountriesItemResponse.parse(v),
          )
        : (raw['countries'] as any),
      exchanges: Array.isArray(raw['exchanges'])
        ? (raw['exchanges'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberGeographicalCoverageItemExchangesItemResponse.parse(v),
          )
        : (raw['exchanges'] as any),
    };
  },
  ['region', 'countries'],
);

/**
 * Cast schema for mapping the BulkPackageMemberGeographicalCoverageItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageMemberGeographicalCoverageItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      region: raw['region'],
      countries: Array.isArray(raw['countries'])
        ? (raw['countries'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberGeographicalCoverageItemCountriesItemRequest.parse(v),
          )
        : (raw['countries'] as any),
      exchanges: Array.isArray(raw['exchanges'])
        ? (raw['exchanges'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberGeographicalCoverageItemExchangesItemRequest.parse(v),
          )
        : (raw['exchanges'] as any),
    };
  },
  ['region', 'countries'],
);
