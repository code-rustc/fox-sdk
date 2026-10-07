import * as core from '../../../core';

export const DataRuntimeOptionsPrecision = {
  Standard: 'standard',
  Maximum: 'maximum',
} as const;

export type DataRuntimeOptionsPrecision =
  (typeof DataRuntimeOptionsPrecision)[keyof typeof DataRuntimeOptionsPrecision];

export const dataRuntimeOptionsPrecision = core.cast.identity<DataRuntimeOptionsPrecision>();
