import * as core from '../../core';
import {
  EntityRequestPostPayloadType,
  entityRequestPostPayloadType,
} from '../requests/models/entity-request-post-payload-type';
import {
  EntityRequestPostPayloadUniverse,
  entityRequestPostPayloadUniverse,
  entityRequestPostPayloadUniverseRequest,
  entityRequestPostPayloadUniverseResponse,
} from '../requests/models/entity-request-post-payload-universe';
import {
  EntityRequestPostPayloadFieldList,
  entityRequestPostPayloadFieldList,
  entityRequestPostPayloadFieldListRequest,
  entityRequestPostPayloadFieldListResponse,
} from '../requests/models/entity-request-post-payload-field-list';
import {
  EntityRequestPostPayloadTrigger,
  entityRequestPostPayloadTrigger,
  entityRequestPostPayloadTriggerRequest,
  entityRequestPostPayloadTriggerResponse,
} from '../requests/models/entity-request-post-payload-trigger';
import {
  EntityRequestPostPayloadFormatting,
  entityRequestPostPayloadFormatting,
  entityRequestPostPayloadFormattingRequest,
  entityRequestPostPayloadFormattingResponse,
} from '../requests/models/entity-request-post-payload-formatting';
import {
  EntityDataSourceOptions,
  entityDataSourceOptions,
  entityDataSourceOptionsRequest,
  entityDataSourceOptionsResponse,
} from './entity-data-source-options';
import { RequestUserSuppliedName } from './request-user-supplied-name';
import { RequestIdentifier } from './request-identifier';
import { RequestTitle } from './request-title';
import { Description } from './description';

export interface EntityRequestPostPayload {
  /** JSON-LD type */
  _type: 'EntityRequest';
  /** The name of the request to create custom dataset. If you do not provide a `title`, you must provide a `name`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  name?: RequestUserSuppliedName | undefined;
  /** The unique identifier for the request. If not supplied, one will be generated on the user's behalf. For more: [Handling ID Limitations](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4749&entityType=document#advanced_concepts-handling_id_limitations). */
  identifier?: RequestIdentifier | undefined;
  /** Title of the request to create custom dataset. If you do not provide a `name`, you must provide a `title`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  title?: RequestTitle | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  universe: EntityRequestPostPayloadUniverse;
  fieldList: EntityRequestPostPayloadFieldList;
  trigger: EntityRequestPostPayloadTrigger;
  formatting?: EntityRequestPostPayloadFormatting | undefined;
  /** Options specific to entity requests for DL+ subscribers. */
  dataSourceOptions?: EntityDataSourceOptions | undefined;
}

export namespace EntityRequestPostPayload {
  export type _Type = EntityRequestPostPayloadType;
  export type Universe = EntityRequestPostPayloadUniverse;
  export type FieldList = EntityRequestPostPayloadFieldList;
  export type Trigger = EntityRequestPostPayloadTrigger;
  export type Formatting = EntityRequestPostPayloadFormatting;
}

/**
 * Cast schema for the EntityRequestPostPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const entityRequestPostPayload = core.cast.identity<EntityRequestPostPayload>();

/**
 * Cast schema for mapping API responses to the EntityRequestPostPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const entityRequestPostPayloadResponse = core.cast.object(
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
      'fieldList',
      'trigger',
      'formatting',
      'dataSourceOptions',
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
      fieldList: raw['fieldList'],
      trigger: raw['trigger'],
      formatting: raw['formatting'],
      dataSourceOptions: raw['dataSourceOptions'],
    };
  },
  ['@type', 'universe', 'fieldList', 'trigger'],
);

/**
 * Cast schema for mapping the EntityRequestPostPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const entityRequestPostPayloadRequest = core.cast.object(
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
      fieldList: raw['fieldList'],
      trigger: raw['trigger'],
      formatting: raw['formatting'],
      dataSourceOptions: raw['dataSourceOptions'],
    };
  },
  ['@type', 'universe', 'fieldList', 'trigger'],
);
