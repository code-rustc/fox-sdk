import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  DeletedSubmitTriggerType,
  deletedSubmitTriggerType,
} from '../triggers/models/deleted-submit-trigger-type';
import {
  SubmitTrigger,
  submitTrigger,
  submitTriggerRequest,
  submitTriggerResponse,
} from './submit-trigger';
import {
  DeletedComponent,
  deletedComponent,
  deletedComponentRequest,
  deletedComponentResponse,
} from './deleted-component';
import { Id } from './id';
import { ComponentIdentifier } from './component-identifier';
import { ReferencedByActiveRequests } from './referenced-by-active-requests';
import { Title } from './title';
import { Description } from './description';
import { Issued } from './issued';
import { Modified } from './modified';
import { DeletedOn } from './deleted-on';

export interface DeletedSubmitTrigger extends SubmitTrigger, DeletedComponent {}

export namespace DeletedSubmitTrigger {
  export type _Type = DeletedSubmitTriggerType;
}

/**
 * Cast schema for the DeletedSubmitTrigger model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const deletedSubmitTrigger = core.cast.identity<DeletedSubmitTrigger>();

/**
 * Cast schema for mapping API responses to the DeletedSubmitTrigger application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const deletedSubmitTriggerResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@id',
      '@type',
      'identifier',
      'referencedByActiveRequests',
      'title',
      'description',
      'issued',
      'modified',
      'deletedOn',
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
      identifier: raw['identifier'],
      referencedByActiveRequests: raw['referencedByActiveRequests'],
      title: raw['title'],
      description: raw['description'],
      issued: raw['issued'],
      modified: raw['modified'],
      deletedOn: raw['deletedOn'],
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'identifier',
    'referencedByActiveRequests',
    'title',
    'issued',
    'modified',
    'deletedOn',
  ],
);

/**
 * Cast schema for mapping the DeletedSubmitTrigger application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const deletedSubmitTriggerRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      identifier: raw['identifier'],
      referencedByActiveRequests: raw['referencedByActiveRequests'],
      title: raw['title'],
      description: raw['description'],
      issued: raw['issued'],
      modified: raw['modified'],
      deletedOn: raw['deletedOn'],
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'identifier',
    'referencedByActiveRequests',
    'title',
    'issued',
    'modified',
    'deletedOn',
  ],
);
