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
  HeadArchiveRequest,
  HeadArchivesRequest,
  HeadCatalogRequest,
  HeadCatalogsBbgPublishersPublisherNameRequest,
  HeadCatalogsBbgPublishersRequest,
  HeadCatalogsRequest,
  HeadDatasetRequest,
  HeadDatasetsRequest,
  HeadDistributionRequest,
  HeadDistributionsRequest,
  HeadFieldListRequest,
  HeadFieldListsRequest,
  HeadFieldRequest,
  HeadFieldsRequest,
  HeadOntologyRequest,
  HeadRequestFieldListRequest,
  HeadRequestRequest,
  HeadRequestTriggerRequest,
  HeadRequestUniverseListRequest,
  HeadRequestsRequest,
  HeadRootRequest,
  HeadSnapshotRequest,
  HeadSnapshotsRequest,
  HeadTriggerRequest,
  HeadTriggersRequest,
  HeadUniverseRequest,
  HeadUniversesRequest,
  OptionsArchiveRequest,
  OptionsArchivesRequest,
  OptionsCatalogRequest,
  OptionsCatalogsBbgPublishersPublisherNameRequest,
  OptionsCatalogsBbgPublishersRequest,
  OptionsCatalogsRequest,
  OptionsDatasetRequest,
  OptionsDatasetsRequest,
  OptionsDistributionRequest,
  OptionsDistributionsRequest,
  OptionsFieldListRequest,
  OptionsFieldListsRequest,
  OptionsFieldRequest,
  OptionsFieldsRequest,
  OptionsOntologyRequest,
  OptionsRequestFieldListRequest,
  OptionsRequestRequest,
  OptionsRequestTriggerRequest,
  OptionsRequestUniverseRequest,
  OptionsRequestsRequest,
  OptionsRootRequest,
  OptionsSnapshotRequest,
  OptionsSnapshotsRequest,
  OptionsTriggerRequest,
  OptionsTriggersRequest,
  OptionsUniverseRequest,
  OptionsUniversesRequest,
} from './request-params';
import { Status } from '../common/status';

