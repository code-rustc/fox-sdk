import * as core from '../../../core';

export const PartialNoticeRevisionStatus = {
  OriginalNotice: 'ORIGINAL_NOTICE',
  AmendedAssetClass: 'AMENDED_ASSET_CLASS',
  AmendedBulkDatasets: 'AMENDED_BULK_DATASETS',
  AmendedChangeDriver: 'AMENDED_CHANGE_DRIVER',
  AmendedDescription: 'AMENDED_DESCRIPTION',
  AmendedEffectiveDate: 'AMENDED_EFFECTIVE_DATE',
  AmendedEntitlements: 'AMENDED_ENTITLEMENTS',
  AmendedImpactedFields: 'AMENDED_IMPACTED_FIELDS',
  AmendedImpactedProduct: 'AMENDED_IMPACTED_PRODUCT',
  AmendedImpactedSecurities: 'AMENDED_IMPACTED_SECURITIES',
  AmendedNoticeDetails: 'AMENDED_NOTICE_DETAILS',
  AmendedRegion: 'AMENDED_REGION',
  CancelledNotice: 'CANCELLED_NOTICE',
  ReminderNotice: 'REMINDER_NOTICE',
} as const;

export type PartialNoticeRevisionStatus =
  (typeof PartialNoticeRevisionStatus)[keyof typeof PartialNoticeRevisionStatus];

export const partialNoticeRevisionStatus = core.cast.identity<PartialNoticeRevisionStatus>();
