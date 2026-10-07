import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  FieldListItem,
  fieldListItem,
  fieldListItemRequest,
  fieldListItemResponse,
} from './field-list-item';
import { Id } from './id';
import { Types } from './types';
import { FieldsTitle } from './fields-title';
import { FieldsDescription } from './fields-description';
import { Identifier } from './identifier';
import { DlBulk } from './dl-bulk';
import { DataLicense } from './data-license';
import { PlatformStatic } from './platform-static';
import { PlatformStreaming } from './platform-streaming';
import { PlatformTerminalRequired } from './platform-terminal-required';
import { XsdType } from './xsd-type';
import { YkComdty } from './yk-comdty';
import { YkCorp } from './yk-corp';
import { YkCurncy } from './yk-curncy';
import { YkEquity } from './yk-equity';
import { YkIndex } from './yk-index';
import { YkMtge } from './yk-mtge';
import { YkMMkt } from './yk-m-mkt';
import { YkMuni } from './yk-muni';
import { YkPfd } from './yk-pfd';
import { YkGovt } from './yk-govt';
import { AssociatedEnums } from './associated-enums';
import { EnumValues } from './enum-values';
import { Created } from './created';
import { DlCategory } from './dl-category';
import { DlActualsAvailable } from './dl-actuals-available';
import { DlEstimatesAvailable } from './dl-estimates-available';
import { DlAdjustedFinancialsAvailable } from './dl-adjusted-financials-available';
import { DlAvailableInGetHistory } from './dl-available-in-get-history';
import { DlCommercialModelCategory } from './dl-commercial-model-category';
import { DlExtendedBulk } from './dl-extended-bulk';
import { FieldId } from './field-id';
import { FieldType } from './field-type';
import { Iri } from './iri';
import { IsAbstract } from './is-abstract';
import { LoadingSpeed } from './loading-speed';
import { Mnemonic } from './mnemonic';
import { OldMnemonic } from './old-mnemonic';
import { Range } from './range';
import { SapiNewSecuritySetup } from './sapi-new-security-setup';
import { StandardDecimalPlaces } from './standard-decimal-places';
import { StandardWidth } from './standard-width';
import { SuperPropertyIri } from './super-property-iri';
import { RdfLangString } from './rdf-lang-string';
import { XsdFractionDigits } from './xsd-fraction-digits';
import { XsdLength } from './xsd-length';
import { XsdMaxExclusive } from './xsd-max-exclusive';
import { XsdMaxInclusive } from './xsd-max-inclusive';
import { XsdMaxLength } from './xsd-max-length';
import { XsdMinExclusive } from './xsd-min-exclusive';
import { XsdMinInclusive } from './xsd-min-inclusive';
import { XsdMinLength } from './xsd-min-length';
import { XsdPattern } from './xsd-pattern';
import { Retired } from './retired';
import { BulkSchema } from './bulk-schema';

