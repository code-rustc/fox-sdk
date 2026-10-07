import * as core from '../../core';
import {
  ActionsRuntimeOptionsType,
  actionsRuntimeOptionsType,
} from '../requests/models/actions-runtime-options-type';
import {
  ActionsRuntimeOptionsDateRange,
  actionsRuntimeOptionsDateRange,
  actionsRuntimeOptionsDateRangeRequest,
  actionsRuntimeOptionsDateRangeResponse,
} from '../requests/models/actions-runtime-options-date-range';
import {
  ActionsRuntimeOptionsActionsDate,
  actionsRuntimeOptionsActionsDate,
} from '../requests/models/actions-runtime-options-actions-date';

/**
 * If not provided, an `ActionsRequest` will search for actions recorded by Bloomberg in the current day, using EDST Timezone to define date boundaries.

Alternatively, you can set date criteria to extend your corporate actions request.


Optionally specify `dateRange` either as an `ActionsDurationDateRange` (the default) or an `IntervalDateRange`. If not provided, `dateRange` will default to an `ActionsDurationDateRange` with 0 `days`.

- An `ActionsDurationDateRange` requests actions entered or effective between zero and seven EDST days in the past. This is suitable for use with any trigger, including a recurring request defined using a `ScheduledTrigger`.

- An `IntervalDateRange` requests actions with a `startDate` up to seven days in the past and an `endDate` up to two years into the future. This is suitable for a request that is scheduled to run once either using a `SubmitTrigger` or a `ScheduledTrigger` with a `frequency` of \"once\".


Specify how the `dateRange` will be applied:

- Request corporate actions recorded by Bloomberg up to seven days prior to the request execution date by setting `actionsDate` to the default value of \"entry\".

- Request corporate actions that will become effective up to two years in the future by setting `actionsDate` to \"effective\".

- Request corporate actions that are entered or effective within the date range by setting `actionsDate` to \"both\".

 */
export interface ActionsRuntimeOptions {
  /** JSON-LD type */
  '@type': ActionsRuntimeOptionsType;
  /** This property specifies the date range across which the request will search for corporate actions. Any `ActionsRequest` that references a recurring `ScheduledTrigger` (where the frequency is "daily" "weekday" "weekend" "weekly" or "monthly") may only specify a `ActionsDurationDateRange`, ensuring the date range remains relative to each execution of the request. An `ActionsRequest` that references a trigger which will only execute once (a `ScheduledTrigger` with a frequency of "once" or a `SubmitTrigger`) can also specify a date range using literal dates using an `IntervalDateRange`. If this property is not supplied, the range will default to an `ActionsDurationDateRange` with 0 `days`. */
  dateRange?: ActionsRuntimeOptionsDateRange | undefined;
  /** Apply the specified dateRange to the date the action was recorded by Bloomberg (`entry`), the date as of which the action is effective (`effective`) or either (`both`). */
  actionsDate?: ActionsRuntimeOptionsActionsDate | undefined;
}

export namespace ActionsRuntimeOptions {
  export type _Type = ActionsRuntimeOptionsType;
  export type DateRange = ActionsRuntimeOptionsDateRange;
  export type ActionsDate = ActionsRuntimeOptionsActionsDate;
}

/**
 * Cast schema for the ActionsRuntimeOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const actionsRuntimeOptions = core.cast.identity<ActionsRuntimeOptions>();

/**
 * Cast schema for mapping API responses to the ActionsRuntimeOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const actionsRuntimeOptionsResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['@type', 'dateRange', 'actionsDate']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@type': raw['@type'],
      dateRange: raw['dateRange'],
      actionsDate: raw['actionsDate'],
    };
  },
  ['@type'],
);

/**
 * Cast schema for mapping the ActionsRuntimeOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const actionsRuntimeOptionsRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { '@type': raw['@type'], dateRange: raw['dateRange'], actionsDate: raw['actionsDate'] };
  },
  ['@type'],
);
