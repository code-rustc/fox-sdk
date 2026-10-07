import * as core from '../../../core';

export const DataFormatDelimiter = {
  Pipe: '|',
  Comma: ',',
  Semicolon: ';',
} as const;

export type DataFormatDelimiter = (typeof DataFormatDelimiter)[keyof typeof DataFormatDelimiter];

export const dataFormatDelimiter = core.cast.identity<DataFormatDelimiter>();
