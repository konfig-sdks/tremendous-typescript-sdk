/* tslint:disable */
/* eslint-disable */
/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { FundingSourcesGetAll401Response } from '../models';
// @ts-ignore
import { FundingSourcesGetAll429Response } from '../models';
// @ts-ignore
import { FundingSourcesGetAll500Response } from '../models';
// @ts-ignore
import { FundingSourcesGetAllResponse } from '../models';
// @ts-ignore
import { FundingSourcesGetById401Response } from '../models';
// @ts-ignore
import { FundingSourcesGetById404Response } from '../models';
// @ts-ignore
import { FundingSourcesGetById429Response } from '../models';
// @ts-ignore
import { FundingSourcesGetById500Response } from '../models';
// @ts-ignore
import { FundingSourcesGetByIdResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * FundingSourcesApi - axios parameter creator
 * @export
 */
export const FundingSourcesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve a list of all funding sources available for ordering through the API in your organization\'s account. 
         * @summary List funding sources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/funding_sources`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerApiKey required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/funding_sources',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a funding source, identified by the given `id` in the URL 
         * @summary Retrieve funding source
         * @param {string} id ID of the funding source that should be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/funding_sources/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerApiKey required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/funding_sources/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FundingSourcesApi - functional programming interface
 * @export
 */
export const FundingSourcesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FundingSourcesApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieve a list of all funding sources available for ordering through the API in your organization\'s account. 
         * @summary List funding sources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FundingSourcesGetAllResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve a funding source, identified by the given `id` in the URL 
         * @summary Retrieve funding source
         * @param {FundingSourcesApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: FundingSourcesApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FundingSourcesGetByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FundingSourcesApi - factory interface
 * @export
 */
export const FundingSourcesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FundingSourcesApiFp(configuration)
    return {
        /**
         * Retrieve a list of all funding sources available for ordering through the API in your organization\'s account. 
         * @summary List funding sources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(options?: AxiosRequestConfig): AxiosPromise<FundingSourcesGetAllResponse> {
            return localVarFp.getAll(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a funding source, identified by the given `id` in the URL 
         * @summary Retrieve funding source
         * @param {FundingSourcesApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: FundingSourcesApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<FundingSourcesGetByIdResponse> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getById operation in FundingSourcesApi.
 * @export
 * @interface FundingSourcesApiGetByIdRequest
 */
export type FundingSourcesApiGetByIdRequest = {
    
    /**
    * ID of the funding source that should be retrieved
    * @type {string}
    * @memberof FundingSourcesApiGetById
    */
    readonly id: string
    
}

/**
 * FundingSourcesApiGenerated - object-oriented interface
 * @export
 * @class FundingSourcesApiGenerated
 * @extends {BaseAPI}
 */
export class FundingSourcesApiGenerated extends BaseAPI {
    /**
     * Retrieve a list of all funding sources available for ordering through the API in your organization\'s account. 
     * @summary List funding sources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FundingSourcesApiGenerated
     */
    public getAll(options?: AxiosRequestConfig) {
        return FundingSourcesApiFp(this.configuration).getAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a funding source, identified by the given `id` in the URL 
     * @summary Retrieve funding source
     * @param {FundingSourcesApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FundingSourcesApiGenerated
     */
    public getById(requestParameters: FundingSourcesApiGetByIdRequest, options?: AxiosRequestConfig) {
        return FundingSourcesApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
