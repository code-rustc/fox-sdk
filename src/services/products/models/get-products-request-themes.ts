import * as core from '../../../core';

export const GetProductsRequestThemes = {
  CompanyData: 'Company Data',
  CorporateActions: 'Corporate Actions',
  FundamentalsEstimatesKpIs: 'Fundamentals - Estimates - KPIs',
  FundsAndEtFs: 'Funds and ETFs',
  InstrumentReferenceData: 'Instrument Reference Data',
  NewsAndNewsAnalytics: 'News and News Analytics',
  PricingBvalEvaluated: 'Pricing - BVAL Evaluated',
  PricingExchangeAndContributed: 'Pricing - Exchange and Contributed',
  Regulatory: 'Regulatory',
  Risk: 'Risk',
  SustainableFinanceData: 'Sustainable Finance Data',
  TickHistory: 'Tick History',
} as const;

export type GetProductsRequestThemes =
  (typeof GetProductsRequestThemes)[keyof typeof GetProductsRequestThemes];

export const getProductsRequestThemes = core.cast.identity<GetProductsRequestThemes>();
