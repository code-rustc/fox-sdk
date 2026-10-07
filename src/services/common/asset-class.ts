import * as core from '../../core';

export const AssetClass = {
  Cds: 'CDS',
  Certificates: 'CERTIFICATES',
  Corporates: 'CORPORATES',
  Currencies: 'CURRENCIES',
  Curves: 'CURVES',
  Derivatives: 'DERIVATIVES',
  Entities: 'ENTITIES',
  Equities: 'EQUITIES',
  FixedIncome: 'FIXED_INCOME',
  Funds: 'FUNDS',
  Futures: 'FUTURES',
  Governments: 'GOVERNMENTS',
  GovAgencyCorporateBonds: 'GOV_AGENCY_CORPORATE_BONDS',
  Indices: 'INDICES',
  MoneyMarkets: 'MONEY_MARKETS',
  Mortgages: 'MORTGAGES',
  Municipals: 'MUNICIPALS',
  Na: 'N_A',
  Options: 'OPTIONS',
  Preferreds: 'PREFERREDS',
  SecuritizedProducts: 'SECURITIZED_PRODUCTS',
  SyndicatedLoans: 'SYNDICATED_LOANS',
  UsMunicipalBonds: 'US_MUNICIPAL_BONDS',
  Warrants: 'WARRANTS',
} as const;

export type AssetClass = (typeof AssetClass)[keyof typeof AssetClass];

export const assetClass = core.cast.identity<AssetClass>();
