import * as core from '../../../core';

export const PricingSnapshotFormatDelimiter = {
  Pipe: '|',
  Comma: ',',
  Semicolon: ';',
} as const;

export type PricingSnapshotFormatDelimiter =
  (typeof PricingSnapshotFormatDelimiter)[keyof typeof PricingSnapshotFormatDelimiter];

export const pricingSnapshotFormatDelimiter = core.cast.identity<PricingSnapshotFormatDelimiter>();
