import * as core from '../../../core';

export const EntityFormatOutputFormat = {
  BulkListOutputFormat: 'bulkListOutputFormat',
  FixedOutputFormat: 'fixedOutputFormat',
  VariableOutputFormat: 'variableOutputFormat',
} as const;

export type EntityFormatOutputFormat =
  (typeof EntityFormatOutputFormat)[keyof typeof EntityFormatOutputFormat];

export const entityFormatOutputFormat = core.cast.identity<EntityFormatOutputFormat>();
