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
import { EntryPoint, entryPointResponse } from '../common/entry-point';
import { Status } from '../common/status';
import { GetRootRequest } from './request-params';

export declare namespace EntrypointClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Entrypoint operations.
 * Provides methods to interact with Entrypoint-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class EntrypointClient extends BaseService {
  protected getRootConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getRoot.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetRootConfig(config: Partial<BaseClientOptions>): this {
    this.getRootConfig = config;
    return this;
  }

  /**
   * The entryPoint lists available top-level resources. All available resources are organized within a container called  `catalogs`.
   * @param {CodeRustcApi.GetRootRequest} request
   * @param {EntrypointClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.EntryPoint>} - Success
   */
  getRoot(
    request: CodeRustcApi.GetRootRequest,
    requestOptions?: EntrypointClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.EntryPoint> {
    return HttpResponsePromise.fromPromise(this.__getRoot(request, requestOptions));
  }
  private async __getRoot(
    request: CodeRustcApi.GetRootRequest,
    requestOptions?: EntrypointClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.EntryPoint>> {
    const resolvedConfig = this.getResolvedConfig(this.getRootConfig, requestOptions);
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
      .setPath('/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: entryPointResponse,
        contentType: ContentType.Json,
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
    return this.client.callWithRawResponse<CodeRustcApi.EntryPoint>(_request);
  }
}
