import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  HistoryRequestPostPayloadType,
  historyRequestPostPayloadType,
} from '../requests/models/history-request-post-payload-type';
import {
  HistoryRequestPostPayloadUniverse,
  historyRequestPostPayloadUniverse,
  historyRequestPostPayloadUniverseRequest,
  historyRequestPostPayloadUniverseResponse,
} from '../requests/models/history-request-post-payload-universe';
import {
  HistoryRequestPostPayloadFieldList,
  historyRequestPostPayloadFieldList,
  historyRequestPostPayloadFieldListRequest,
  historyRequestPostPayloadFieldListResponse,
} from '../requests/models/history-request-post-payload-field-list';
import {
  HistoryRequestPostPayloadTrigger,
  historyRequestPostPayloadTrigger,
  historyRequestPostPayloadTriggerRequest,
  historyRequestPostPayloadTriggerResponse,
} from '../requests/models/history-request-post-payload-trigger';
import {
  TerminalIdentity,
  terminalIdentity,
  terminalIdentityRequest,
  terminalIdentityResponse,
} from './terminal-identity';
import {
  HistoryRuntimeOptions,
  historyRuntimeOptions,
  historyRuntimeOptionsRequest,
  historyRuntimeOptionsResponse,
} from './history-runtime-options';
import {
  HistoryRequestPostPayloadFormatting,
  historyRequestPostPayloadFormatting,
  historyRequestPostPayloadFormattingRequest,
  historyRequestPostPayloadFormattingResponse,
} from '../requests/models/history-request-post-payload-formatting';
import {
  HistoryPricingSourceOptions,
  historyPricingSourceOptions,
  historyPricingSourceOptionsRequest,
  historyPricingSourceOptionsResponse,
} from './history-pricing-source-options';
import {
  FundamentalsOptions,
  fundamentalsOptions,
  fundamentalsOptionsRequest,
  fundamentalsOptionsResponse,
} from './fundamentals-options';
import { RequestUserSuppliedName } from './request-user-supplied-name';
import { RequestIdentifier } from './request-identifier';
import { RequestTitle } from './request-title';
import { Description } from './description';

/**
 * The POST payload required to create a new request. This has a subset of properties of HistoryRequest.
 */
export interface HistoryRequestPostPayload {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** JSON-LD type */
  _type: 'HistoryRequest';
  /** The name of the request to create custom dataset. If you do not provide a `title`, you must provide a `name`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  name?: RequestUserSuppliedName | undefined;
  /** The unique identifier for the request. If not supplied, one will be generated on the user's behalf. For more: [Handling ID Limitations](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4749&entityType=document#advanced_concepts-handling_id_limitations). */
  identifier?: RequestIdentifier | undefined;
  /** Title of the request to create custom dataset. If you do not provide a `name`, you must provide a `title`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  title?: RequestTitle | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  universe: HistoryRequestPostPayloadUniverse;
  fieldList: HistoryRequestPostPayloadFieldList;
  trigger: HistoryRequestPostPayloadTrigger;
  /** Clients whose firms subscribe to the BLOOMBERG PROFESSIONAL service have the option of linking their data license account to their BLOOMBERG terminal to take advantage of personal defaults (for example a contributor pricing source). Linking your Data License requests to a Bloomberg Terminal that has been cancelled or moved may impact data in the response. Users should to be aware of any changes to the linked Bloomberg Terminals at all times. If a Bloomberg terminal becomes cancelled users should remove any links to it from their Data License requests immediately.
   */
  terminalIdentity?: TerminalIdentity | undefined;
  /** Options specific to history data requests. */
  runtimeOptions?: HistoryRuntimeOptions | undefined;
  formatting?: HistoryRequestPostPayloadFormatting | undefined;
  pricingSourceOptions?: HistoryPricingSourceOptions | undefined;
  /** Fundamentals options specific to history data requests. */
  fundamentalsOptions?: FundamentalsOptions | undefined;
}

export namespace HistoryRequestPostPayload {
  export type _Type = HistoryRequestPostPayloadType;
  export type Universe = HistoryRequestPostPayloadUniverse;
  export type FieldList = HistoryRequestPostPayloadFieldList;
  export type Trigger = HistoryRequestPostPayloadTrigger;
  export type Formatting = HistoryRequestPostPayloadFormatting;
}

/**
 * Cast schema for the HistoryRequestPostPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const historyRequestPostPayload = core.cast.identity<HistoryRequestPostPayload>();

/**
 * Cast schema for mapping API responses to the HistoryRequestPostPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const historyRequestPostPayloadResponse = core.cast.object(
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
      'fieldList',
      'trigger',
      'terminalIdentity',
      'runtimeOptions',
      'formatting',
      'pricingSourceOptions',
      'fundamentalsOptions',
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
      fieldList: raw['fieldList'],
      trigger: raw['trigger'],
      terminalIdentity: raw['terminalIdentity'],
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : historyRuntimeOptionsResponse.parse(raw['runtimeOptions']),
      formatting: raw['formatting'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : historyPricingSourceOptionsResponse.parse(raw['pricingSourceOptions']),
      fundamentalsOptions:
        raw['fundamentalsOptions'] == null
          ? raw['fundamentalsOptions']
          : fundamentalsOptionsResponse.parse(raw['fundamentalsOptions']),
    };
  },
  ['@type', 'universe', 'fieldList', 'trigger'],
);

/**
 * Cast schema for mapping the HistoryRequestPostPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const historyRequestPostPayloadRequest = core.cast.object(
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
      fieldList: raw['fieldList'],
      trigger: raw['trigger'],
      terminalIdentity: raw['terminalIdentity'],
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : historyRuntimeOptionsRequest.parse(raw['runtimeOptions']),
      formatting: raw['formatting'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : historyPricingSourceOptionsRequest.parse(raw['pricingSourceOptions']),
      fundamentalsOptions:
        raw['fundamentalsOptions'] == null
          ? raw['fundamentalsOptions']
          : fundamentalsOptionsRequest.parse(raw['fundamentalsOptions']),
    };
  },
  ['@type', 'universe', 'fieldList', 'trigger'],
);
