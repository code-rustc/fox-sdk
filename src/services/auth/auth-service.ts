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
import { AuthGetTokenRequest, authGetTokenRequestRequest } from './models/auth-get-token-request';
import { GetTokenResponse, getTokenResponseResponse } from './models/get-token-response';

export declare namespace AuthClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Auth operations.
 * Provides methods to interact with Auth-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class AuthClient extends BaseService {
  protected getTokenConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getToken.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTokenConfig(config: Partial<BaseClientOptions>): this {
    this.getTokenConfig = config;
    return this;
  }

  /**
   * Obtain an OAuth2 access token using client credentials
   * @param {CodeRustcApi.AuthGetTokenRequest} request
   * @param {AuthClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.GetTokenResponse>} - Successful response
   */
  getToken(
    request: CodeRustcApi.AuthGetTokenRequest,
    requestOptions?: AuthClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.GetTokenResponse> {
    return HttpResponsePromise.fromPromise(this.__getToken(request, requestOptions));
  }
  private async __getToken(
    request: CodeRustcApi.AuthGetTokenRequest,
    requestOptions?: AuthClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.GetTokenResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getTokenConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ??
        (
          (await Supplier.get(resolvedConfig.environment)) ??
          (await Supplier.get(resolvedConfig.codeRustcApiEnvironment)) ??
          CodeRustcApiEnvironment.Production
        ).auth,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('POST')
      .setPath('/ext/api/as/token.oauth2')
      .setRequestSchema(authGetTokenRequestRequest)
      .setRequestContentType(ContentType.FormUrlEncoded)
      .addResponse({
        schema: getTokenResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/x-www-form-urlencoded' })
      .addBody(request)
      .build();
    return this.client.callWithRawResponse<CodeRustcApi.GetTokenResponse>(_request);
  }
}
