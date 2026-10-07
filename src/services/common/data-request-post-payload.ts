import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  DataRequestPostPayloadType,
  dataRequestPostPayloadType,
} from '../requests/models/data-request-post-payload-type';
import {
  DataRequestPostPayloadUniverse,
  dataRequestPostPayloadUniverse,
  dataRequestPostPayloadUniverseRequest,
  dataRequestPostPayloadUniverseResponse,
} from '../requests/models/data-request-post-payload-universe';
import {
  DataRequestPostPayloadFieldList,
  dataRequestPostPayloadFieldList,
  dataRequestPostPayloadFieldListRequest,
  dataRequestPostPayloadFieldListResponse,
} from '../requests/models/data-request-post-payload-field-list';
import {
  DataRequestPostPayloadTrigger,
  dataRequestPostPayloadTrigger,
  dataRequestPostPayloadTriggerRequest,
  dataRequestPostPayloadTriggerResponse,
} from '../requests/models/data-request-post-payload-trigger';
import {
  TerminalIdentity,
  terminalIdentity,
  terminalIdentityRequest,
  terminalIdentityResponse,
} from './terminal-identity';
import {
  DataRequestPostPayloadFormatting,
  dataRequestPostPayloadFormatting,
  dataRequestPostPayloadFormattingRequest,
  dataRequestPostPayloadFormattingResponse,
} from '../requests/models/data-request-post-payload-formatting';
import {
  DataPricingSourceOptions,
  dataPricingSourceOptions,
  dataPricingSourceOptionsRequest,
  dataPricingSourceOptionsResponse,
} from './data-pricing-source-options';
import {
  DataDataSourceOptions,
  dataDataSourceOptions,
  dataDataSourceOptionsRequest,
  dataDataSourceOptionsResponse,
} from './data-data-source-options';
import {
  DataRuntimeOptions,
  dataRuntimeOptions,
  dataRuntimeOptionsRequest,
  dataRuntimeOptionsResponse,
} from './data-runtime-options';
import { RequestUserSuppliedName } from './request-user-supplied-name';
import { RequestIdentifier } from './request-identifier';
import { RequestTitle } from './request-title';
import { Description } from './description';

/**
 * The POST payload required to create a new request. This has a subset of properties of DataRequest.
 */
export interface DataRequestPostPayload {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** JSON-LD type */
  _type: 'DataRequest';
  /** The name of the request to create custom dataset. If you do not provide a `title`, you must provide a `name`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  name?: RequestUserSuppliedName | undefined;
  /** The unique identifier for the request. If not supplied, one will be generated on the user's behalf. For more: [Handling ID Limitations](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4749&entityType=document#advanced_concepts-handling_id_limitations). */
  identifier?: RequestIdentifier | undefined;
  /** Title of the request to create custom dataset. If you do not provide a `name`, you must provide a `title`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  title?: RequestTitle | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  universe: DataRequestPostPayloadUniverse;
  fieldList: DataRequestPostPayloadFieldList;
  trigger: DataRequestPostPayloadTrigger;
  /** Clients whose firms subscribe to the BLOOMBERG PROFESSIONAL service have the option of linking their data license account to their BLOOMBERG terminal to take advantage of personal defaults (for example a contributor pricing source). Linking your Data License requests to a Bloomberg Terminal that has been cancelled or moved may impact data in the response. Users should to be aware of any changes to the linked Bloomberg Terminals at all times. If a Bloomberg terminal becomes cancelled users should remove any links to it from their Data License requests immediately.
   */
  terminalIdentity?: TerminalIdentity | undefined;
  formatting?: DataRequestPostPayloadFormatting | undefined;
  pricingSourceOptions?: DataPricingSourceOptions | undefined;
  /** Options specific to data requests for DL+ subscribers. */
  dataSourceOptions?: DataDataSourceOptions | undefined;
  /** Runtime options for data requests. */
  runtimeOptions?: DataRuntimeOptions | undefined;
}

export namespace DataRequestPostPayload {
  export type _Type = DataRequestPostPayloadType;
  export type Universe = DataRequestPostPayloadUniverse;
  export type FieldList = DataRequestPostPayloadFieldList;
  export type Trigger = DataRequestPostPayloadTrigger;
  export type Formatting = DataRequestPostPayloadFormatting;
}

/**
 * Cast schema for the DataRequestPostPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const dataRequestPostPayload = core.cast.identity<DataRequestPostPayload>();

/**
 * Cast schema for mapping API responses to the DataRequestPostPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const dataRequestPostPayloadResponse = core.cast.object(
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
      'formatting',
      'pricingSourceOptions',
      'dataSourceOptions',
      'runtimeOptions',
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
      formatting: raw['formatting'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : dataPricingSourceOptionsResponse.parse(raw['pricingSourceOptions']),
      dataSourceOptions: raw['dataSourceOptions'],
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : dataRuntimeOptionsResponse.parse(raw['runtimeOptions']),
    };
  },
  ['@type', 'universe', 'fieldList', 'trigger'],
);

/**
 * Cast schema for mapping the DataRequestPostPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const dataRequestPostPayloadRequest = core.cast.object(
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
      formatting: raw['formatting'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : dataPricingSourceOptionsRequest.parse(raw['pricingSourceOptions']),
      dataSourceOptions: raw['dataSourceOptions'],
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : dataRuntimeOptionsRequest.parse(raw['runtimeOptions']),
    };
  },
  ['@type', 'universe', 'fieldList', 'trigger'],
);
