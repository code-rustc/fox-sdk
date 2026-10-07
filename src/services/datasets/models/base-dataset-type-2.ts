import * as core from '../../../core';

export const BaseDatasetType2 = {
  BaseDataset: 'BaseDataset',
} as const;

export type BaseDatasetType2 = (typeof BaseDatasetType2)[keyof typeof BaseDatasetType2];

export const baseDatasetType2 = core.cast.identity<BaseDatasetType2>();
