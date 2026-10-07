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
import { Datasets, datasetsResponse } from '../common/datasets';
import { Status, statusResponse } from '../common/status';
import { GetDatasetRequest, GetDatasetsRequest } from './request-params';
import { GetDatasetResponse, getDatasetResponseResponse } from './models/get-dataset-response';

export declare namespace DatasetsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Datasets operations.
 * Provides methods to interact with Datasets-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class DatasetsClient extends BaseService {
  protected getDatasetsConfig?: Partial<BaseClientOptions>;

  protected getDatasetConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getDatasets.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetDatasetsConfig(config: Partial<BaseClientOptions>): this {
    this.getDatasetsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getDataset.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetDatasetConfig(config: Partial<BaseClientOptions>): this {
    this.getDatasetConfig = config;
    return this;
  }

  /**
 * ## Bloomberg Catalog (Bulk Datasets)The [Bloomberg Catalog](#tag/catalogs) contains a collection of Bulk [datasets](#tag/datasets) defined and offered by Bloomberg Data License.

Access rights to Bulk `datasets` are determined through active subscriptions for the DL account that issued the requestor's credentials. Sample data is accessible for all Bulk `datasets`.

The `subscribed` property (which can be used as a query parameter) indicates if the requesting credentials are privileged to access non-sample [snapshots](#tag/snapshots) of each dataset.

## Account Catalog (Custom Datasets)
An [Account Catalog](#tag/catalogs) contains a collection of Bloomberg Data License responses ([datasets](#tag/datasets)) to the user defined [requests](#/tags/requests) that have been submitted to the same [catalog](#tag/catalogs).

Custom `datasets` are accessible to requestors using any credential issued by the DL account that submitted the [request](#tag/requests)

 * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
 * @param {CodeRustcApi.GetDatasetsRequest} request
 * @param {DatasetsClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CodeRustcApi.Datasets | CodeRustcApi.Status>} - Success
 */
  getDatasets(
    catalog: string,
    request: CodeRustcApi.GetDatasetsRequest,
    requestOptions?: DatasetsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Datasets | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(this.__getDatasets(catalog, request, requestOptions));
  }
  private async __getDatasets(
    catalog: string,
    request: CodeRustcApi.GetDatasetsRequest,
    requestOptions?: DatasetsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Datasets | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getDatasetsConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/datasets/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: datasetsResponse,
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
      .addQueryParam({
        key: 'subscribed',
        value: request.subscribed,
      })
      .addQueryParam({
        key: 'moduleLevel1',
        value: request.moduleLevel1,
      })
      .addQueryParam({
        key: 'moduleLevel2',
        value: request.moduleLevel2,
      })
      .addQueryParam({
        key: 'moduleLevel3',
        value: request.moduleLevel3,
      })
      .addQueryParam({
        key: 'universeLabel',
        value: request.universeLabel,
      })
      .addQueryParam({
        key: 'universeSubsetLabel',
        value: request.universeSubsetLabel,
      })
      .addQueryParam({
        key: 'publisher',
        value: request.publisher,
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
    return this.client.callWithRawResponse<CodeRustcApi.Datasets | CodeRustcApi.Status>(_request);
  }

  /**
 * ## Bulk DatasetIn the [Bloomberg Catalog](#tag/catalogs), a `dataset` is a class of publication, containing a time series of [snapshots](#tag/snapshots). Each [snapshot](#tag/snapshots) is a point in the time series, which represents a single publication of the `dataset`.

## Custom Dataset
In an [Account Catalog](#tag/catalogs), each `dataset` represents a response to a user defined [request](#/tags/request) in that [catalog](#tag/catalogs). The custom `dataset` and the [snapshots](#tag/snapshots) container within it are created at the moment a [request](#tag/requests) is created. Individual [snapshot](#tag/snapshots) resources are added to the [snapshots](#tag/snapshots) container each time the [request](#tags/requests) is executed.

 * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
 * @param {string} dataset - Dataset identifier
 * @param {CodeRustcApi.GetDatasetRequest} request
 * @param {DatasetsClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CodeRustcApi.GetDatasetResponse>} - Success
 */
  getDataset(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.GetDatasetRequest,
    requestOptions?: DatasetsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.GetDatasetResponse> {
    return HttpResponsePromise.fromPromise(
      this.__getDataset(catalog, dataset, request, requestOptions),
    );
  }
  private async __getDataset(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.GetDatasetRequest,
    requestOptions?: DatasetsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.GetDatasetResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getDatasetConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/datasets/{dataset}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getDatasetResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'dataset',
        value: dataset,
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
    return this.client.callWithRawResponse<CodeRustcApi.GetDatasetResponse>(_request);
  }
}
