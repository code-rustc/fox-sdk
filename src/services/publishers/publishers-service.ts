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
import {
  PublisherResourcesResponse,
  publisherResourcesResponseResponse,
} from './models/publisher-resources-response';
import { Status, statusResponse } from '../common/status';
import { PublisherMetadataRequest, PublisherResourcesRequest } from './request-params';
import {
  PublisherMetadataResponse,
  publisherMetadataResponseResponse,
} from './models/publisher-metadata-response';

export declare namespace PublishersClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Publishers operations.
 * Provides methods to interact with Publishers-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PublishersClient extends BaseService {
  protected publisherResourcesConfig?: Partial<BaseClientOptions>;

  protected publisherMetadataConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for publisherResources.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPublisherResourcesConfig(config: Partial<BaseClientOptions>): this {
    this.publisherResourcesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for publisherMetadata.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPublisherMetadataConfig(config: Partial<BaseClientOptions>): this {
    this.publisherMetadataConfig = config;
    return this;
  }

  /**
   * A collection of [(Dublin Core)](http://dublincore.org/documents/dcmi-terms/#terms-publisher) `Publishers`, which are used as a primary means of classifying each [Bulk Dataset](#tag/datasets) in the [Bloomberg Catalog](#tag/catalogs). `Publishers` are provided to support the exploration and discovery of [Bulk Datasets](#tag/datasets). Each [publisher](#tag/publishers) is annotated with a dataset count and facetted search URL to list the [datasets](#tag/datasets) offered by that [publisher](#tag/publishers).
   * @param {CodeRustcApi.PublisherResourcesRequest} request
   * @param {PublishersClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.PublisherResourcesResponse | CodeRustcApi.Status>} - A collection of publishers.
   */
  publisherResources(
    request: CodeRustcApi.PublisherResourcesRequest,
    requestOptions?: PublishersClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.PublisherResourcesResponse | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(this.__publisherResources(request, requestOptions));
  }
  private async __publisherResources(
    request: CodeRustcApi.PublisherResourcesRequest,
    requestOptions?: PublishersClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.PublisherResourcesResponse | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.publisherResourcesConfig, requestOptions);
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
      .setPath('/catalogs/bbg/publishers/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: publisherResourcesResponseResponse,
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
        key: 'sort',
        value: request.sort,
      })
      .addQueryParam({
        key: 'q',
        value: request.q,
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
    return this.client.callWithRawResponse<
      CodeRustcApi.PublisherResourcesResponse | CodeRustcApi.Status
    >(_request);
  }

  /**
 * A single [(Dublin Core)](http://dublincore.org/documents/dcmi-terms/#terms-publisher) `Publisher`, which exists to classify a group of [Bulk Datasets](#tag/datasets) in the [Bloomberg Catalog](#tag/catalogs).Each [publisher](#tag/publishers) is annotated with a dataset count and facetted search URL to list the [datasets](#tag/datasets) offered by that [publisher](#tag/publishers).

 * @param {string} publisherName - Publisher name
 * @param {CodeRustcApi.PublisherMetadataRequest} request
 * @param {PublishersClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CodeRustcApi.PublisherMetadataResponse>} - Metadata for a this Bloomberg publisher
 */
  publisherMetadata(
    publisherName: string,
    request: CodeRustcApi.PublisherMetadataRequest,
    requestOptions?: PublishersClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.PublisherMetadataResponse> {
    return HttpResponsePromise.fromPromise(
      this.__publisherMetadata(publisherName, request, requestOptions),
    );
  }
  private async __publisherMetadata(
    publisherName: string,
    request: CodeRustcApi.PublisherMetadataRequest,
    requestOptions?: PublishersClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.PublisherMetadataResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.publisherMetadataConfig, requestOptions);
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
      .setPath('/catalogs/bbg/publishers/{publisherName}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: publisherMetadataResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'publisherName',
        value: publisherName,
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
    return this.client.callWithRawResponse<CodeRustcApi.PublisherMetadataResponse>(_request);
  }
}
