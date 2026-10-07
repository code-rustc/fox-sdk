import * as core from '../../core';

/**
 * Bloomberg segregates securities into different sectors (asset classes) identified by shortcut keys on the Bloomberg Terminal® keyboard. Historically, these keys were yellow, so this nomenclature is sometimes called `Yellow Key`.
 */
export interface YellowKeys {
  /** Commodities and Futures */
  Comdty: boolean;
  /** Corporate Bonds, CDS */
  Corp: boolean;
  /** Foreign Currency */
  Curncy: boolean;
  /** Equities */
  Equity: boolean;
  /** Government Bonds */
  Govt: boolean;
  /** Generic Interest Rates, Economic Indices such as CPI, GDP, Equity, Indices */
  Index: boolean;
  /** Money Market */
  Mmkt: boolean;
  /** Mortgages */
  Mtge: boolean;
  /** Municipals and State Bonds */
  Muni: boolean;
  /** Preferred Securities */
  Pfd: boolean;
}

/**
 * Cast schema for the YellowKeys model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const yellowKeys = core.cast.identity<YellowKeys>();

/**
 * Cast schema for mapping API responses to the YellowKeys application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const yellowKeysResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'Comdty',
      'Corp',
      'Curncy',
      'Equity',
      'Govt',
      'Index',
      'Mmkt',
      'Mtge',
      'Muni',
      'Pfd',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      Comdty: raw['Comdty'],
      Corp: raw['Corp'],
      Curncy: raw['Curncy'],
      Equity: raw['Equity'],
      Govt: raw['Govt'],
      Index: raw['Index'],
      Mmkt: raw['Mmkt'],
      Mtge: raw['Mtge'],
      Muni: raw['Muni'],
      Pfd: raw['Pfd'],
    };
  },
  ['Comdty', 'Corp', 'Curncy', 'Equity', 'Govt', 'Index', 'Mmkt', 'Mtge', 'Muni', 'Pfd'],
);

/**
 * Cast schema for mapping the YellowKeys application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const yellowKeysRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      Comdty: raw['Comdty'],
      Corp: raw['Corp'],
      Curncy: raw['Curncy'],
      Equity: raw['Equity'],
      Govt: raw['Govt'],
      Index: raw['Index'],
      Mmkt: raw['Mmkt'],
      Mtge: raw['Mtge'],
      Muni: raw['Muni'],
      Pfd: raw['Pfd'],
    };
  },
  ['Comdty', 'Corp', 'Curncy', 'Equity', 'Govt', 'Index', 'Mmkt', 'Mtge', 'Muni', 'Pfd'],
);
