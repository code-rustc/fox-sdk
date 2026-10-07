import * as core from '../../../core';

export const DataFormatOutputFormat = {
  BulkListOutputFormat: 'bulkListOutputFormat',
  FixedOutputFormat: 'fixedOutputFormat',
  VariableOutputFormat: 'variableOutputFormat',
} as const;

export type DataFormatOutputFormat =
  (typeof DataFormatOutputFormat)[keyof typeof DataFormatOutputFormat];

export const dataFormatOutputFormat = core.cast.identity<DataFormatOutputFormat>();
