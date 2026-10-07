import * as core from '../../core';
import type * as CodeRustcApi from '../../api';
import { BaseService } from '../base-service';
import { BaseClientOptions, BaseRequestOptions, ContentType, HttpResponse } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { CodeRustcApiError } from '../../http/errors/throwable-error';
import { HttpResponsePromise, WithRawResponse } from '../../http/response-promise';
import { Supplier, resolveHeaders } from '../../http/utils/supplier';
import { CodeRustcApiEnvironment } from '../../http/environment';
import { Fields, fieldsResponse } from '../common/fields';
import { Status, statusResponse } from '../common/status';
import {
  GetFieldEnumsRequest,
  GetFieldRequest,
  GetFieldValuesRequest,
  GetFieldsRequest,
} from './request-params';
import { Field, fieldResponse } from '../common/field';
import {
  FieldValuesResponseSchema,
  fieldValuesResponseSchemaResponse,
} from '../common/field-values-response-schema';
import { StatusV2 } from '../common/status-v2';
import {
  FieldEnumsResponseSchema,
  fieldEnumsResponseSchemaResponse,
} from '../common/field-enums-response-schema';

export declare namespace FieldsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Fields operations.
 * Provides methods to interact with Fields-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class FieldsClient extends BaseService {
  protected getFieldsConfig?: Partial<BaseClientOptions>;

  protected getFieldConfig?: Partial<BaseClientOptions>;

  protected getFieldValuesConfig?: Partial<BaseClientOptions>;

  protected getFieldEnumsConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getFields.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetFieldsConfig(config: Partial<BaseClientOptions>): this {
    this.getFieldsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getField.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetFieldConfig(config: Partial<BaseClientOptions>): this {
    this.getFieldConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getFieldValues.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetFieldValuesConfig(config: Partial<BaseClientOptions>): this {
    this.getFieldValuesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getFieldEnums.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetFieldEnumsConfig(config: Partial<BaseClientOptions>): this {
    this.getFieldEnumsConfig = config;
    return this;
  }

  /**
   * Returns all Bloomberg fields available under Data License (DL).
   * @param {CodeRustcApi.GetFieldsRequest} request
   * @param {FieldsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.Fields | CodeRustcApi.Status>} - Success
   */
  getFields(
    request: CodeRustcApi.GetFieldsRequest,
    requestOptions?: FieldsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Fields | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(this.__getFields(request, requestOptions));
  }
  private async __getFields(
    request: CodeRustcApi.GetFieldsRequest,
    requestOptions?: FieldsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Fields | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getFieldsConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ??
        (
          (await Supplier.get(resolvedConfig.environment)) ??
          (await Supplier.get(resolvedConfig.codeRustcApiEnvironment)) ??
          CodeRustcApiEnvironment.Production
        ).api,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/catalogs/bbg/fields/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: fieldsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addResponse({
        schema: statusResponse,
        contentType: ContentType.Json,
        status: 303,
      })
      .addQueryParam({
        key: 'page',
        value: request.page,
      })
      .addQueryParam({
        key: 'pageSize',
        value: request.pageSize,
      })
      .addQueryParam({
        key: 'properties',
        value: request.properties,
      })
      .addQueryParam({
        key: 'sort',
        value: request.sort,
      })
      .addQueryParam({
        key: 'q',
        value: request.q,
      })
      .addQueryParam({
        key: 'DL:Bulk',
        value: request['DL:Bulk'],
      })
      .addQueryParam({
        key: 'dlCommercialModelCategory',
        value: request.dlCommercialModelCategory,
      })
      .addQueryParam({
        key: 'dlAvailableInGetHistory',
        value: request.dlAvailableInGetHistory,
      })
      .addQueryParam({
        key: 'Data License',
        value: request['Data License'],
      })
      .addQueryParam({
        key: 'Platform: Static',
        value: request['Platform: Static'],
      })
      .addQueryParam({
        key: 'Platform: Streaming',
        value: request['Platform: Streaming'],
      })
      .addQueryParam({
        key: 'Platform: Terminal Required',
        value: request['Platform: Terminal Required'],
      })
      .addQueryParam({
        key: 'xsd:type',
        value: request['xsd:type'],
      })
      .addQueryParam({
        key: 'YK: Commodity',
        value: request['YK: Commodity'],
      })
      .addQueryParam({
        key: 'YK: Corporate',
        value: request['YK: Corporate'],
      })
      .addQueryParam({
        key: 'YK: Currency',
        value: request['YK: Currency'],
      })
      .addQueryParam({
        key: 'YK: Equity',
        value: request['YK: Equity'],
      })
      .addQueryParam({
        key: 'YK: Index',
        value: request['YK: Index'],
      })
      .addQueryParam({
        key: 'YK: Mortgage',
        value: request['YK: Mortgage'],
      })
      .addQueryParam({
        key: 'YK: Money Market',
        value: request['YK: Money Market'],
      })
      .addQueryParam({
        key: 'YK: Municipal',
        value: request['YK: Municipal'],
      })
      .addQueryParam({
        key: 'YK: Preferred',
        value: request['YK: Preferred'],
      })
      .addQueryParam({
        key: 'YK: US Government',
        value: request['YK: US Government'],
      })
      .addHeaderParam({
        key: 'api-version',
        value: request['api-version'],
      })
      .addHeaderParam({
        key: 'Authorization',
        value: request.Authorization,
      })
      .addHeaderParam({
        key: 'JWT',
        value: request.JWT,
      })
      .build();
    return this.client.callWithRawResponse<CodeRustcApi.Fields | CodeRustcApi.Status>(_request);
  }

  /**
 * Returns the latest metadata for a given Bloomberg DL field.
> **NOTE**
>
> If the field is an enumerated field (i.e. takes on a predefined set of values), your request returns an `enumValues` attribute which provides the endpoint where you can get the list of values.

 * @param {string} field - Field identifier. You can use either Mnemonic, Old Mnemonic, Clean Name or Field ID.
 * @param {CodeRustcApi.GetFieldRequest} request
 * @param {FieldsClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CodeRustcApi.Field>} - Success
 */
  getField(
    field: string,
    request: CodeRustcApi.GetFieldRequest,
    requestOptions?: FieldsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Field> {
    return HttpResponsePromise.fromPromise(this.__getField(field, request, requestOptions));
  }
  private async __getField(
    field: string,
    request: CodeRustcApi.GetFieldRequest,
    requestOptions?: FieldsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Field>> {
    const resolvedConfig = this.getResolvedConfig(this.getFieldConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ??
        (
          (await Supplier.get(resolvedConfig.environment)) ??
          (await Supplier.get(resolvedConfig.codeRustcApiEnvironment)) ??
          CodeRustcApiEnvironment.Production
        ).api,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/catalogs/bbg/fields/{field}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: fieldResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'field',
        value: field,
      })
      .addHeaderParam({
        key: 'api-version',
        value: request['api-version'],
      })
      .addHeaderParam({
        key: 'Authorization',
        value: request.Authorization,
      })
      .addHeaderParam({
        key: 'JWT',
        value: request.JWT,
      })
      .build();
    return this.client.callWithRawResponse<CodeRustcApi.Field>(_request);
  }

  /**
   * Returns all the values that an `enumerated field` may take. The values can come from [one or more enums associated with the field](#tag/fields/operation/getFieldEnums).
   * @param {string} field - The field for which you want to see all enum values. You can use either Mnemonic, Old Mnemonic, Clean Name or Field ID.
   * @param {CodeRustcApi.GetFieldValuesRequest} request
   * @param {FieldsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.FieldValuesResponseSchema>} - Success
   */
  getFieldValues(
    field: string,
    request: CodeRustcApi.GetFieldValuesRequest = {},
    requestOptions?: FieldsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.FieldValuesResponseSchema> {
    return HttpResponsePromise.fromPromise(this.__getFieldValues(field, request, requestOptions));
  }
  private async __getFieldValues(
    field: string,
    request: CodeRustcApi.GetFieldValuesRequest = {},
    requestOptions?: FieldsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.FieldValuesResponseSchema>> {
    const resolvedConfig = this.getResolvedConfig(this.getFieldValuesConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ??
        (
          (await Supplier.get(resolvedConfig.environment)) ??
          (await Supplier.get(resolvedConfig.codeRustcApiEnvironment)) ??
          CodeRustcApiEnvironment.Production
        ).api,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/catalogs/bbg/fields/{field}/enumValues')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: fieldValuesResponseSchemaResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'field',
        value: field,
      })
      .addQueryParam({
        key: 'page',
        value: request.page,
      })
      .addQueryParam({
        key: 'pageSize',
        value: request.pageSize,
      })
      .addHeaderParam({
        key: 'Authorization',
        value: request.Authorization,
      })
      .addHeaderParam({
        key: 'JWT',
        value: request.JWT,
      })
      .build();
    return this.client.callWithRawResponse<CodeRustcApi.FieldValuesResponseSchema>(_request);
  }

  /**
   * Returns all the enums associated with a given field. An enum is essentially a set of `code`, `description` pairs. The `lookupBy` attribute indicates whether the `code` or the `description` of each associated enum is used as a `field value`.
   * @param {string} field - The field for which you want to see enums. You can use either Mnemonic, Old Mnemonic, Clean Name or Field ID.
   * @param {CodeRustcApi.GetFieldEnumsRequest} request
   * @param {FieldsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.FieldEnumsResponseSchema>} - Success
   */
  getFieldEnums(
    field: string,
    request: CodeRustcApi.GetFieldEnumsRequest = {},
    requestOptions?: FieldsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.FieldEnumsResponseSchema> {
    return HttpResponsePromise.fromPromise(this.__getFieldEnums(field, request, requestOptions));
  }
  private async __getFieldEnums(
    field: string,
    request: CodeRustcApi.GetFieldEnumsRequest = {},
    requestOptions?: FieldsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.FieldEnumsResponseSchema>> {
    const resolvedConfig = this.getResolvedConfig(this.getFieldEnumsConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ??
        (
          (await Supplier.get(resolvedConfig.environment)) ??
          (await Supplier.get(resolvedConfig.codeRustcApiEnvironment)) ??
          CodeRustcApiEnvironment.Production
        ).api,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/catalogs/bbg/fields/{field}/enums')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: fieldEnumsResponseSchemaResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'field',
        value: field,
      })
      .addQueryParam({
        key: 'page',
        value: request.page,
      })
      .addQueryParam({
        key: 'pageSize',
        value: request.pageSize,
      })
      .addHeaderParam({
        key: 'Authorization',
        value: request.Authorization,
      })
      .addHeaderParam({
        key: 'JWT',
        value: request.JWT,
      })
      .build();
    return this.client.callWithRawResponse<CodeRustcApi.FieldEnumsResponseSchema>(_request);
  }
}