export interface Field {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  /** Items in the type */
  '@type': Types;
  /** The name of the field as shown on data.bloomberg.com. For more: [data.bloomberg.com > Bloomberg Fields](https://data.bloomberg.com/search/fields/#displayMode=title). */
  title: FieldsTitle;
  /** The description of the field as shown on data.bloomberg.com. For more: [data.bloomberg.com > Bloomberg Fields](https://data.bloomberg.com/search/fields/#displayMode=title). */
  description: FieldsDescription;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** Indicates whether the field is available for a Data License Bulk account. This only applies when catalog is `bbg`. For more [Data License > Accounts](https://developer.bloomberg.com/portal/products/dl?chapterId=5202#ds3). */
  'DL:Bulk'?: DlBulk | undefined;
  /** Indicates whether the field is available with a Data License account. This only applies when catalog is `bbg`. For more [Data License > Accounts](https://developer.bloomberg.com/portal/products/dl?chapterId=5202#ds3). */
  'Data License'?: DataLicense | undefined;
  /** Indicates whether the field provides an unchanging data point each time you request data on demand. This only applies when catalog is `bbg`. */
  'Platform: Static'?: PlatformStatic | undefined;
  /** Indicates whether the field provides a streaming, real-time data point. This only applies when catalog is `bbg`. */
  'Platform: Streaming'?: PlatformStreaming | undefined;
  /** Indicates whether you must have a Bloomberg Terminal&reg; subscription to see the corresponding field. This only applies when catalog is `bbg`. */
  'Platform: Terminal Required'?: PlatformTerminalRequired | undefined;
  /** Indicates the type of values for the corresponding fields, according to the XML schema definition data type (XSD). This only applies when catalog is `bbg`. For more: [IBM Jazz for Service Management documentation > XSD data types](https://www.ibm.com/docs/en/jfsm/1.1.2.1?topic=queries-xsd-data-types). */
  'xsd:type'?: XsdType | undefined;
  /** Commodities and Futures */
  'YK: Commodity'?: YkComdty | undefined;
  /** Corporate Bonds, CDS */
  'YK: Corporate'?: YkCorp | undefined;
  /** Foreign Currency */
  'YK: Currency'?: YkCurncy | undefined;
  /** Equities */
  'YK: Equity'?: YkEquity | undefined;
  /** Generic Interest Rates, Economic Indices such as CPI, GDP, Equity, Indices */
  'YK: Index'?: YkIndex | undefined;
  /** Mortgages */
  'YK: Mortgage'?: YkMtge | undefined;
  /** Money Market */
  'YK: Money Market'?: YkMMkt | undefined;
  /** Municipals and State Bonds */
  'YK: Municipal'?: YkMuni | undefined;
  /** Preferred Securities */
  'YK: Preferred'?: YkPfd | undefined;
  /** Government Bonds */
  'YK: US Government'?: YkGovt | undefined;
  /** URL to list all the enums associated with a given field. Refer to [field enums section](#tag/fields/operation/getFieldEnums) */
  associatedEnums?: AssociatedEnums | undefined;
  /** URL to list all the values that an enumerated field may take. Refer to [field values section](#tag/fields/operation/getFieldValues) */
  enumValues?: EnumValues | undefined;
  /** Indicates the date and time at which the field started providing data. This only applies when catalog is `bbg`. */
  Created?: Created | undefined;
  /** Indicates the category to which the field belongs. This only applies when catalog is `bbg`. For more: [data.bloomberg.com > Bloomberg Fields](https://data.bloomberg.com/search/fields/#displayMode=title). */
  'DL Category'?: DlCategory | undefined;
  /** When `true`, indicates that you can use the `actuals` attribute to request the reported value (`actuals`) for the corresponding field.
   */
  'DL Actuals Available'?: DlActualsAvailable | undefined;
  /** When `true`, indicates that you can use the `estimates` attribute to request the analyst estimate forecast value (`estimates`) for the corresponding field.
   */
  'DL Estimates Available'?: DlEstimatesAvailable | undefined;
  /** When `true`, indicates that you can use the `faAdjustmentType` attribute to request Bloomberg Enhanced Fundamentals (`adjusted`) instead of Generally Accepted Accounting Principles (GAAP) data.

Bloomberg Enhanced Fundamentals provide new, more detailed financial statements as well as non-GAAP income statement adjustments that remove the impact of one-time and abnormal charges.
 */
  'DL Adjusted Financials Available'?: DlAdjustedFinancialsAvailable | undefined;
  /** When true, indicates that the corresponding field is available for historical data (getHistory) requests. For more: [Data License Per Security > Request Types](https://developer.bloomberg.com/portal/products/dl?chapterId=4565&entityType=document#data_go_and_dl_rest_api-data_license_per_security-request_types). */
  'DL Available in GetHistory'?: DlAvailableInGetHistory | undefined;
  /** Pricing model. */
  'DL Commercial Model Category'?: DlCommercialModelCategory | undefined;
  /** Indicates whether the field is part of a Data License Extended Bulk Product, which includes the standard Bulk datasets plus extra datasets that provide additional descriptive bulk fields. This only applies when catalog is `bbg`. For more: [Data License > Bulk Datasets](https://developer.bloomberg.com/portal/products/dl?chapterId=4561). */
  'DL: Extended Bulk'?: DlExtendedBulk | undefined;
  /** The calc route identifier of the field, as shown in the URL path, so you can correctly refer to it in your Data License (DL) API calls. This only applies when catalog is `bbg`. For more: [Field Data Properties and Values](https://developer.bloomberg.com/portal/products/dl?chapterId=4561#dc180). */
  'Field Id'?: FieldId | undefined;
  /** The type of data that populates the corresponding field. This only applies when catalog is `bbg`. For more: [Data Types](https://developer.bloomberg.com/portal/products/dl?chapterId=4564#ds103). */
  'Field Type'?: FieldType | undefined;
  /** The internationalized resource identifier that you can use to request the field metadata. This only applies when catalog is `bbg`. */
  IRI?: Iri | undefined;
  /** When true, indicates that there is no value for the field because it describes another field. Therefore, you cannot instantiate the field. This only applies when catalog is `bbg`. */
  'Is Abstract'?: IsAbstract | undefined;
  /** Data loading speed. */
  'Loading Speed'?: LoadingSpeed | undefined;
  /** The mnemonic identifier of the field, as shown in the URL path, so you can correctly refer to it in your Data License (DL) API calls. This only applies when catalog is `bbg`. For more: [Field Data Properties and Values](https://developer.bloomberg.com/portal/products/dl?chapterId=4561#dc180). */
  Mnemonic?: Mnemonic | undefined;
  /** The previous mnemonic identifier of the field, as shown in the URL path, so you can correctly refer to it in your Data License (DL) API calls. This only applies when catalog is `bbg`. For more: [Field Data Properties and Values](https://developer.bloomberg.com/portal/products/dl?chapterId=4561#dc180). */
  'Old Mnemonic'?: OldMnemonic | undefined;
  /** The extended language range indicator for fields that show values in an RDF Extended Language Range. This only applies when catalog is `bbg`. For more: [w3c.org > Built-In Datatypes and Facets](https://www.w3.org/TR/owl2-quick-reference/#Built-in_Datatypes_and_Facets). */
  Range?: Range | undefined;
  /** Indicates if the Server API (SAPI) Order Management System (OMS) includes the field, which is required for new security set-up. This only applies when catalog is `bbg`. For more: [New Security Setup > Use Cases](https://developer.bloomberg.com/portal/products/b_pipe?chapterId=5249#dc22). */
  'SAPI New Security Setup'?: SapiNewSecuritySetup | undefined;
  /** The standard number of decimal places for the field. This only applies when catalog is `bbg`. For more: [Processing Bulk with Blueprints > FAQs](https://developer.bloomberg.com/portal/products/dl?chapterId=4561&#dc266). */
  'Standard Decimal Places'?: StandardDecimalPlaces | undefined;
  /** The standard width of the field, including decimals and the decimal point. This only applies when catalog is `bbg`. For more: [Processing Bulk with Blueprints > FAQs](https://developer.bloomberg.com/portal/products/dl?chapterId=4561&#dc266). */
  'Standard Width'?: StandardWidth | undefined;
  /** Indicates whether the given field is a parent field in the hierarchy. This only applies when catalog is `bbg`. */
  SuperPropertyIRI?: SuperPropertyIri | undefined;
  /** rdfLangRange. This only applies when catalog is `bbg`. */
  'rdf:langString'?: RdfLangString | undefined;
  /** Indicates the size of the minimum difference between decimal values. This only applies when catalog is `bbg`. For more: [XML Schema Part 2: Datatypes Second Edition](https://www.w3.org/TR/xmlschema-2/#rf-fractionDigits). */
  'xsd:fractionDigits'?: XsdFractionDigits | undefined;
  /** Indicates the number of units of length, where units of length varies depending on the type that is being derived from. This only applies when catalog is `bbg`. For more: [XML Schema Part 2: Datatypes Second Edition](https://www.w3.org/TR/xmlschema-2/#rf-length). */
  'xsd:length'?: XsdLength | undefined;
  /** Indicates the exclusive upper bound of the value space for ordered data types. This only applies when catalog is `bbg`. For more: [XML Schema Part 2: Datatypes Second Edition](https://www.w3.org/TR/xmlschema-2/#rf-maxExclusive). */
  'xsd:maxExclusive'?: XsdMaxExclusive | undefined;
  /** Indicates the inclusive upper bound of the value space for ordered data types. This only applies when catalog is `bbg`. For more: [XML Schema Part 2: Datatypes Second Edition](https://www.w3.org/TR/xmlschema-2/#rf-maxInclusive). */
  'xsd:maxInclusive'?: XsdMaxInclusive | undefined;
  /** Indicates the maximum number of units of length, where units of length varies depending on the type that is being derived from. This only applies when catalog is `bbg`. For more: [XML Schema Part 2: Datatypes Second Edition](https://www.w3.org/TR/xmlschema-2/#rf-maxLength). */
  'xsd:maxLength'?: XsdMaxLength | undefined;
  /** Indicates the exclusive lower bound of the value space for ordered data types. This only applies when catalog is `bbg`. For more: [XML Schema Part 2: Datatypes Second Edition](https://www.w3.org/TR/xmlschema-2/#rf-minExclusive). */
  'xsd:minExclusive'?: XsdMinExclusive | undefined;
  /** Indicates the inclusive lower bound of the value space for ordered data types. This only applies when catalog is `bbg`. For more: [XML Schema Part 2: Datatypes Second Edition](https://www.w3.org/TR/xmlschema-2/#rf-minInclusive). */
  'xsd:minInclusive'?: XsdMinInclusive | undefined;
  /** Indicates the minimum number of units of length, where units of length varies depending on the type that is being derived from. This only applies when catalog is `bbg`. For more: [XML Schema Part 2: Datatypes Second Edition](https://www.w3.org/TR/xmlschema-2/#rf-minLength). */
  'xsd:minLength'?: XsdMinLength | undefined;
  /** Indicates the valid values for the corresponding field. This only applies when catalog is `bbg`. For more: [XML Schema Part 2: Datatypes Second Edition](https://www.w3.org/TR/xmlschema-2/#rf-pattern). */
  'xsd:pattern'?: XsdPattern | undefined;
  /** Indicates whether current datasets include the corresponding field. While historical datasets may include the field, it is not included in new datasets. */
  retired?: Retired | undefined;
  /** The `bulkSchema` property describes the content of a field of `type` Bulk Format, providing a list of the fields which make up the Bulk Format field. */
  bulkSchema?: BulkSchema | undefined;
}

/**
 * Cast schema for the Field model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const field = core.cast.identity<Field>();

/**
 * Cast schema for mapping API responses to the Field application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const fieldResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@id',
      '@type',
      'title',
      'description',
      'identifier',
      'DL:Bulk',
      'Data License',
      'Platform: Static',
      'Platform: Streaming',
      'Platform: Terminal Required',
      'xsd:type',
      'YK: Commodity',
      'YK: Corporate',
      'YK: Currency',
      'YK: Equity',
      'YK: Index',
      'YK: Mortgage',
      'YK: Money Market',
      'YK: Municipal',
      'YK: Preferred',
      'YK: US Government',
      'associatedEnums',
      'enumValues',
      'Created',
      'DL Category',
      'DL Actuals Available',
      'DL Estimates Available',
      'DL Adjusted Financials Available',
      'DL Available in GetHistory',
      'DL Commercial Model Category',
      'DL: Extended Bulk',
      'Field Id',
      'Field Type',
      'IRI',
      'Is Abstract',
      'Loading Speed',
      'Mnemonic',
      'Old Mnemonic',
      'Range',
      'SAPI New Security Setup',
      'Standard Decimal Places',
      'Standard Width',
      'SuperPropertyIRI',
      'rdf:langString',
      'xsd:fractionDigits',
      'xsd:length',
      'xsd:maxExclusive',
      'xsd:maxInclusive',
      'xsd:maxLength',
      'xsd:minExclusive',
      'xsd:minInclusive',
      'xsd:minLength',
      'xsd:pattern',
      'retired',
      'bulkSchema',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@context':
        raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      'DL:Bulk': raw['DL:Bulk'],
      'Data License': raw['Data License'],
      'Platform: Static': raw['Platform: Static'],
      'Platform: Streaming': raw['Platform: Streaming'],
      'Platform: Terminal Required': raw['Platform: Terminal Required'],
      'xsd:type': raw['xsd:type'],
      'YK: Commodity': raw['YK: Commodity'],
      'YK: Corporate': raw['YK: Corporate'],
      'YK: Currency': raw['YK: Currency'],
      'YK: Equity': raw['YK: Equity'],
      'YK: Index': raw['YK: Index'],
      'YK: Mortgage': raw['YK: Mortgage'],
      'YK: Money Market': raw['YK: Money Market'],
      'YK: Municipal': raw['YK: Municipal'],
      'YK: Preferred': raw['YK: Preferred'],
      'YK: US Government': raw['YK: US Government'],
      associatedEnums: raw['associatedEnums'],
      enumValues: raw['enumValues'],
      Created: raw['Created'],
      'DL Category': raw['DL Category'],
      'DL Actuals Available': raw['DL Actuals Available'],
      'DL Estimates Available': raw['DL Estimates Available'],
      'DL Adjusted Financials Available': raw['DL Adjusted Financials Available'],
      'DL Available in GetHistory': raw['DL Available in GetHistory'],
      'DL Commercial Model Category': raw['DL Commercial Model Category'],
      'DL: Extended Bulk': raw['DL: Extended Bulk'],
      'Field Id': raw['Field Id'],
      'Field Type': raw['Field Type'],
      IRI: raw['IRI'],
      'Is Abstract': raw['Is Abstract'],
      'Loading Speed': raw['Loading Speed'],
      Mnemonic: raw['Mnemonic'],
      'Old Mnemonic': raw['Old Mnemonic'],
      Range: raw['Range'],
      'SAPI New Security Setup': raw['SAPI New Security Setup'],
      'Standard Decimal Places': raw['Standard Decimal Places'],
      'Standard Width': raw['Standard Width'],
      SuperPropertyIRI: raw['SuperPropertyIRI'],
      'rdf:langString': raw['rdf:langString'],
      'xsd:fractionDigits': raw['xsd:fractionDigits'],
      'xsd:length': raw['xsd:length'],
      'xsd:maxExclusive': raw['xsd:maxExclusive'],
      'xsd:maxInclusive': raw['xsd:maxInclusive'],
      'xsd:maxLength': raw['xsd:maxLength'],
      'xsd:minExclusive': raw['xsd:minExclusive'],
      'xsd:minInclusive': raw['xsd:minInclusive'],
      'xsd:minLength': raw['xsd:minLength'],
      'xsd:pattern': raw['xsd:pattern'],
      retired: raw['retired'],
      bulkSchema: Array.isArray(raw['bulkSchema'])
        ? (raw['bulkSchema'] as any[]).map((v: any) =>
            v == null ? v : fieldListItemResponse.parse(v),
          )
        : (raw['bulkSchema'] as any),
    };
  },
  ['@context', '@id', '@type', 'title', 'description', 'identifier'],
);

/**
 * Cast schema for mapping the Field application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const fieldRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      'DL:Bulk': raw['DL:Bulk'],
      'Data License': raw['Data License'],
      'Platform: Static': raw['Platform: Static'],
      'Platform: Streaming': raw['Platform: Streaming'],
      'Platform: Terminal Required': raw['Platform: Terminal Required'],
      'xsd:type': raw['xsd:type'],
      'YK: Commodity': raw['YK: Commodity'],
      'YK: Corporate': raw['YK: Corporate'],
      'YK: Currency': raw['YK: Currency'],
      'YK: Equity': raw['YK: Equity'],
      'YK: Index': raw['YK: Index'],
      'YK: Mortgage': raw['YK: Mortgage'],
      'YK: Money Market': raw['YK: Money Market'],
      'YK: Municipal': raw['YK: Municipal'],
      'YK: Preferred': raw['YK: Preferred'],
      'YK: US Government': raw['YK: US Government'],
      associatedEnums: raw['associatedEnums'],
      enumValues: raw['enumValues'],
      Created: raw['Created'],
      'DL Category': raw['DL Category'],
      'DL Actuals Available': raw['DL Actuals Available'],
      'DL Estimates Available': raw['DL Estimates Available'],
      'DL Adjusted Financials Available': raw['DL Adjusted Financials Available'],
      'DL Available in GetHistory': raw['DL Available in GetHistory'],
      'DL Commercial Model Category': raw['DL Commercial Model Category'],
      'DL: Extended Bulk': raw['DL: Extended Bulk'],
      'Field Id': raw['Field Id'],
      'Field Type': raw['Field Type'],
      IRI: raw['IRI'],
      'Is Abstract': raw['Is Abstract'],
      'Loading Speed': raw['Loading Speed'],
      Mnemonic: raw['Mnemonic'],
      'Old Mnemonic': raw['Old Mnemonic'],
      Range: raw['Range'],
      'SAPI New Security Setup': raw['SAPI New Security Setup'],
      'Standard Decimal Places': raw['Standard Decimal Places'],
      'Standard Width': raw['Standard Width'],
      SuperPropertyIRI: raw['SuperPropertyIRI'],
      'rdf:langString': raw['rdf:langString'],
      'xsd:fractionDigits': raw['xsd:fractionDigits'],
      'xsd:length': raw['xsd:length'],
      'xsd:maxExclusive': raw['xsd:maxExclusive'],
      'xsd:maxInclusive': raw['xsd:maxInclusive'],
      'xsd:maxLength': raw['xsd:maxLength'],
      'xsd:minExclusive': raw['xsd:minExclusive'],
      'xsd:minInclusive': raw['xsd:minInclusive'],
      'xsd:minLength': raw['xsd:minLength'],
      'xsd:pattern': raw['xsd:pattern'],
      retired: raw['retired'],
      bulkSchema: Array.isArray(raw['bulkSchema'])
        ? (raw['bulkSchema'] as any[]).map((v: any) =>
            v == null ? v : fieldListItemRequest.parse(v),
          )
        : (raw['bulkSchema'] as any),
    };
  },
  ['@context', '@id', '@type', 'title', 'description', 'identifier'],
);
