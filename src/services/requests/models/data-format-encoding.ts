import * as core from '../../../core';

export const DataFormatEncoding = {
  Ascii: 'ASCII',
  Utf8: 'UTF-8',
} as const;

export type DataFormatEncoding = (typeof DataFormatEncoding)[keyof typeof DataFormatEncoding];

export const dataFormatEncoding = core.cast.identity<DataFormatEncoding>();
