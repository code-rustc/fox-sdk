import * as core from '../../../core';

export const TriggerCollectionItemType = {
  TriggerCollection: 'TriggerCollection',
} as const;

export type TriggerCollectionItemType =
  (typeof TriggerCollectionItemType)[keyof typeof TriggerCollectionItemType];

export const triggerCollectionItemType = core.cast.identity<TriggerCollectionItemType>();
