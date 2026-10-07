import * as core from '../../core';
import type * as CodeRustcApi from '../../api';
import { BaseService } from '../base-service';
import {
  BaseClientOptions,
  BaseRequestOptions,
  BinaryResponse,
  ContentType,
  HttpResponse,
} from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { CodeRustcApiError } from '../../http/errors/throwable-error';
import { HttpResponsePromise, WithRawResponse } from '../../http/response-promise';
import { Supplier, resolveHeaders } from '../../http/utils/supplier';
import { CodeRustcApiEnvironment } from '../../http/environment';
import { Distributions, distributionsResponse } from '../common/distributions';
import { Status, statusResponse } from '../common/status';
import { GetDistributionRequest, GetDistributionsRequest } from './request-params';

export declare namespace DistributionsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Distributions operations.
 * Provides methods to interact with Distributions-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class DistributionsClient extends BaseService {
  protected getDistributionsConfig?: Partial<BaseClientOptions>;

  protected getDistributionConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getDistributions.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetDistributionsConfig(config: Partial<BaseClientOptions>): this {
    this.getDistributionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getDistribution.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetDistributionConfig(config: Partial<BaseClientOptions>): this {
    this.getDistributionConfig = config;
    return this;
  }

  /**
 * A collection of downloadable [distribution](#tag/distribution) resources.Each [distribution](#tag/distributions) in the collection serializes a [snapshot](#tag/snapshots) as a different [media type](https://www.w3.org/TR/vocab-dcat-2/#Property:distribution_media_type) (content type), and is represented as a structure: the downloadable [distribution] itself; if it is a sample of the [snapshot](#tag/snapshots) (samples are accessible to all users); and if it is accessible with the requesting credentials.

 * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
 * @param {string} dataset - Dataset identifier
 * @param {string} snapshot - Dataset snapshot identifier
 * @param {CodeRustcApi.GetDistributionsRequest} request
 * @param {DistributionsClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CodeRustcApi.Distributions | CodeRustcApi.Status>} - Success
 */
  getDistributions(
    catalog: string,
    dataset: string,
    snapshot: string,
    request: CodeRustcApi.GetDistributionsRequest,
    requestOptions?: DistributionsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Distributions | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(
      this.__getDistributions(catalog, dataset, snapshot, request, requestOptions),
    );
  }
  private async __getDistributions(
    catalog: string,
    dataset: string,
    snapshot: string,
    request: CodeRustcApi.GetDistributionsRequest,
    requestOptions?: DistributionsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Distributions | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getDistributionsConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/datasets/{dataset}/snapshots/{snapshot}/distributions/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: distributionsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addResponse({
        schema: statusResponse,
        contentType: ContentType.Json,
        status: 303,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'dataset',
        value: dataset,
      })
      .addPathParam({
        key: 'snapshot',
        value: snapshot,
      })
      .addQueryParam({
        key: 'type',
        value: request.type,
        explode: false,
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
    return this.client.callWithRawResponse<CodeRustcApi.Distributions | CodeRustcApi.Status>(
      _request,
    );
  }

  /**
   * A downloadable serialization of [snapshot](#tag/snapshots) as a standard [media type](https://www.w3.org/TR/vocab-dcat-2/#Property:distribution_media_type) (content type).
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {string} snapshot - Dataset snapshot identifier
   * @param {string} distributionName - Distribution name
   * @param {CodeRustcApi.GetDistributionRequest} request
   * @param {DistributionsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<BinaryResponse | CodeRustcApi.Status>} - Success
   */
  getDistribution(
    catalog: string,
    dataset: string,
    snapshot: string,
    distributionName: string,
    request: CodeRustcApi.GetDistributionRequest,
    requestOptions?: DistributionsClient.RequestOptions,
  ): HttpResponsePromise<BinaryResponse | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(
      this.__getDistribution(catalog, dataset, snapshot, distributionName, request, requestOptions),
    );
  }
  private async __getDistribution(
    catalog: string,
    dataset: string,
    snapshot: string,
    distributionName: string,
    request: CodeRustcApi.GetDistributionRequest,
    requestOptions?: DistributionsClient.RequestOptions,
  ): Promise<WithRawResponse<BinaryResponse | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getDistributionConfig, requestOptions);
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
      .setPath(
        '/catalogs/{catalog}/datasets/{dataset}/snapshots/{snapshot}/distributions/{distributionName}',
      )
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.identity<unknown>(),
        contentType: ContentType.Binary,
        status: 200,
      })
      .addResponse({
        schema: core.cast.identity<unknown>(),
        contentType: ContentType.Binary,
        status: 206,
      })
      .addResponse({
        schema: statusResponse,
        contentType: ContentType.Json,
        status: 303,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'dataset',
        value: dataset,
      })
      .addPathParam({
        key: 'snapshot',
        value: snapshot,
      })
      .addPathParam({
        key: 'distributionName',
        value: distributionName,
      })
      .addHeaderParam({
        key: 'Range',
        value: request.Range,
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
    return this.client.callWithRawResponse<BinaryResponse | CodeRustcApi.Status>(_request);
  }
}
