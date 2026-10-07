import * as core from '../../core';
import { Id } from './id';
import { Identifier } from './identifier';
import { CleanName } from './clean-name';
import { Title } from './title';
import { DlCommercialModelCategory } from './dl-commercial-model-category';
import { LoadingSpeed } from './loading-speed';
import { XdmType } from './xdm-type';
import { Mnemonic } from './mnemonic';

/**
 * Field IRI with additional properties.
 */
export interface FieldListItem {
  /** JSON-LD id */
  '@id': Id;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** A valid XML and JSON name. */
  cleanName: CleanName;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** Pricing model. */
  dlCommercialModelCategory: DlCommercialModelCategory;
  /** Data loading speed. */
  loadingSpeed?: LoadingSpeed | undefined;
  /** Bloomberg XDM data model type. */
  type: XdmType;
  /** Field Mnemonic, such as PX_LAST. */
  mnemonic: Mnemonic;
}

/**
 * Cast schema for the FieldListItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const fieldListItem = core.cast.identity<FieldListItem>();

/**
 * Cast schema for mapping API responses to the FieldListItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldListItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@id',
      'identifier',
      'cleanName',
      'title',
      'dlCommercialModelCategory',
      'loadingSpeed',
      'type',
      'mnemonic',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@id': raw['@id'],
      identifier: raw['identifier'],
      cleanName: raw['cleanName'],
      title: raw['title'],
      dlCommercialModelCategory: raw['dlCommercialModelCategory'],
      loadingSpeed: raw['loadingSpeed'],
      type: raw['type'],
      mnemonic: raw['mnemonic'],
    };
  },
  ['@id', 'identifier', 'cleanName', 'title', 'dlCommercialModelCategory', 'type', 'mnemonic'],
);

/**
 * Cast schema for mapping the FieldListItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldListItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@id': raw['@id'],
      identifier: raw['identifier'],
      cleanName: raw['cleanName'],
      title: raw['title'],
      dlCommercialModelCategory: raw['dlCommercialModelCategory'],
      loadingSpeed: raw['loadingSpeed'],
      type: raw['type'],
      mnemonic: raw['mnemonic'],
    };
  },
  ['@id', 'identifier', 'cleanName', 'title', 'dlCommercialModelCategory', 'type', 'mnemonic'],
);
