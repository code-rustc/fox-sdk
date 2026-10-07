import * as core from '../../core';
import {
  TickHistoryRequestPostPayloadType,
  tickHistoryRequestPostPayloadType,
} from '../requests/models/tick-history-request-post-payload-type';
import {
  TickHistoryRequestPostPayloadUniverse,
  tickHistoryRequestPostPayloadUniverse,
  tickHistoryRequestPostPayloadUniverseRequest,
  tickHistoryRequestPostPayloadUniverseResponse,
} from '../requests/models/tick-history-request-post-payload-universe';
import {
  TickHistoryRequestPostPayloadTrigger,
  tickHistoryRequestPostPayloadTrigger,
  tickHistoryRequestPostPayloadTriggerRequest,
  tickHistoryRequestPostPayloadTriggerResponse,
} from '../requests/models/tick-history-request-post-payload-trigger';
import {
  TickHistoryMediaTypeFormat,
  tickHistoryMediaTypeFormat,
  tickHistoryMediaTypeFormatRequest,
  tickHistoryMediaTypeFormatResponse,
} from './tick-history-media-type-format';
import {
  TickHistoryPricingSourceOptions,
  tickHistoryPricingSourceOptions,
  tickHistoryPricingSourceOptionsRequest,
  tickHistoryPricingSourceOptionsResponse,
} from './tick-history-pricing-source-options';
import {
  TickHistoryRequestPostPayloadRuntimeOptions,
  tickHistoryRequestPostPayloadRuntimeOptions,
  tickHistoryRequestPostPayloadRuntimeOptionsRequest,
  tickHistoryRequestPostPayloadRuntimeOptionsResponse,
} from '../requests/models/tick-history-request-post-payload-runtime-options';
import { RequestUserSuppliedName } from './request-user-supplied-name';
import { RequestIdentifier } from './request-identifier';
import { RequestTitle } from './request-title';
import { Description } from './description';

export interface TickHistoryRequestPostPayload {
  /** JSON-LD type */
  _type: 'TickHistoryRequest';
  /** The name of the request to create custom dataset. If you do not provide a `title`, you must provide a `name`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  name?: RequestUserSuppliedName | undefined;
  /** The unique identifier for the request. If not supplied, one will be generated on the user's behalf. For more: [Handling ID Limitations](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4749&entityType=document#advanced_concepts-handling_id_limitations). */
  identifier?: RequestIdentifier | undefined;
  /** Title of the request to create custom dataset. If you do not provide a `name`, you must provide a `title`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  title?: RequestTitle | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  universe: TickHistoryRequestPostPayloadUniverse;
  trigger: TickHistoryRequestPostPayloadTrigger;
  /** Formatting options for the output Tick History distribution. */
  formatting: TickHistoryMediaTypeFormat;
  pricingSourceOptions?: TickHistoryPricingSourceOptions | undefined;
  runtimeOptions: TickHistoryRequestPostPayloadRuntimeOptions;
}

export namespace TickHistoryRequestPostPayload {
  export type _Type = TickHistoryRequestPostPayloadType;
  export type Universe = TickHistoryRequestPostPayloadUniverse;
  export type Trigger = TickHistoryRequestPostPayloadTrigger;
  export type RuntimeOptions = TickHistoryRequestPostPayloadRuntimeOptions;
}

/**
 * Cast schema for the TickHistoryRequestPostPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const tickHistoryRequestPostPayload = core.cast.identity<TickHistoryRequestPostPayload>();

/**
 * Cast schema for mapping API responses to the TickHistoryRequestPostPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const tickHistoryRequestPostPayloadResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@type',
      'name',
      'identifier',
      'title',
      'description',
      'universe',
      'trigger',
      'formatting',
      'pricingSourceOptions',
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
      '@type': raw['@type'],
      name: raw['name'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      universe: raw['universe'],
      trigger: raw['trigger'],
      formatting:
        raw['formatting'] == null
          ? raw['formatting']
          : tickHistoryMediaTypeFormatResponse.parse(raw['formatting']),
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : tickHistoryPricingSourceOptionsResponse.parse(raw['pricingSourceOptions']),
      runtimeOptions: raw['runtimeOptions'],
    };
  },
  ['@type', 'universe', 'trigger', 'formatting', 'runtimeOptions'],
);

/**
 * Cast schema for mapping the TickHistoryRequestPostPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const tickHistoryRequestPostPayloadRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@type': raw['@type'],
      name: raw['name'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      universe: raw['universe'],
      trigger: raw['trigger'],
      formatting:
        raw['formatting'] == null
          ? raw['formatting']
          : tickHistoryMediaTypeFormatRequest.parse(raw['formatting']),
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : tickHistoryPricingSourceOptionsRequest.parse(raw['pricingSourceOptions']),
      runtimeOptions: raw['runtimeOptions'],
    };
  },
  ['@type', 'universe', 'trigger', 'formatting', 'runtimeOptions'],
);