export declare namespace MethodsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Methods operations.
 * Provides methods to interact with Methods-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class MethodsClient extends BaseService {
  protected headRootConfig?: Partial<BaseClientOptions>;

  protected optionsRootConfig?: Partial<BaseClientOptions>;

  protected headOntologyConfig?: Partial<BaseClientOptions>;

  protected optionsOntologyConfig?: Partial<BaseClientOptions>;

  protected headCatalogsConfig?: Partial<BaseClientOptions>;

  protected optionsCatalogsConfig?: Partial<BaseClientOptions>;

  protected headCatalogConfig?: Partial<BaseClientOptions>;

  protected optionsCatalogConfig?: Partial<BaseClientOptions>;

  protected headDatasetsConfig?: Partial<BaseClientOptions>;

  protected optionsDatasetsConfig?: Partial<BaseClientOptions>;

  protected headDatasetConfig?: Partial<BaseClientOptions>;

  protected optionsDatasetConfig?: Partial<BaseClientOptions>;

  protected headArchivesConfig?: Partial<BaseClientOptions>;

  protected optionsArchivesConfig?: Partial<BaseClientOptions>;

  protected headArchiveConfig?: Partial<BaseClientOptions>;

  protected optionsArchiveConfig?: Partial<BaseClientOptions>;

  protected headSnapshotsConfig?: Partial<BaseClientOptions>;

  protected optionsSnapshotsConfig?: Partial<BaseClientOptions>;

  protected headSnapshotConfig?: Partial<BaseClientOptions>;

  protected optionsSnapshotConfig?: Partial<BaseClientOptions>;

  protected headDistributionsConfig?: Partial<BaseClientOptions>;

  protected optionsDistributionsConfig?: Partial<BaseClientOptions>;

  protected headDistributionConfig?: Partial<BaseClientOptions>;

  protected optionsDistributionConfig?: Partial<BaseClientOptions>;

  protected headersForACollectionOfPublisherResourcesConfig?: Partial<BaseClientOptions>;

  protected optionsForACollectionOfPublisherResourcesConfig?: Partial<BaseClientOptions>;

  protected headersForMetadataForAPublisherConfig?: Partial<BaseClientOptions>;

  protected optionsForMetadataForAPublisherConfig?: Partial<BaseClientOptions>;

  protected headUniversesConfig?: Partial<BaseClientOptions>;

  protected optionsUniversesConfig?: Partial<BaseClientOptions>;

  protected headUniverseConfig?: Partial<BaseClientOptions>;

  protected optionsUniverseConfig?: Partial<BaseClientOptions>;

  protected headFieldListsConfig?: Partial<BaseClientOptions>;

  protected optionsFieldListsConfig?: Partial<BaseClientOptions>;

  protected headFieldListConfig?: Partial<BaseClientOptions>;

  protected optionsFieldListConfig?: Partial<BaseClientOptions>;

  protected headTriggersConfig?: Partial<BaseClientOptions>;

  protected optionsTriggersConfig?: Partial<BaseClientOptions>;

  protected headTriggerConfig?: Partial<BaseClientOptions>;

  protected optionsTriggerConfig?: Partial<BaseClientOptions>;

  protected headRequestsConfig?: Partial<BaseClientOptions>;

  protected optionsRequestsConfig?: Partial<BaseClientOptions>;

  protected headRequestConfig?: Partial<BaseClientOptions>;

  protected optionsRequestConfig?: Partial<BaseClientOptions>;

  protected headRequestUniverseListConfig?: Partial<BaseClientOptions>;

  protected optionsRequestUniverseConfig?: Partial<BaseClientOptions>;

  protected headRequestFieldListConfig?: Partial<BaseClientOptions>;

  protected optionsRequestFieldListConfig?: Partial<BaseClientOptions>;

  protected headRequestTriggerConfig?: Partial<BaseClientOptions>;

  protected optionsRequestTriggerConfig?: Partial<BaseClientOptions>;

  protected headFieldsConfig?: Partial<BaseClientOptions>;

  protected optionsFieldsConfig?: Partial<BaseClientOptions>;

  protected headFieldConfig?: Partial<BaseClientOptions>;

  protected optionsFieldConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for headRoot.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadRootConfig(config: Partial<BaseClientOptions>): this {
    this.headRootConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsRoot.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsRootConfig(config: Partial<BaseClientOptions>): this {
    this.optionsRootConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headOntology.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadOntologyConfig(config: Partial<BaseClientOptions>): this {
    this.headOntologyConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsOntology.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsOntologyConfig(config: Partial<BaseClientOptions>): this {
    this.optionsOntologyConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headCatalogs.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadCatalogsConfig(config: Partial<BaseClientOptions>): this {
    this.headCatalogsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsCatalogs.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsCatalogsConfig(config: Partial<BaseClientOptions>): this {
    this.optionsCatalogsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headCatalog.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadCatalogConfig(config: Partial<BaseClientOptions>): this {
    this.headCatalogConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsCatalog.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsCatalogConfig(config: Partial<BaseClientOptions>): this {
    this.optionsCatalogConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headDatasets.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadDatasetsConfig(config: Partial<BaseClientOptions>): this {
    this.headDatasetsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsDatasets.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsDatasetsConfig(config: Partial<BaseClientOptions>): this {
    this.optionsDatasetsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headDataset.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadDatasetConfig(config: Partial<BaseClientOptions>): this {
    this.headDatasetConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsDataset.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsDatasetConfig(config: Partial<BaseClientOptions>): this {
    this.optionsDatasetConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headArchives.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadArchivesConfig(config: Partial<BaseClientOptions>): this {
    this.headArchivesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsArchives.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsArchivesConfig(config: Partial<BaseClientOptions>): this {
    this.optionsArchivesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headArchive.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadArchiveConfig(config: Partial<BaseClientOptions>): this {
    this.headArchiveConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsArchive.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsArchiveConfig(config: Partial<BaseClientOptions>): this {
    this.optionsArchiveConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headSnapshots.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadSnapshotsConfig(config: Partial<BaseClientOptions>): this {
    this.headSnapshotsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsSnapshots.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsSnapshotsConfig(config: Partial<BaseClientOptions>): this {
    this.optionsSnapshotsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headSnapshot.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadSnapshotConfig(config: Partial<BaseClientOptions>): this {
    this.headSnapshotConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsSnapshot.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsSnapshotConfig(config: Partial<BaseClientOptions>): this {
    this.optionsSnapshotConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headDistributions.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadDistributionsConfig(config: Partial<BaseClientOptions>): this {
    this.headDistributionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsDistributions.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsDistributionsConfig(config: Partial<BaseClientOptions>): this {
    this.optionsDistributionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headDistribution.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadDistributionConfig(config: Partial<BaseClientOptions>): this {
    this.headDistributionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsDistribution.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsDistributionConfig(config: Partial<BaseClientOptions>): this {
    this.optionsDistributionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headersForACollectionOfPublisherResources.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadersForACollectionOfPublisherResourcesConfig(config: Partial<BaseClientOptions>): this {
    this.headersForACollectionOfPublisherResourcesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsForACollectionOfPublisherResources.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsForACollectionOfPublisherResourcesConfig(config: Partial<BaseClientOptions>): this {
    this.optionsForACollectionOfPublisherResourcesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headersForMetadataForAPublisher.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadersForMetadataForAPublisherConfig(config: Partial<BaseClientOptions>): this {
    this.headersForMetadataForAPublisherConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsForMetadataForAPublisher.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsForMetadataForAPublisherConfig(config: Partial<BaseClientOptions>): this {
    this.optionsForMetadataForAPublisherConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headUniverses.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadUniversesConfig(config: Partial<BaseClientOptions>): this {
    this.headUniversesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsUniverses.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsUniversesConfig(config: Partial<BaseClientOptions>): this {
    this.optionsUniversesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headUniverse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadUniverseConfig(config: Partial<BaseClientOptions>): this {
    this.headUniverseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsUniverse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsUniverseConfig(config: Partial<BaseClientOptions>): this {
    this.optionsUniverseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headFieldLists.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadFieldListsConfig(config: Partial<BaseClientOptions>): this {
    this.headFieldListsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsFieldLists.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsFieldListsConfig(config: Partial<BaseClientOptions>): this {
    this.optionsFieldListsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headFieldList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadFieldListConfig(config: Partial<BaseClientOptions>): this {
    this.headFieldListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsFieldList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsFieldListConfig(config: Partial<BaseClientOptions>): this {
    this.optionsFieldListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headTriggers.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadTriggersConfig(config: Partial<BaseClientOptions>): this {
    this.headTriggersConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsTriggers.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsTriggersConfig(config: Partial<BaseClientOptions>): this {
    this.optionsTriggersConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headTrigger.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadTriggerConfig(config: Partial<BaseClientOptions>): this {
    this.headTriggerConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsTrigger.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsTriggerConfig(config: Partial<BaseClientOptions>): this {
    this.optionsTriggerConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headRequests.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadRequestsConfig(config: Partial<BaseClientOptions>): this {
    this.headRequestsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsRequests.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsRequestsConfig(config: Partial<BaseClientOptions>): this {
    this.optionsRequestsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadRequestConfig(config: Partial<BaseClientOptions>): this {
    this.headRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsRequestConfig(config: Partial<BaseClientOptions>): this {
    this.optionsRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headRequestUniverseList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadRequestUniverseListConfig(config: Partial<BaseClientOptions>): this {
    this.headRequestUniverseListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsRequestUniverse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsRequestUniverseConfig(config: Partial<BaseClientOptions>): this {
    this.optionsRequestUniverseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headRequestFieldList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadRequestFieldListConfig(config: Partial<BaseClientOptions>): this {
    this.headRequestFieldListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsRequestFieldList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsRequestFieldListConfig(config: Partial<BaseClientOptions>): this {
    this.optionsRequestFieldListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headRequestTrigger.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadRequestTriggerConfig(config: Partial<BaseClientOptions>): this {
    this.headRequestTriggerConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsRequestTrigger.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsRequestTriggerConfig(config: Partial<BaseClientOptions>): this {
    this.optionsRequestTriggerConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headFields.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadFieldsConfig(config: Partial<BaseClientOptions>): this {
    this.headFieldsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsFields.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsFieldsConfig(config: Partial<BaseClientOptions>): this {
    this.optionsFieldsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headField.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadFieldConfig(config: Partial<BaseClientOptions>): this {
    this.headFieldConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for optionsField.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOptionsFieldConfig(config: Partial<BaseClientOptions>): this {
    this.optionsFieldConfig = config;
    return this;
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {CodeRustcApi.HeadRootRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headRoot(
    request: CodeRustcApi.HeadRootRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__headRoot(request, requestOptions));
  }
  private async __headRoot(
    request: CodeRustcApi.HeadRootRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headRootConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addHeaderParam({
        key: 'api-version',
        value: request['api-version'],
      })
      .addHeaderParam({
        key: 'JWT',
        value: request.JWT,
      })
      .addHeaderParam({
        key: 'Authorization',
        value: request.Authorization,
      })
      .build();
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {CodeRustcApi.OptionsRootRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsRoot(
    request: CodeRustcApi.OptionsRootRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__optionsRoot(request, requestOptions));
  }
  private async __optionsRoot(
    request: CodeRustcApi.OptionsRootRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsRootConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addHeaderParam({
        key: 'api-version',
        value: request['api-version'],
      })
      .addHeaderParam({
        key: 'JWT',
        value: request.JWT,
      })
      .addHeaderParam({
        key: 'Authorization',
        value: request.Authorization,
      })
      .build();
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {CodeRustcApi.HeadOntologyRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headOntology(
    request: CodeRustcApi.HeadOntologyRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__headOntology(request, requestOptions));
  }
  private async __headOntology(
    request: CodeRustcApi.HeadOntologyRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headOntologyConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/ontology')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 303,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {CodeRustcApi.OptionsOntologyRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsOntology(
    request: CodeRustcApi.OptionsOntologyRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__optionsOntology(request, requestOptions));
  }
  private async __optionsOntology(
    request: CodeRustcApi.OptionsOntologyRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsOntologyConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/ontology')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 303,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {CodeRustcApi.HeadCatalogsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headCatalogs(
    request: CodeRustcApi.HeadCatalogsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__headCatalogs(request, requestOptions));
  }
  private async __headCatalogs(
    request: CodeRustcApi.HeadCatalogsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headCatalogsConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 303,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {CodeRustcApi.OptionsCatalogsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsCatalogs(
    request: CodeRustcApi.OptionsCatalogsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__optionsCatalogs(request, requestOptions));
  }
  private async __optionsCatalogs(
    request: CodeRustcApi.OptionsCatalogsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsCatalogsConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 303,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.HeadCatalogRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headCatalog(
    catalog: string,
    request: CodeRustcApi.HeadCatalogRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__headCatalog(catalog, request, requestOptions));
  }
  private async __headCatalog(
    catalog: string,
    request: CodeRustcApi.HeadCatalogRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headCatalogConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.OptionsCatalogRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsCatalog(
    catalog: string,
    request: CodeRustcApi.OptionsCatalogRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__optionsCatalog(catalog, request, requestOptions));
  }
  private async __optionsCatalog(
    catalog: string,
    request: CodeRustcApi.OptionsCatalogRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsCatalogConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.HeadDatasetsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headDatasets(
    catalog: string,
    request: CodeRustcApi.HeadDatasetsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__headDatasets(catalog, request, requestOptions));
  }
  private async __headDatasets(
    catalog: string,
    request: CodeRustcApi.HeadDatasetsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headDatasetsConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/datasets/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.OptionsDatasetsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsDatasets(
    catalog: string,
    request: CodeRustcApi.OptionsDatasetsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsDatasets(catalog, request, requestOptions),
    );
  }
  private async __optionsDatasets(
    catalog: string,
    request: CodeRustcApi.OptionsDatasetsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsDatasetsConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/datasets/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {CodeRustcApi.HeadDatasetRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headDataset(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.HeadDatasetRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headDataset(catalog, dataset, request, requestOptions),
    );
  }
  private async __headDataset(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.HeadDatasetRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headDatasetConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/datasets/{dataset}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {CodeRustcApi.OptionsDatasetRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsDataset(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.OptionsDatasetRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsDataset(catalog, dataset, request, requestOptions),
    );
  }
  private async __optionsDataset(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.OptionsDatasetRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsDatasetConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/datasets/{dataset}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {CodeRustcApi.HeadArchivesRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headArchives(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.HeadArchivesRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headArchives(catalog, dataset, request, requestOptions),
    );
  }
  private async __headArchives(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.HeadArchivesRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headArchivesConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/datasets/{dataset}/archives/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {CodeRustcApi.OptionsArchivesRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsArchives(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.OptionsArchivesRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsArchives(catalog, dataset, request, requestOptions),
    );
  }
  private async __optionsArchives(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.OptionsArchivesRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsArchivesConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/datasets/{dataset}/archives/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {string} archiveName - Archive name
   * @param {CodeRustcApi.HeadArchiveRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headArchive(
    catalog: string,
    dataset: string,
    archiveName: string,
    request: CodeRustcApi.HeadArchiveRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headArchive(catalog, dataset, archiveName, request, requestOptions),
    );
  }
  private async __headArchive(
    catalog: string,
    dataset: string,
    archiveName: string,
    request: CodeRustcApi.HeadArchiveRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headArchiveConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/datasets/{dataset}/archives/{archiveName}')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
        key: 'archiveName',
        value: archiveName,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {string} archiveName - Archive name
   * @param {CodeRustcApi.OptionsArchiveRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsArchive(
    catalog: string,
    dataset: string,
    archiveName: string,
    request: CodeRustcApi.OptionsArchiveRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsArchive(catalog, dataset, archiveName, request, requestOptions),
    );
  }
  private async __optionsArchive(
    catalog: string,
    dataset: string,
    archiveName: string,
    request: CodeRustcApi.OptionsArchiveRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsArchiveConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/datasets/{dataset}/archives/{archiveName}')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
        key: 'archiveName',
        value: archiveName,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {CodeRustcApi.HeadSnapshotsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headSnapshots(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.HeadSnapshotsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headSnapshots(catalog, dataset, request, requestOptions),
    );
  }
  private async __headSnapshots(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.HeadSnapshotsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headSnapshotsConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/datasets/{dataset}/snapshots/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
      .addQueryParam({
        key: 'page',
        value: request.page,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {CodeRustcApi.OptionsSnapshotsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsSnapshots(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.OptionsSnapshotsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsSnapshots(catalog, dataset, request, requestOptions),
    );
  }
  private async __optionsSnapshots(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.OptionsSnapshotsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsSnapshotsConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/datasets/{dataset}/snapshots/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
      .addQueryParam({
        key: 'page',
        value: request.page,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {string} snapshot - Dataset snapshot identifier
   * @param {CodeRustcApi.HeadSnapshotRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headSnapshot(
    catalog: string,
    dataset: string,
    snapshot: string,
    request: CodeRustcApi.HeadSnapshotRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headSnapshot(catalog, dataset, snapshot, request, requestOptions),
    );
  }
  private async __headSnapshot(
    catalog: string,
    dataset: string,
    snapshot: string,
    request: CodeRustcApi.HeadSnapshotRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headSnapshotConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/datasets/{dataset}/snapshots/{snapshot}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {string} snapshot - Dataset snapshot identifier
   * @param {CodeRustcApi.OptionsSnapshotRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsSnapshot(
    catalog: string,
    dataset: string,
    snapshot: string,
    request: CodeRustcApi.OptionsSnapshotRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsSnapshot(catalog, dataset, snapshot, request, requestOptions),
    );
  }
  private async __optionsSnapshot(
    catalog: string,
    dataset: string,
    snapshot: string,
    request: CodeRustcApi.OptionsSnapshotRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsSnapshotConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/datasets/{dataset}/snapshots/{snapshot}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {string} snapshot - Dataset snapshot identifier
   * @param {CodeRustcApi.HeadDistributionsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headDistributions(
    catalog: string,
    dataset: string,
    snapshot: string,
    request: CodeRustcApi.HeadDistributionsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headDistributions(catalog, dataset, snapshot, request, requestOptions),
    );
  }
  private async __headDistributions(
    catalog: string,
    dataset: string,
    snapshot: string,
    request: CodeRustcApi.HeadDistributionsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headDistributionsConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/datasets/{dataset}/snapshots/{snapshot}/distributions/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {string} snapshot - Dataset snapshot identifier
   * @param {CodeRustcApi.OptionsDistributionsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsDistributions(
    catalog: string,
    dataset: string,
    snapshot: string,
    request: CodeRustcApi.OptionsDistributionsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsDistributions(catalog, dataset, snapshot, request, requestOptions),
    );
  }
  private async __optionsDistributions(
    catalog: string,
    dataset: string,
    snapshot: string,
    request: CodeRustcApi.OptionsDistributionsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsDistributionsConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/datasets/{dataset}/snapshots/{snapshot}/distributions/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {string} snapshot - Dataset snapshot identifier
   * @param {string} distributionName - Distribution name
   * @param {CodeRustcApi.HeadDistributionRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headDistribution(
    catalog: string,
    dataset: string,
    snapshot: string,
    distributionName: string,
    request: CodeRustcApi.HeadDistributionRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headDistribution(
        catalog,
        dataset,
        snapshot,
        distributionName,
        request,
        requestOptions,
      ),
    );
  }
  private async __headDistribution(
    catalog: string,
    dataset: string,
    snapshot: string,
    distributionName: string,
    request: CodeRustcApi.HeadDistributionRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headDistributionConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath(
        '/catalogs/{catalog}/datasets/{dataset}/snapshots/{snapshot}/distributions/{distributionName}',
      )
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {string} snapshot - Dataset snapshot identifier
   * @param {string} distributionName - Distribution name
   * @param {CodeRustcApi.OptionsDistributionRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsDistribution(
    catalog: string,
    dataset: string,
    snapshot: string,
    distributionName: string,
    request: CodeRustcApi.OptionsDistributionRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsDistribution(
        catalog,
        dataset,
        snapshot,
        distributionName,
        request,
        requestOptions,
      ),
    );
  }
  private async __optionsDistribution(
    catalog: string,
    dataset: string,
    snapshot: string,
    distributionName: string,
    request: CodeRustcApi.OptionsDistributionRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsDistributionConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath(
        '/catalogs/{catalog}/datasets/{dataset}/snapshots/{snapshot}/distributions/{distributionName}',
      )
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {CodeRustcApi.HeadCatalogsBbgPublishersRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headersForACollectionOfPublisherResources(
    request: CodeRustcApi.HeadCatalogsBbgPublishersRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headersForACollectionOfPublisherResources(request, requestOptions),
    );
  }
  private async __headersForACollectionOfPublisherResources(
    request: CodeRustcApi.HeadCatalogsBbgPublishersRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(
      this.headersForACollectionOfPublisherResourcesConfig,
      requestOptions,
    );
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
      .setMethod('HEAD')
      .setPath('/catalogs/bbg/publishers/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 303,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {CodeRustcApi.OptionsCatalogsBbgPublishersRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsForACollectionOfPublisherResources(
    request: CodeRustcApi.OptionsCatalogsBbgPublishersRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsForACollectionOfPublisherResources(request, requestOptions),
    );
  }
  private async __optionsForACollectionOfPublisherResources(
    request: CodeRustcApi.OptionsCatalogsBbgPublishersRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(
      this.optionsForACollectionOfPublisherResourcesConfig,
      requestOptions,
    );
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/bbg/publishers/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 303,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} publisherName - Publisher name
   * @param {CodeRustcApi.HeadCatalogsBbgPublishersPublisherNameRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headersForMetadataForAPublisher(
    publisherName: string,
    request: CodeRustcApi.HeadCatalogsBbgPublishersPublisherNameRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headersForMetadataForAPublisher(publisherName, request, requestOptions),
    );
  }
  private async __headersForMetadataForAPublisher(
    publisherName: string,
    request: CodeRustcApi.HeadCatalogsBbgPublishersPublisherNameRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(
      this.headersForMetadataForAPublisherConfig,
      requestOptions,
    );
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
      .setMethod('HEAD')
      .setPath('/catalogs/bbg/publishers/{publisherName}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} publisherName - Publisher name
   * @param {CodeRustcApi.OptionsCatalogsBbgPublishersPublisherNameRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsForMetadataForAPublisher(
    publisherName: string,
    request: CodeRustcApi.OptionsCatalogsBbgPublishersPublisherNameRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsForMetadataForAPublisher(publisherName, request, requestOptions),
    );
  }
  private async __optionsForMetadataForAPublisher(
    publisherName: string,
    request: CodeRustcApi.OptionsCatalogsBbgPublishersPublisherNameRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(
      this.optionsForMetadataForAPublisherConfig,
      requestOptions,
    );
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/bbg/publishers/{publisherName}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.HeadUniversesRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headUniverses(
    catalog: string,
    request: CodeRustcApi.HeadUniversesRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__headUniverses(catalog, request, requestOptions));
  }
  private async __headUniverses(
    catalog: string,
    request: CodeRustcApi.HeadUniversesRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headUniversesConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/universes/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.OptionsUniversesRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsUniverses(
    catalog: string,
    request: CodeRustcApi.OptionsUniversesRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsUniverses(catalog, request, requestOptions),
    );
  }
  private async __optionsUniverses(
    catalog: string,
    request: CodeRustcApi.OptionsUniversesRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsUniversesConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/universes/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} universeIdentifier - Universe identifier.
   * @param {CodeRustcApi.HeadUniverseRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headUniverse(
    catalog: string,
    universeIdentifier: string,
    request: CodeRustcApi.HeadUniverseRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headUniverse(catalog, universeIdentifier, request, requestOptions),
    );
  }
  private async __headUniverse(
    catalog: string,
    universeIdentifier: string,
    request: CodeRustcApi.HeadUniverseRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headUniverseConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/universes/{universeIdentifier}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'universeIdentifier',
        value: universeIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} universeIdentifier - Universe identifier.
   * @param {CodeRustcApi.OptionsUniverseRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsUniverse(
    catalog: string,
    universeIdentifier: string,
    request: CodeRustcApi.OptionsUniverseRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsUniverse(catalog, universeIdentifier, request, requestOptions),
    );
  }
  private async __optionsUniverse(
    catalog: string,
    universeIdentifier: string,
    request: CodeRustcApi.OptionsUniverseRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsUniverseConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/universes/{universeIdentifier}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'universeIdentifier',
        value: universeIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.HeadFieldListsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headFieldLists(
    catalog: string,
    request: CodeRustcApi.HeadFieldListsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__headFieldLists(catalog, request, requestOptions));
  }
  private async __headFieldLists(
    catalog: string,
    request: CodeRustcApi.HeadFieldListsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headFieldListsConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/fieldLists/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.OptionsFieldListsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsFieldLists(
    catalog: string,
    request: CodeRustcApi.OptionsFieldListsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsFieldLists(catalog, request, requestOptions),
    );
  }
  private async __optionsFieldLists(
    catalog: string,
    request: CodeRustcApi.OptionsFieldListsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsFieldListsConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/fieldLists/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} fieldListIdentifier - Field list identifier.
   * @param {CodeRustcApi.HeadFieldListRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headFieldList(
    catalog: string,
    fieldListIdentifier: string,
    request: CodeRustcApi.HeadFieldListRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headFieldList(catalog, fieldListIdentifier, request, requestOptions),
    );
  }
  private async __headFieldList(
    catalog: string,
    fieldListIdentifier: string,
    request: CodeRustcApi.HeadFieldListRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headFieldListConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/fieldLists/{fieldListIdentifier}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'fieldListIdentifier',
        value: fieldListIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} fieldListIdentifier - Field list identifier.
   * @param {CodeRustcApi.OptionsFieldListRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsFieldList(
    catalog: string,
    fieldListIdentifier: string,
    request: CodeRustcApi.OptionsFieldListRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsFieldList(catalog, fieldListIdentifier, request, requestOptions),
    );
  }
  private async __optionsFieldList(
    catalog: string,
    fieldListIdentifier: string,
    request: CodeRustcApi.OptionsFieldListRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsFieldListConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/fieldLists/{fieldListIdentifier}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'fieldListIdentifier',
        value: fieldListIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.HeadTriggersRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headTriggers(
    catalog: string,
    request: CodeRustcApi.HeadTriggersRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__headTriggers(catalog, request, requestOptions));
  }
  private async __headTriggers(
    catalog: string,
    request: CodeRustcApi.HeadTriggersRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headTriggersConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/triggers/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.OptionsTriggersRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsTriggers(
    catalog: string,
    request: CodeRustcApi.OptionsTriggersRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsTriggers(catalog, request, requestOptions),
    );
  }
  private async __optionsTriggers(
    catalog: string,
    request: CodeRustcApi.OptionsTriggersRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsTriggersConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/triggers/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} triggerIdentifier - Trigger identifier.
   * @param {CodeRustcApi.HeadTriggerRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headTrigger(
    catalog: string,
    triggerIdentifier: string,
    request: CodeRustcApi.HeadTriggerRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headTrigger(catalog, triggerIdentifier, request, requestOptions),
    );
  }
  private async __headTrigger(
    catalog: string,
    triggerIdentifier: string,
    request: CodeRustcApi.HeadTriggerRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headTriggerConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/triggers/{triggerIdentifier}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'triggerIdentifier',
        value: triggerIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} triggerIdentifier - Trigger identifier.
   * @param {CodeRustcApi.OptionsTriggerRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsTrigger(
    catalog: string,
    triggerIdentifier: string,
    request: CodeRustcApi.OptionsTriggerRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsTrigger(catalog, triggerIdentifier, request, requestOptions),
    );
  }
  private async __optionsTrigger(
    catalog: string,
    triggerIdentifier: string,
    request: CodeRustcApi.OptionsTriggerRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsTriggerConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/triggers/{triggerIdentifier}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'triggerIdentifier',
        value: triggerIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.HeadRequestsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headRequests(
    catalog: string,
    request: CodeRustcApi.HeadRequestsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__headRequests(catalog, request, requestOptions));
  }
  private async __headRequests(
    catalog: string,
    request: CodeRustcApi.HeadRequestsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headRequestsConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/requests/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.OptionsRequestsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsRequests(
    catalog: string,
    request: CodeRustcApi.OptionsRequestsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsRequests(catalog, request, requestOptions),
    );
  }
  private async __optionsRequests(
    catalog: string,
    request: CodeRustcApi.OptionsRequestsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsRequestsConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/requests/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} requestIdentifier - Request Identifier
   * @param {CodeRustcApi.HeadRequestRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.HeadRequestRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headRequest(catalog, requestIdentifier, request, requestOptions),
    );
  }
  private async __headRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.HeadRequestRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headRequestConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/requests/{requestIdentifier}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'requestIdentifier',
        value: requestIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} requestIdentifier - Request Identifier
   * @param {CodeRustcApi.OptionsRequestRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.OptionsRequestRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsRequest(catalog, requestIdentifier, request, requestOptions),
    );
  }
  private async __optionsRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.OptionsRequestRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsRequestConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/requests/{requestIdentifier}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'requestIdentifier',
        value: requestIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} requestIdentifier - Request Identifier
   * @param {CodeRustcApi.HeadRequestUniverseListRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headRequestUniverseList(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.HeadRequestUniverseListRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headRequestUniverseList(catalog, requestIdentifier, request, requestOptions),
    );
  }
  private async __headRequestUniverseList(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.HeadRequestUniverseListRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(
      this.headRequestUniverseListConfig,
      requestOptions,
    );
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/requests/{requestIdentifier}/universe/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'requestIdentifier',
        value: requestIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} requestIdentifier - Request Identifier
   * @param {CodeRustcApi.OptionsRequestUniverseRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsRequestUniverse(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.OptionsRequestUniverseRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsRequestUniverse(catalog, requestIdentifier, request, requestOptions),
    );
  }
  private async __optionsRequestUniverse(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.OptionsRequestUniverseRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(
      this.optionsRequestUniverseConfig,
      requestOptions,
    );
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/requests/{requestIdentifier}/universe/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'requestIdentifier',
        value: requestIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} requestIdentifier - Request Identifier
   * @param {CodeRustcApi.HeadRequestFieldListRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headRequestFieldList(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.HeadRequestFieldListRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headRequestFieldList(catalog, requestIdentifier, request, requestOptions),
    );
  }
  private async __headRequestFieldList(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.HeadRequestFieldListRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headRequestFieldListConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/requests/{requestIdentifier}/fieldList/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'requestIdentifier',
        value: requestIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} requestIdentifier - Request Identifier
   * @param {CodeRustcApi.OptionsRequestFieldListRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsRequestFieldList(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.OptionsRequestFieldListRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsRequestFieldList(catalog, requestIdentifier, request, requestOptions),
    );
  }
  private async __optionsRequestFieldList(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.OptionsRequestFieldListRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(
      this.optionsRequestFieldListConfig,
      requestOptions,
    );
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/requests/{requestIdentifier}/fieldList/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'requestIdentifier',
        value: requestIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} requestIdentifier - Request Identifier
   * @param {CodeRustcApi.HeadRequestTriggerRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headRequestTrigger(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.HeadRequestTriggerRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headRequestTrigger(catalog, requestIdentifier, request, requestOptions),
    );
  }
  private async __headRequestTrigger(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.HeadRequestTriggerRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headRequestTriggerConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/{catalog}/requests/{requestIdentifier}/trigger/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'requestIdentifier',
        value: requestIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} requestIdentifier - Request Identifier
   * @param {CodeRustcApi.OptionsRequestTriggerRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsRequestTrigger(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.OptionsRequestTriggerRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__optionsRequestTrigger(catalog, requestIdentifier, request, requestOptions),
    );
  }
  private async __optionsRequestTrigger(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.OptionsRequestTriggerRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsRequestTriggerConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/{catalog}/requests/{requestIdentifier}/trigger/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'requestIdentifier',
        value: requestIdentifier,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {CodeRustcApi.HeadFieldsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headFields(
    request: CodeRustcApi.HeadFieldsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__headFields(request, requestOptions));
  }
  private async __headFields(
    request: CodeRustcApi.HeadFieldsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headFieldsConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/bbg/fields/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 303,
      })
      .addQueryParam({
        key: 'page',
        value: request.page,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {CodeRustcApi.OptionsFieldsRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsFields(
    request: CodeRustcApi.OptionsFieldsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__optionsFields(request, requestOptions));
  }
  private async __optionsFields(
    request: CodeRustcApi.OptionsFieldsRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsFieldsConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/bbg/fields/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 303,
      })
      .addQueryParam({
        key: 'page',
        value: request.page,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.
   * @param {string} field - Field identifier. You can use either Mnemonic, Old Mnemonic, Clean Name or Field ID.
   * @param {CodeRustcApi.HeadFieldRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headField(
    field: string,
    request: CodeRustcApi.HeadFieldRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__headField(field, request, requestOptions));
  }
  private async __headField(
    field: string,
    request: CodeRustcApi.HeadFieldRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headFieldConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/bbg/fields/{field}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Returns the methods that are supported by this endpoint.
   * @param {string} field - Field identifier. You can use either Mnemonic, Old Mnemonic, Clean Name or Field ID.
   * @param {CodeRustcApi.OptionsFieldRequest} request
   * @param {MethodsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  optionsField(
    field: string,
    request: CodeRustcApi.OptionsFieldRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__optionsField(field, request, requestOptions));
  }
  private async __optionsField(
    field: string,
    request: CodeRustcApi.OptionsFieldRequest,
    requestOptions?: MethodsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.optionsFieldConfig, requestOptions);
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
      .setMethod('OPTIONS')
      .setPath('/catalogs/bbg/fields/{field}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
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
    return this.client.callWithRawResponse<void>(_request);
  }
}
