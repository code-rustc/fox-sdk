import { UniverseInputItem } from './universe-input-item';

/**
 * List of identifiers. DL REST API supports up to 80,000 securities in a universe without security overrides. If the universe contains security overrides, Bloomberg recommends limiting the universe size to 20,000 securities.
 */
export type UniverseInputItems = UniverseInputItem[];
