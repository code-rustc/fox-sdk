import * as core from '../../../core';
import {
  BulkDeliveryNotification,
  bulkDeliveryNotification,
  bulkDeliveryNotificationRequest,
  bulkDeliveryNotificationResponse,
} from '../../common/bulk-delivery-notification';
import {
  CustomDeliveryNotification,
  customDeliveryNotification,
  customDeliveryNotificationRequest,
  customDeliveryNotificationResponse,
} from '../../common/custom-delivery-notification';
import {
  ArchiveDeliveryNotification,
  archiveDeliveryNotification,
  archiveDeliveryNotificationRequest,
  archiveDeliveryNotificationResponse,
} from '../../common/archive-delivery-notification';

/**
 * Cast schema for the GetSseResponse model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const getSseResponse = core.cast.identity<GetSseResponse>();

export type GetSseResponse =
  | BulkDeliveryNotification
  | CustomDeliveryNotification
  | ArchiveDeliveryNotification;

export const getSseResponseResponse = core.cast.identity<GetSseResponse>();

export const getSseResponseRequest = core.cast.identity<GetSseResponse>();
