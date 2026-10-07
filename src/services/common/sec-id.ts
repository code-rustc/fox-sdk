import * as core from '../../core';

export const SecId = {
  Austrian: 'AUSTRIAN',
  BbCompany: 'BB_COMPANY',
  BbGlobal: 'BB_GLOBAL',
  BbUnique: 'BB_UNIQUE',
  Belgium: 'BELGIUM',
  Cats: 'CATS',
  Cedel: 'CEDEL',
  Cins: 'CINS',
  CommonNumber: 'COMMON_NUMBER',
  Cusip: 'CUSIP',
  Czech: 'CZECH',
  Dutch: 'DUTCH',
  Euroclear: 'EUROCLEAR',
  French: 'FRENCH',
  Irish: 'IRISH',
  Isin: 'ISIN',
  Israeli: 'ISRAELI',
  Italy: 'ITALY',
  Japan: 'JAPAN',
  LegalEntityIdentifier: 'LEGAL_ENTITY_IDENTIFIER',
  Luxembourg: 'LUXEMBOURG',
  Sedol: 'SEDOL',
  Spain: 'SPAIN',
  Ticker: 'TICKER',
  Valoren: 'VALOREN',
  Wpk: 'WPK',
} as const;

export type SecId = (typeof SecId)[keyof typeof SecId];

export const secId = core.cast.identity<SecId>();
