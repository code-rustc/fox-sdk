/**
 * When `true`, indicates that you can use the `caAdjustmentType` attribute to adjust equity data for Corporate Actions (CA) that impact dividends and the number of shares outstanding, as follows:
|Value |Description                                                                                                                                                            |
|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|full  |Fully adjusts data for corporate actions that impact pricing and the number of shares outstanding, including splits, stock dividends, spin-offs, rights offerings, etc.|
|raw   |Leaves data unadjusted for corporate actions.                                                                                                                          |
|splits|Adjusts data for stock splits only.

 */
export type DlCorporateActionAdjustmentsAvailable = boolean;
