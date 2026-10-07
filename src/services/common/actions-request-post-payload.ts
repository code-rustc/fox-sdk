import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  ActionsRequestPostPayloadType,
  actionsRequestPostPayloadType,
} from '../requests/models/actions-request-post-payload-type';
import {
  ActionsRequestPostPayloadUniverse,
  actionsRequestPostPayloadUniverse,
  actionsRequestPostPayloadUniverseRequest,
  actionsRequestPostPayloadUniverseResponse,
} from '../requests/models/actions-request-post-payload-universe';
import {
  ActionsFilter,
  actionsFilter,
  actionsFilterRequest,
  actionsFilterResponse,
} from './actions-filter';
import {
  ActionsRequestPostPayloadTrigger,
  actionsRequestPostPayloadTrigger,
  actionsRequestPostPayloadTriggerRequest,
  actionsRequestPostPayloadTriggerResponse,
} from '../requests/models/actions-request-post-payload-trigger';
import {
  ActionsRuntimeOptions,
  actionsRuntimeOptions,
  actionsRuntimeOptionsRequest,
  actionsRuntimeOptionsResponse,
} from './actions-runtime-options';
import {
  ActionsRequestPostPayloadFormatting,
  actionsRequestPostPayloadFormatting,
  actionsRequestPostPayloadFormattingRequest,
  actionsRequestPostPayloadFormattingResponse,
} from '../requests/models/actions-request-post-payload-formatting';
import {
  TerminalIdentity,
  terminalIdentity,
  terminalIdentityRequest,
  terminalIdentityResponse,
} from './terminal-identity';
import { RequestUserSuppliedName } from './request-user-supplied-name';
import { RequestIdentifier } from './request-identifier';
import { RequestTitle } from './request-title';
import { Description } from './description';

export interface ActionsRequestPostPayload {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** JSON-LD type */
  _type: 'ActionsRequest';
  /** The name of the request to create custom dataset. If you do not provide a `title`, you must provide a `name`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  name?: RequestUserSuppliedName | undefined;
  /** The unique identifier for the request. If not supplied, one will be generated on the user's behalf. For more: [Handling ID Limitations](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4749&entityType=document#advanced_concepts-handling_id_limitations). */
  identifier?: RequestIdentifier | undefined;
  /** Title of the request to create custom dataset. If you do not provide a `name`, you must provide a `title`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  title?: RequestTitle | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  universe: ActionsRequestPostPayloadUniverse;
  /** Cannot be an empty object. */
  actionsFilter?: ActionsFilter | undefined;
  trigger: ActionsRequestPostPayloadTrigger;
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
  formatting?: ActionsRequestPostPayloadFormatting | undefined;
  /** Clients whose firms subscribe to the BLOOMBERG PROFESSIONAL service have the option of linking their data license account to their BLOOMBERG terminal to take advantage of personal defaults (for example a contributor pricing source). Linking your Data License requests to a Bloomberg Terminal that has been cancelled or moved may impact data in the response. Users should to be aware of any changes to the linked Bloomberg Terminals at all times. If a Bloomberg terminal becomes cancelled users should remove any links to it from their Data License requests immediately.
   */
  terminalIdentity?: TerminalIdentity | undefined;
}

export namespace ActionsRequestPostPayload {
  export type _Type = ActionsRequestPostPayloadType;
  export type Universe = ActionsRequestPostPayloadUniverse;
  export type Trigger = ActionsRequestPostPayloadTrigger;
  export type Formatting = ActionsRequestPostPayloadFormatting;
}

/**
 * Cast schema for the ActionsRequestPostPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const actionsRequestPostPayload = core.cast.identity<ActionsRequestPostPayload>();

/**
 * Cast schema for mapping API responses to the ActionsRequestPostPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const actionsRequestPostPayloadResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@type',
      'name',
      'identifier',
      'title',
      'description',
      'universe',
      'actionsFilter',
      'trigger',
      'runtimeOptions',
      'formatting',
      'terminalIdentity',
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
      '@type': raw['@type'],
      name: raw['name'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      universe: raw['universe'],
      actionsFilter:
        raw['actionsFilter'] == null
          ? raw['actionsFilter']
          : actionsFilterResponse.parse(raw['actionsFilter']),
      trigger: raw['trigger'],
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : actionsRuntimeOptionsResponse.parse(raw['runtimeOptions']),
      formatting: raw['formatting'],
      terminalIdentity: raw['terminalIdentity'],
    };
  },
  ['@type', 'universe', 'trigger'],
);

/**
 * Cast schema for mapping the ActionsRequestPostPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const actionsRequestPostPayloadRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@type': raw['@type'],
      name: raw['name'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      universe: raw['universe'],
      actionsFilter:
        raw['actionsFilter'] == null
          ? raw['actionsFilter']
          : actionsFilterRequest.parse(raw['actionsFilter']),
      trigger: raw['trigger'],
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : actionsRuntimeOptionsRequest.parse(raw['runtimeOptions']),
      formatting: raw['formatting'],
      terminalIdentity: raw['terminalIdentity'],
    };
  },
  ['@type', 'universe', 'trigger'],
);
