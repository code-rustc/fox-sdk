import * as core from '../../../core';

export const DataFormatType = {
  DataFormat: 'DataFormat',
} as const;

export type DataFormatType = (typeof DataFormatType)[keyof typeof DataFormatType];

export const dataFormatType = core.cast.identity<DataFormatType>();
