import * as core from '../../../core';

export const EntityFormatDelimiter = {
  Pipe: '|',
  Comma: ',',
  Semicolon: ';',
} as const;

export type EntityFormatDelimiter =
  (typeof EntityFormatDelimiter)[keyof typeof EntityFormatDelimiter];

export const entityFormatDelimiter = core.cast.identity<EntityFormatDelimiter>();
