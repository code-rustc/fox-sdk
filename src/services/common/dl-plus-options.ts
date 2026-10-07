import * as core from '../../core';

/**
 * Options specific to DL+ subscribers.
 */
export interface DlPlusOptions {
  /** Allows you to tailor the available response data to specific consumers. A subscriber identifies a consumer (such as a risk or accounting department for example) that's interested in a specific subset of DL+ data for its business needs. The fields available to a subscriber are determined by an associated shape definition that controls whether they are fulfilled from licensed Bulk Files or from Bloomberg Per Security.
   */
  subscribers?: string[] | undefined;
  /** Allows you to specify a price for instruments with multiple intraday prices during a trading cycle (e.g., `BVAL GSAC 2PM` or `BVAL GSAC 4PM`). When you schedule a price runs in the DL+ Workstation, you can define the price point name. For more: [Data License Plus Workstation > Scheduled Runs](https://dlp.bloomberg.com/documentation/dlp/dlp/publication_delivery_scheduled_runs.html).
   */
  pricePoint?: string | undefined;
  /** Allows you to specify a DL+ price sourcing strategy configuration, so you can provide multiple valuations of the same instrument for different times or for different fund types. For example, you can configure a strategy to source CBBT prices from Bulk files and use PCS prices from Per Security as an alternative, when CBBT prices are not available. For more: [Data License Plus Workstation > Pricing Strategies](https://dlp.bloomberg.com/documentation/dlp/dlp/dlp_navigation_overview.html#edm_dw_chap_standard_data_model_data_sets_price_strategies).
   */
  pricingStrategy?: string | undefined;
  /** Allows you to specify a list of "live" DL Commercial Model categories. Fields in these categories will return data from Bloomberg Per Security instead of DL+. The response file will contain data from both sources. For more: [DATA\<GO\> > Fields Discovery](https://data.bloomberg.com/fields/).
   */
  liveCommercialModelCategories?: string[] | undefined;
}

/**
 * Cast schema for the DlPlusOptions model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const dlPlusOptions = core.cast.identity<DlPlusOptions>();

/**
 * Cast schema for mapping API responses to the DlPlusOptions application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const dlPlusOptionsResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>([
    'subscribers',
    'pricePoint',
    'pricingStrategy',
    'liveCommercialModelCategories',
  ]);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return {
    ...__extras,
    subscribers: raw['subscribers'],
    pricePoint: raw['pricePoint'],
    pricingStrategy: raw['pricingStrategy'],
    liveCommercialModelCategories: raw['liveCommercialModelCategories'],
  };
}, []);

/**
 * Cast schema for mapping the DlPlusOptions application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const dlPlusOptionsRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    subscribers: raw['subscribers'],
    pricePoint: raw['pricePoint'],
    pricingStrategy: raw['pricingStrategy'],
    liveCommercialModelCategories: raw['liveCommercialModelCategories'],
  };
}, []);
