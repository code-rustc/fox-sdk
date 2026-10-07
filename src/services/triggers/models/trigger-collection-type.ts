import * as core from '../../../core';

export const TriggerCollectionType = {
  TriggerCollection: 'TriggerCollection',
} as const;

export type TriggerCollectionType =
  (typeof TriggerCollectionType)[keyof typeof TriggerCollectionType];

export const triggerCollectionType = core.cast.identity<TriggerCollectionType>();
