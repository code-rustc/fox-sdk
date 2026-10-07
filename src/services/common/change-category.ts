import * as core from '../../core';

export const ChangeCategory = {
  BulkDatasetChange: 'BULK_DATASET_CHANGE',
  ContractualCommercialChange: 'CONTRACTUAL_COMMERCIAL_CHANGE',
  DataChange: 'DATA_CHANGE',
  EntitlementChange: 'ENTITLEMENT_CHANGE',
  FeePolicyChange: 'FEE_POLICY_CHANGE',
  FieldChange: 'FIELD_CHANGE',
  InfrastructureChange: 'INFRASTRUCTURE_CHANGE',
  MaterialMethodologyChange: 'MATERIAL_METHODOLOGY_CHANGE',
  NewData: 'NEW_DATA',
  NewExchangeContributorEntitlement: 'NEW_EXCHANGE_CONTRIBUTOR_ENTITLEMENT',
  NewInstruments: 'NEW_INSTRUMENTS',
  NewProductOffering: 'NEW_PRODUCT_OFFERING',
  ProductChangeEnhancement: 'PRODUCT_CHANGE_ENHANCEMENT',
  ServerMaintenance: 'SERVER_MAINTENANCE',
  SoftwareUpgradeMaintenance: 'SOFTWARE_UPGRADE_MAINTENANCE',
  SymbologyChange: 'SYMBOLOGY_CHANGE',
  WeeklyNotice: 'WEEKLY_NOTICE',
} as const;

export type ChangeCategory = (typeof ChangeCategory)[keyof typeof ChangeCategory];

export const changeCategory = core.cast.identity<ChangeCategory>();
