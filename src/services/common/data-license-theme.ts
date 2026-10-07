import * as core from '../../core';

export const DataLicenseTheme = {
  CompanyData: 'COMPANY_DATA',
  CorporateActions: 'CORPORATE_ACTIONS',
  Derived: 'DERIVED',
  EsgAndSustainability: 'ESG_AND_SUSTAINABILITY',
  FundamentalsEstimatesKpis: 'FUNDAMENTALS_ESTIMATES_KPIS',
  FundsAndEtfs: 'FUNDS_AND_ETFS',
  InstrumentReferenceData: 'INSTRUMENT_REFERENCE_DATA',
  NewsAndAnalytics: 'NEWS_AND_ANALYTICS',
  PricingExchangeAndContributed: 'PRICING_EXCHANGE_AND_CONTRIBUTED',
  Regulatory: 'REGULATORY',
  Risk: 'RISK',
  TickHistory: 'TICK_HISTORY',
} as const;

export type DataLicenseTheme = (typeof DataLicenseTheme)[keyof typeof DataLicenseTheme];

export const dataLicenseTheme = core.cast.identity<DataLicenseTheme>();
