import * as core from '../../../core';

export const DatasetType = {
  Dataset: 'Dataset',
} as const;

export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType];

export const datasetType = core.cast.identity<DatasetType>();
