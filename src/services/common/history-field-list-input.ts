import { HistoryFieldListInputItem } from './history-field-list-input-item';

/**
 * A list of field name IRIs conforming to `https://api.bloomberg.com/eap/catalogs/bbg/fields/{field}`, with optional history-specific properties.
 */
export type HistoryFieldListInput = HistoryFieldListInputItem[];
