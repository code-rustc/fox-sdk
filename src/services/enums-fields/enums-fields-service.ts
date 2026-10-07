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
import { EnumsResponseSchema, enumsResponseSchemaResponse } from '../common/enums-response-schema';
import { StatusV2 } from '../common/status-v2';
import { Status } from '../common/status';
import { GetEnumFieldsRequest, GetEnumValuesRequest, GetEnumsRequest } from './request-params';
import {
  EnumFieldsResponseSchema,
  enumFieldsResponseSchemaResponse,
} from '../common/enum-fields-response-schema';
import {
  EnumValuesResponseSchema,
  enumValuesResponseSchemaResponse,
} from '../common/enum-values-response-schema';

export declare namespace EnumsFieldsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for EnumsFields operations.
 * Provides methods to interact with EnumsFields-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class EnumsFieldsClient extends BaseService {
  protected getEnumsConfig?: Partial<BaseClientOptions>;

  protected getEnumFieldsConfig?: Partial<BaseClientOptions>;

  protected getEnumValuesConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getEnums.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEnumsConfig(config: Partial<BaseClientOptions>): this {
    this.getEnumsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getEnumFields.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEnumFieldsConfig(config: Partial<BaseClientOptions>): this {
    this.getEnumFieldsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getEnumValues.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEnumValuesConfig(config: Partial<BaseClientOptions>): this {
    this.getEnumValuesConfig = config;
    return this;
  }

  /**
   * Returns all enums and their definitions.
   * @param {CodeRustcApi.GetEnumsRequest} request
   * @param {EnumsFieldsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.EnumsResponseSchema>} - Success
   */
  getEnums(
    request: CodeRustcApi.GetEnumsRequest = {},
    requestOptions?: EnumsFieldsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.EnumsResponseSchema> {
    return HttpResponsePromise.fromPromise(this.__getEnums(request, requestOptions));
  }
  private async __getEnums(
    request: CodeRustcApi.GetEnumsRequest = {},
    requestOptions?: EnumsFieldsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.EnumsResponseSchema>> {
    const resolvedConfig = this.getResolvedConfig(this.getEnumsConfig, requestOptions);
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
      .setPath('/catalogs/bbg/enums')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: enumsResponseSchemaResponse,
        contentType: ContentType.Json,
        status: 200,
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
    return this.client.callWithRawResponse<CodeRustcApi.EnumsResponseSchema>(_request);
  }

  /**
   * Returns a list of all fields associated with a given enum, so you can identify which fields share the same set of values.
   * @param {string} enumName - The name of the enum or group of values that the field can have.
   * @param {CodeRustcApi.GetEnumFieldsRequest} request
   * @param {EnumsFieldsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.EnumFieldsResponseSchema>} - Success
   */
  getEnumFields(
    enumName: string,
    request: CodeRustcApi.GetEnumFieldsRequest = {},
    requestOptions?: EnumsFieldsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.EnumFieldsResponseSchema> {
    return HttpResponsePromise.fromPromise(this.__getEnumFields(enumName, request, requestOptions));
  }
  private async __getEnumFields(
    enumName: string,
    request: CodeRustcApi.GetEnumFieldsRequest = {},
    requestOptions?: EnumsFieldsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.EnumFieldsResponseSchema>> {
    const resolvedConfig = this.getResolvedConfig(this.getEnumFieldsConfig, requestOptions);
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
      .setPath('/catalogs/bbg/enums/{enum}/fields')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: enumFieldsResponseSchemaResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'enum',
        value: enumName,
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
    return this.client.callWithRawResponse<CodeRustcApi.EnumFieldsResponseSchema>(_request);
  }

  /**
   * Returns the possible values (i.e., `code` value and `description` value) that a given enum provides for each field.
   * @param {string} enumName - The name of the enum for which you want to see corresponding values.
   * @param {CodeRustcApi.GetEnumValuesRequest} request
   * @param {EnumsFieldsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.EnumValuesResponseSchema>} - Success
   */
  getEnumValues(
    enumName: string,
    request: CodeRustcApi.GetEnumValuesRequest = {},
    requestOptions?: EnumsFieldsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.EnumValuesResponseSchema> {
    return HttpResponsePromise.fromPromise(this.__getEnumValues(enumName, request, requestOptions));
  }
  private async __getEnumValues(
    enumName: string,
    request: CodeRustcApi.GetEnumValuesRequest = {},
    requestOptions?: EnumsFieldsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.EnumValuesResponseSchema>> {
    const resolvedConfig = this.getResolvedConfig(this.getEnumValuesConfig, requestOptions);
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
      .setPath('/catalogs/bbg/enums/{enum}/enumValues')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: enumValuesResponseSchemaResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'enum',
        value: enumName,
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
    return this.client.callWithRawResponse<CodeRustcApi.EnumValuesResponseSchema>(_request);
  }
}
