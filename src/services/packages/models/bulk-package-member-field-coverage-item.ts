import * as core from '../../../core';
import {
  BulkPackageMemberFieldCoverageItemFieldGroup,
  bulkPackageMemberFieldCoverageItemFieldGroup,
  bulkPackageMemberFieldCoverageItemFieldGroupRequest,
  bulkPackageMemberFieldCoverageItemFieldGroupResponse,
} from './bulk-package-member-field-coverage-item-field-group';
import {
  BulkPackageMemberFieldCoverageItemFieldSubGroupsItem,
  bulkPackageMemberFieldCoverageItemFieldSubGroupsItem,
  bulkPackageMemberFieldCoverageItemFieldSubGroupsItemRequest,
  bulkPackageMemberFieldCoverageItemFieldSubGroupsItemResponse,
} from './bulk-package-member-field-coverage-item-field-sub-groups-item';
import { BulkPackageMemberFieldCoverageItemFieldSubGroups } from '../../common/bulk-package-member-field-coverage-item-field-sub-groups';

export interface BulkPackageMemberFieldCoverageItem {
  /** Field group. */
  fieldGroup: BulkPackageMemberFieldCoverageItemFieldGroup;
  /** Field sub-group. */
  fieldSubGroups: BulkPackageMemberFieldCoverageItemFieldSubGroupsItem[];
}

export namespace BulkPackageMemberFieldCoverageItem {
  export interface FieldGroup {
    name: BulkPackageMemberFieldCoverageItemFieldGroup['name'];
  }
  export type FieldSubGroups = BulkPackageMemberFieldCoverageItemFieldSubGroups;
}

/**
 * Cast schema for the BulkPackageMemberFieldCoverageItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bulkPackageMemberFieldCoverageItem =
  core.cast.identity<BulkPackageMemberFieldCoverageItem>();

/**
 * Cast schema for mapping API responses to the BulkPackageMemberFieldCoverageItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bulkPackageMemberFieldCoverageItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['fieldGroup', 'fieldSubGroups']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      fieldGroup:
        raw['fieldGroup'] == null
          ? raw['fieldGroup']
          : bulkPackageMemberFieldCoverageItemFieldGroupResponse.parse(raw['fieldGroup']),
      fieldSubGroups: Array.isArray(raw['fieldSubGroups'])
        ? (raw['fieldSubGroups'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberFieldCoverageItemFieldSubGroupsItemResponse.parse(v),
          )
        : (raw['fieldSubGroups'] as any),
    };
  },
  ['fieldGroup', 'fieldSubGroups'],
);

/**
 * Cast schema for mapping the BulkPackageMemberFieldCoverageItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bulkPackageMemberFieldCoverageItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      fieldGroup:
        raw['fieldGroup'] == null
          ? raw['fieldGroup']
          : bulkPackageMemberFieldCoverageItemFieldGroupRequest.parse(raw['fieldGroup']),
      fieldSubGroups: Array.isArray(raw['fieldSubGroups'])
        ? (raw['fieldSubGroups'] as any[]).map((v: any) =>
            v == null ? v : bulkPackageMemberFieldCoverageItemFieldSubGroupsItemRequest.parse(v),
          )
        : (raw['fieldSubGroups'] as any),
    };
  },
  ['fieldGroup', 'fieldSubGroups'],
);
