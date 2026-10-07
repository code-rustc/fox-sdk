import * as core from '../../../core';
import {
  TickHistoryOhlcRuntimeOptionsConditionCodesTemplate,
  tickHistoryOhlcRuntimeOptionsConditionCodesTemplate,
} from './tick-history-ohlc-runtime-options-condition-codes-template';

/**
 * Identify extraordinary trading and quoting circumstances that correspond to orders on a given exchange, so you can precisely measure tick data with the most relevant volume metrics.

For more on the available codes and their descriptions: [data.bloomberg.com > Bulk Datasets > Metadata - Condition Code - descriptive data](https://data.bloomberg.com/catalogs/bbg/datasets/conditionCode/snapshots/latest/distributions/#condition_code.out).

 */
export interface TickHistoryOhlcRuntimeOptionsConditionCodes {
  /** The group of condition codes used to calculate the corresponding open, high, low, and closing price. Bloomberg provides templates, designed to focus on the most relevant order codes for pricing data and reduce noise. The templates are based on the codes used in Bloomberg product offerings:

|Template Source                                            |Source Environment    |Enumeration Value|
|-----------------------------------------------------------|----------------------|-----------------|
|The `Price and Volume Dashboard` (VWAP &lt;GO&gt;) function|Bloomberg Terminal®   |`VWAP`           |
|`Bloomberg Market Data Feed` (B-PIPE)                      |Bloomberg API (BLPAPI)|`BPIPE`          |

You can also use all order codes (i.e., `allCodes`) or construct your own custom set of order codes starting with an empty list (i.e., `noCodes`).
 */
  template: TickHistoryOhlcRuntimeOptionsConditionCodesTemplate;
  /** Valid `addCodes` arrays depend on the corresponding template:

|Template         |Notes                                                                                                                            |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------|
|`allCodes`       |`addCodes` is not valid because `allCodes` already includes all available codes.                                                 |
|`noCodes`        |`addCodes` must include at least one value to define the starting point for a custom template.                                   |
|`VWAP` or `BPIPE`|`addCodes` is optional and allows you to add your specified condition codes to the base condition codes in the selected template.|

`removeCodes` supersedes `addCodes`. If a tick has any code on the `removeCodes` list, that tick will _not_ appear in the output OHLC bar.

For more on the available codes and their descriptions: [data.bloomberg.com > Bulk Datasets > Metadata - Condition Code - descriptive data](https://data.bloomberg.com/catalogs/bbg/datasets/conditionCode/snapshots/latest/distributions/#condition_code.out).
 */
  addCodes?: string[] | undefined;
  /** Allows you to remove the specified condition codes from the base condition codes in the selected template.

For more on the available codes and their descriptions: [data.bloomberg.com > Bulk Datasets > Metadata - Condition Code - descriptive data](https://data.bloomberg.com/catalogs/bbg/datasets/conditionCode/snapshots/latest/distributions/#condition_code.out).
 */
  removeCodes?: string[] | undefined;
}

export namespace TickHistoryOhlcRuntimeOptionsConditionCodes {
  export type Template = TickHistoryOhlcRuntimeOptionsConditionCodesTemplate;
}

/**
 * Cast schema for the TickHistoryOhlcRuntimeOptionsConditionCodes model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const tickHistoryOhlcRuntimeOptionsConditionCodes =
  core.cast.identity<TickHistoryOhlcRuntimeOptionsConditionCodes>();

/**
 * Cast schema for mapping API responses to the TickHistoryOhlcRuntimeOptionsConditionCodes application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const tickHistoryOhlcRuntimeOptionsConditionCodesResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['template', 'addCodes', 'removeCodes']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      template: raw['template'],
      addCodes: raw['addCodes'],
      removeCodes: raw['removeCodes'],
    };
  },
  ['template'],
);

/**
 * Cast schema for mapping the TickHistoryOhlcRuntimeOptionsConditionCodes application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const tickHistoryOhlcRuntimeOptionsConditionCodesRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      template: raw['template'],
      addCodes: raw['addCodes'],
      removeCodes: raw['removeCodes'],
    };
  },
  ['template'],
);
