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
import { Status, statusResponse } from '../common/status';
import { GetOntologyRequest } from './request-params';

export declare namespace OntologyClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Ontology operations.
 * Provides methods to interact with Ontology-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class OntologyClient extends BaseService {
  protected getOntologyConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getOntology.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetOntologyConfig(config: Partial<BaseClientOptions>): this {
    this.getOntologyConfig = config;
    return this;
  }

  /**
   * A resource with a canonical URL which provides access to a [ttl serialization of the latest snapshot of the DATA&lt;GO&gt; Ontology](https://data.bloomberg.com/catalogs/bbg/datasets/beapOntology/snapshots/20200406/distributions/beapOntology.ttl)
   * @param {CodeRustcApi.GetOntologyRequest} request
   * @param {OntologyClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<BinaryResponse | CodeRustcApi.Status>} - Success
   */
  getOntology(
    request: CodeRustcApi.GetOntologyRequest,
    requestOptions?: OntologyClient.RequestOptions,
  ): HttpResponsePromise<BinaryResponse | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(this.__getOntology(request, requestOptions));
  }
  private async __getOntology(
    request: CodeRustcApi.GetOntologyRequest,
    requestOptions?: OntologyClient.RequestOptions,
  ): Promise<WithRawResponse<BinaryResponse | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getOntologyConfig, requestOptions);
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
      .setPath('/ontology')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.identity<unknown>(),
        contentType: ContentType.Binary,
        status: 200,
      })
      .addResponse({
        schema: statusResponse,
        contentType: ContentType.Json,
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
    return this.client.callWithRawResponse<BinaryResponse | CodeRustcApi.Status>(_request);
  }
}
