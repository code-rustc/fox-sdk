import * as core from '../../core';
import {
  FundamentalsOptionsType,
  fundamentalsOptionsType,
} from '../requests/models/fundamentals-options-type';
import {
  FundamentalsOptionsDateType,
  fundamentalsOptionsDateType,
} from '../requests/models/fundamentals-options-date-type';
import {
  FundamentalsOptionsFaAdjustmentType,
  fundamentalsOptionsFaAdjustmentType,
} from '../requests/models/fundamentals-options-fa-adjustment-type';
import {
  FundamentalsOptionsPeriodType,
  fundamentalsOptionsPeriodType,
} from '../requests/models/fundamentals-options-period-type';

/**
 * Fundamentals options specific to history data requests.
 */
export interface FundamentalsOptions {
  /** JSON-LD type */
  '@type': FundamentalsOptionsType;
  /** Allows you to request either the date at which the company actually reported the value for the corresponding field (i.e., `reported`) or the end date for the period in which they reported it (i.e., `periodEnd`).
   */
  dateType?: FundamentalsOptionsDateType | undefined;
  /** Allows you to request either Bloomberg Enhanced Fundamentals (`adjusted`) or Generally Accepted Accounting Principles (`GAAP`) data.

Bloomberg Enhanced Fundamentals: Since and including fiscal year 2009, Bloomberg data experts analyzed the financial reporting for all current and former members of the Russell 3000 to produce new, more detailed financial statements.

In addition, Bloomberg makes non-GAAP adjustments to the income statement to remove the impact of one-time and other abnormal charges.
 */
  faAdjustmentType?: FundamentalsOptionsFaAdjustmentType | undefined;
  /** The periodicity for the fundamental data you request.

The `primaryPeriodicity` is the primary periodicity the corresponding company uses to report financials. To identify the periodicity for a given company, see the value for the company's `primaryPeriodicity` field.
 */
  periodType?: FundamentalsOptionsPeriodType | undefined;
}

export namespace FundamentalsOptions {
  export type _Type = FundamentalsOptionsType;
  export type DateType = FundamentalsOptionsDateType;
  export type FaAdjustmentType = FundamentalsOptionsFaAdjustmentType;
  export type PeriodType = FundamentalsOptionsPeriodType;
}

/**
 * Cast schema for the FundamentalsOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fundamentalsOptions = core.cast.identity<FundamentalsOptions>();

/**
 * Cast schema for mapping API responses to the FundamentalsOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fundamentalsOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'dateType', 'faAdjustmentType', 'periodType']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      dateType: raw['dateType'],
      faAdjustmentType: raw['faAdjustmentType'],
      periodType: raw['periodType'],
    };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the FundamentalsOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fundamentalsOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      dateType: raw['dateType'],
      faAdjustmentType: raw['faAdjustmentType'],
      periodType: raw['periodType'],
    };
  },
  ['@type'],
);
