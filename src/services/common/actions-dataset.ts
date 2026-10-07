import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import { ActionsDatasetType, actionsDatasetType } from '../datasets/models/actions-dataset-type';
import { Member, member, memberRequest, memberResponse } from './member';
import {
  ModuleLevel1,
  moduleLevel1,
  moduleLevel1Request,
  moduleLevel1Response,
} from './module-level1';
import {
  ModuleLevel2,
  moduleLevel2,
  moduleLevel2Request,
  moduleLevel2Response,
} from './module-level2';
import {
  ModuleLevel3,
  moduleLevel3,
  moduleLevel3Request,
  moduleLevel3Response,
} from './module-level3';
import {
  UniverseLabel,
  universeLabel,
  universeLabelRequest,
  universeLabelResponse,
} from './universe-label';
import {
  UniverseSubsetLabel,
  universeSubsetLabel,
  universeSubsetLabelRequest,
  universeSubsetLabelResponse,
} from './universe-subset-label';
import { Publisher, publisher, publisherRequest, publisherResponse } from './publisher';
import { BaseDataset, baseDataset, baseDatasetRequest, baseDatasetResponse } from './base-dataset';
import { Id } from './id';
import { DatasetTitle } from './dataset-title';
import { DatasetDescription } from './dataset-description';
import { Identifier } from './identifier';
import { Contains } from './contains';
import { DatasetDelivery } from './dataset-delivery';
import { PrimaryKey } from './primary-key';
import { AssociatedRequest } from './associated-request';

export interface ActionsDataset extends BaseDataset {
  /** JSON-LD type */
  _type: 'ActionsDataset';
  /** An IRI to the request the dataset is associated with. This only applies when catalog is not `bbg`. */
  request?: AssociatedRequest | undefined;
}

export namespace ActionsDataset {
  export type _Type = ActionsDatasetType;
}

/**
 * Cast schema for the ActionsDataset model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const actionsDataset = core.cast.identity<ActionsDataset>();

/**
 * Cast schema for mapping API responses to the ActionsDataset application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const actionsDatasetResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@id',
      '@type',
      'title',
      'description',
      'identifier',
      'contains',
      'earliestDelivery',
      'latestDelivery',
      'moduleLevel1',
      'moduleLevel2',
      'moduleLevel3',
      'universeLabel',
      'universeSubsetLabel',
      'publisher',
      'primaryKey',
      'request',
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
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) => (v == null ? v : memberResponse.parse(v)))
        : (raw['contains'] as any),
      earliestDelivery: raw['earliestDelivery'],
      latestDelivery: raw['latestDelivery'],
      moduleLevel1:
        raw['moduleLevel1'] == null
          ? raw['moduleLevel1']
          : moduleLevel1Response.parse(raw['moduleLevel1']),
      moduleLevel2:
        raw['moduleLevel2'] == null
          ? raw['moduleLevel2']
          : moduleLevel2Response.parse(raw['moduleLevel2']),
      moduleLevel3:
        raw['moduleLevel3'] == null
          ? raw['moduleLevel3']
          : moduleLevel3Response.parse(raw['moduleLevel3']),
      universeLabel:
        raw['universeLabel'] == null
          ? raw['universeLabel']
          : universeLabelResponse.parse(raw['universeLabel']),
      universeSubsetLabel:
        raw['universeSubsetLabel'] == null
          ? raw['universeSubsetLabel']
          : universeSubsetLabelResponse.parse(raw['universeSubsetLabel']),
      publisher:
        raw['publisher'] == null ? raw['publisher'] : publisherResponse.parse(raw['publisher']),
      primaryKey: raw['primaryKey'],
      request: raw['request'],
    };
  },
  ['@context', '@id', '@type', 'title', 'description', 'identifier', 'contains'],
);

/**
 * Cast schema for mapping the ActionsDataset application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const actionsDatasetRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      contains: Array.isArray(raw['contains'])
        ? (raw['contains'] as any[]).map((v: any) => (v == null ? v : memberRequest.parse(v)))
        : (raw['contains'] as any),
      earliestDelivery: raw['earliestDelivery'],
      latestDelivery: raw['latestDelivery'],
      moduleLevel1:
        raw['moduleLevel1'] == null
          ? raw['moduleLevel1']
          : moduleLevel1Request.parse(raw['moduleLevel1']),
      moduleLevel2:
        raw['moduleLevel2'] == null
          ? raw['moduleLevel2']
          : moduleLevel2Request.parse(raw['moduleLevel2']),
      moduleLevel3:
        raw['moduleLevel3'] == null
          ? raw['moduleLevel3']
          : moduleLevel3Request.parse(raw['moduleLevel3']),
      universeLabel:
        raw['universeLabel'] == null
          ? raw['universeLabel']
          : universeLabelRequest.parse(raw['universeLabel']),
      universeSubsetLabel:
        raw['universeSubsetLabel'] == null
          ? raw['universeSubsetLabel']
          : universeSubsetLabelRequest.parse(raw['universeSubsetLabel']),
      publisher:
        raw['publisher'] == null ? raw['publisher'] : publisherRequest.parse(raw['publisher']),
      primaryKey: raw['primaryKey'],
      request: raw['request'],
    };
  },
  ['@context', '@id', '@type', 'title', 'description', 'identifier', 'contains'],
);
