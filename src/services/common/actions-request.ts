import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import { ActionsRequestType, actionsRequestType } from '../requests/models/actions-request-type';
import { RequestFrequency, requestFrequency } from './request-frequency';
import {
  TerminalIdentity,
  terminalIdentity,
  terminalIdentityRequest,
  terminalIdentityResponse,
} from './terminal-identity';
import {
  ActionsFilter,
  actionsFilter,
  actionsFilterRequest,
  actionsFilterResponse,
} from './actions-filter';
import {
  ActionsRuntimeOptions,
  actionsRuntimeOptions,
  actionsRuntimeOptionsRequest,
  actionsRuntimeOptionsResponse,
} from './actions-runtime-options';
import {
  ActionsRequestFormatting,
  actionsRequestFormatting,
  actionsRequestFormattingRequest,
  actionsRequestFormattingResponse,
} from '../requests/models/actions-request-formatting';
import { BaseRequest, baseRequest, baseRequestRequest, baseRequestResponse } from './base-request';
import { Id } from './id';
import { RequestUserSuppliedName } from './request-user-supplied-name';
import { RequestIdentifier } from './request-identifier';
import { Title } from './title';
import { Description } from './description';
import { Issued } from './issued';
import { Modified } from './modified';
import { LastRunDateTime } from './last-run-date-time';
import { NextRunDateTime } from './next-run-date-time';
import { Enabled } from './enabled';
import { AssociatedDataset } from './associated-dataset';

export interface ActionsRequest extends BaseRequest {
  /** JSON-LD type */
  _type: 'ActionsRequest';
  /** Cannot be an empty object. */
  actionsFilter?: ActionsFilter | undefined;
  /** If not provided, an `ActionsRequest` will search for actions recorded by Bloomberg in the current day, using EDST Timezone to define date boundaries.

Alternatively, you can set date criteria to extend your corporate actions request.


Optionally specify `dateRange` either as an `ActionsDurationDateRange` (the default) or an `IntervalDateRange`. If not provided, `dateRange` will default to an `ActionsDurationDateRange` with 0 `days`.

- An `ActionsDurationDateRange` requests actions entered or effective between zero and seven EDST days in the past. This is suitable for use with any trigger, including a recurring request defined using a `ScheduledTrigger`.

- An `IntervalDateRange` requests actions with a `startDate` up to seven days in the past and an `endDate` up to two years into the future. This is suitable for a request that is scheduled to run once either using a `SubmitTrigger` or a `ScheduledTrigger` with a `frequency` of \"once\".


Specify how the `dateRange` will be applied:

- Request corporate actions recorded by Bloomberg up to seven days prior to the request execution date by setting `actionsDate` to the default value of \"entry\".

- Request corporate actions that will become effective up to two years in the future by setting `actionsDate` to \"effective\".

- Request corporate actions that are entered or effective within the date range by setting `actionsDate` to \"both\".
 */
  runtimeOptions?: ActionsRuntimeOptions | undefined;
  formatting?: ActionsRequestFormatting | undefined;
}

export namespace ActionsRequest {
  export type _Type = ActionsRequestType;
  export type Formatting = ActionsRequestFormatting;
}

/**
 * Cast schema for the ActionsRequest model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const actionsRequest = core.cast.identity<ActionsRequest>();

/**
 * Cast schema for mapping API responses to the ActionsRequest application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const actionsRequestResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@id',
      '@type',
      'name',
      'identifier',
      'title',
      'frequency',
      'description',
      'universe',
      'trigger',
      'terminalIdentity',
      'issued',
      'modified',
      'lastRunDateTime',
      'nextRunDateTime',
      'enabled',
      'dataset',
      'actionsFilter',
      'runtimeOptions',
      'formatting',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@context':
        raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      name: raw['name'],
      identifier: raw['identifier'],
      title: raw['title'],
      frequency: raw['frequency'],
      description: raw['description'],
      universe: raw['universe'],
      trigger: raw['trigger'],
      terminalIdentity: raw['terminalIdentity'],
      issued: raw['issued'],
      modified: raw['modified'],
      lastRunDateTime: raw['lastRunDateTime'],
      nextRunDateTime: raw['nextRunDateTime'],
      enabled: raw['enabled'],
      dataset: raw['dataset'],
      actionsFilter:
        raw['actionsFilter'] == null
          ? raw['actionsFilter']
          : actionsFilterResponse.parse(raw['actionsFilter']),
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : actionsRuntimeOptionsResponse.parse(raw['runtimeOptions']),
      formatting: raw['formatting'],
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'identifier',
    'title',
    'frequency',
    'universe',
    'trigger',
    'issued',
    'modified',
    'dataset',
  ],
);

/**
 * Cast schema for mapping the ActionsRequest application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const actionsRequestRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      name: raw['name'],
      identifier: raw['identifier'],
      title: raw['title'],
      frequency: raw['frequency'],
      description: raw['description'],
      universe: raw['universe'],
      trigger: raw['trigger'],
      terminalIdentity: raw['terminalIdentity'],
      issued: raw['issued'],
      modified: raw['modified'],
      lastRunDateTime: raw['lastRunDateTime'],
      nextRunDateTime: raw['nextRunDateTime'],
      enabled: raw['enabled'],
      dataset: raw['dataset'],
      actionsFilter:
        raw['actionsFilter'] == null
          ? raw['actionsFilter']
          : actionsFilterRequest.parse(raw['actionsFilter']),
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : actionsRuntimeOptionsRequest.parse(raw['runtimeOptions']),
      formatting: raw['formatting'],
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'identifier',
    'title',
    'frequency',
    'universe',
    'trigger',
    'issued',
    'modified',
    'dataset',
  ],
);
