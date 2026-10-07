import * as core from '../../../core';
import {
  BulkPackageMemberDeliveryFrequency,
  bulkPackageMemberDeliveryFrequency,
} from './bulk-package-member-delivery-frequency';
import {
  BulkPackageMemberDeliveryFileStructureItem,
  bulkPackageMemberDeliveryFileStructureItem,
} from './bulk-package-member-delivery-file-structure-item';
import { BulkPackageMemberDeliveryFileStructure } from '../../common/bulk-package-member-delivery-file-structure';

/**
 * Delivery frequency, file structure and file formats.
 */
export interface BulkPackageMemberDelivery {
  /** Delivery schedule for files included in this package. */
  frequency: BulkPackageMemberDeliveryFrequency;
  /** File structure for datasets in this package. */
  fileStructure: BulkPackageMemberDeliveryFileStructureItem[];
  /** Available file formats for files included in this package. */
  fileFormats: string[];
}

export namespace BulkPackageMemberDelivery {
  export type Frequency = BulkPackageMemberDeliveryFrequency;
  export type FileStructure = BulkPackageMemberDeliveryFileStructure;
}

/**
 * Cast schema for the BulkPackageMemberDelivery model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageMemberDelivery = core.cast.identity<BulkPackageMemberDelivery>();

/**
 * Cast schema for mapping API responses to the BulkPackageMemberDelivery application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageMemberDeliveryResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['frequency', 'fileStructure', 'fileFormats']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      frequency: raw['frequency'],
      fileStructure: raw['fileStructure'],
      fileFormats: raw['fileFormats'],
    };
  },
  ['frequency', 'fileStructure', 'fileFormats'],
);

/**
 * Cast schema for mapping the BulkPackageMemberDelivery application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageMemberDeliveryRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      frequency: raw['frequency'],
      fileStructure: raw['fileStructure'],
      fileFormats: raw['fileFormats'],
    };
  },
  ['frequency', 'fileStructure', 'fileFormats'],
);
