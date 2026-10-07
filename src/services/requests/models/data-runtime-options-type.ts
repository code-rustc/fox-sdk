import * as core from '../../../core';

export const DataRuntimeOptionsType = {
  DataRuntimeOptions: 'DataRuntimeOptions',
} as const;

export type DataRuntimeOptionsType =
  (typeof DataRuntimeOptionsType)[keyof typeof DataRuntimeOptionsType];

export const dataRuntimeOptionsType = core.cast.identity<DataRuntimeOptionsType>();
