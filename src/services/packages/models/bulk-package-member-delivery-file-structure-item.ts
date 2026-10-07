import * as core from '../../../core';

export const BulkPackageMemberDeliveryFileStructureItem = {
  Snapshots: 'Snapshots',
  SnapshotsChanges: 'Snapshots Changes',
  SnapshotsCorrectionsRevisions: 'Snapshots Corrections/Revisions',
} as const;

export type BulkPackageMemberDeliveryFileStructureItem =
  (typeof BulkPackageMemberDeliveryFileStructureItem)[keyof typeof BulkPackageMemberDeliveryFileStructureItem];

export const bulkPackageMemberDeliveryFileStructureItem =
  core.cast.identity<BulkPackageMemberDeliveryFileStructureItem>();
