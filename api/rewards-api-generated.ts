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
import { RewardsGenerateEmbedToken401Response } from '../models';
// @ts-ignore
import { RewardsGenerateEmbedToken404Response } from '../models';
// @ts-ignore
import { RewardsGenerateEmbedToken429Response } from '../models';
// @ts-ignore
import { RewardsGenerateEmbedToken500Response } from '../models';
// @ts-ignore
import { RewardsGenerateEmbedTokenResponse } from '../models';
// @ts-ignore
import { RewardsGenerateLink401Response } from '../models';
// @ts-ignore
import { RewardsGenerateLink403Response } from '../models';
// @ts-ignore
import { RewardsGenerateLink404Response } from '../models';
// @ts-ignore
import { RewardsGenerateLink429Response } from '../models';
// @ts-ignore
import { RewardsGenerateLink500Response } from '../models';
// @ts-ignore
import { RewardsGenerateLinkResponse } from '../models';
// @ts-ignore
import { RewardsGetSingleReward401Response } from '../models';
// @ts-ignore
import { RewardsGetSingleReward404Response } from '../models';
// @ts-ignore
import { RewardsGetSingleReward429Response } from '../models';
// @ts-ignore
import { RewardsGetSingleReward500Response } from '../models';
// @ts-ignore
import { RewardsGetSingleRewardResponse } from '../models';
// @ts-ignore
import { RewardsListAllRewards401Response } from '../models';
// @ts-ignore
import { RewardsListAllRewards429Response } from '../models';
// @ts-ignore
import { RewardsListAllRewards500Response } from '../models';
// @ts-ignore
import { RewardsListAllRewardsResponse } from '../models';
// @ts-ignore
import { RewardsResendRewardById401Response } from '../models';
// @ts-ignore
import { RewardsResendRewardById404Response } from '../models';
// @ts-ignore
import { RewardsResendRewardById422Response } from '../models';
// @ts-ignore
import { RewardsResendRewardById429Response } from '../models';
// @ts-ignore
import { RewardsResendRewardById500Response } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * RewardsApi - axios parameter creator
 * @export
 */
export const RewardsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Generate a temporary reward token identified by the `id` in the URL. These tokens are needed to render a reward when using [Tremendous Embed](https://github.com/tremendous-rewards/embed/blob/master/docs/documentation.md). The token is valid for 24 hours. 
         * @summary Generate a reward token
         * @param {string} id ID of the reward
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateEmbedToken: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('generateEmbedToken', 'id', id)
            const localVarPath = `/rewards/{id}/generate_embed_token`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
                pathTemplate: '/rewards/{id}/generate_embed_token',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Generate a redemption link for the reward identified by the `id` in the URL 
         * @summary Generate a reward URL
         * @param {string} id ID of the reward
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateLink: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('generateLink', 'id', id)
            const localVarPath = `/rewards/{id}/generate_link`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
                pathTemplate: '/rewards/{id}/generate_link',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve the reward, identified by the given `id` in the URL 
         * @summary Retrieve single reward
         * @param {string} id ID of the reward that should be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleReward: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSingleReward', 'id', id)
            const localVarPath = `/rewards/{id}`
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
                pathTemplate: '/rewards/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a list of all created rewards 
         * @summary List rewards
         * @param {number} [offset] Offsets the returned list by the given number of rewards. The returned rewards are ordered (and offsetted) by their creation date (DESC).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllRewards: async (offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/rewards`;
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
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/rewards',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Resends a reward, identified by the given `id` in the URL, to its recipient. 
         * @summary Resend reward
         * @param {string} id ID of the reward that should be resent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendRewardById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('resendRewardById', 'id', id)
            const localVarPath = `/rewards/{id}/resend`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
                pathTemplate: '/rewards/{id}/resend',
                httpMethod: 'POST'
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
 * RewardsApi - functional programming interface
 * @export
 */
export const RewardsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RewardsApiAxiosParamCreator(configuration)
    return {
        /**
         * Generate a temporary reward token identified by the `id` in the URL. These tokens are needed to render a reward when using [Tremendous Embed](https://github.com/tremendous-rewards/embed/blob/master/docs/documentation.md). The token is valid for 24 hours. 
         * @summary Generate a reward token
         * @param {RewardsApiGenerateEmbedTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateEmbedToken(requestParameters: RewardsApiGenerateEmbedTokenRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RewardsGenerateEmbedTokenResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateEmbedToken(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Generate a redemption link for the reward identified by the `id` in the URL 
         * @summary Generate a reward URL
         * @param {RewardsApiGenerateLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateLink(requestParameters: RewardsApiGenerateLinkRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RewardsGenerateLinkResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateLink(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve the reward, identified by the given `id` in the URL 
         * @summary Retrieve single reward
         * @param {RewardsApiGetSingleRewardRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSingleReward(requestParameters: RewardsApiGetSingleRewardRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RewardsGetSingleRewardResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSingleReward(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve a list of all created rewards 
         * @summary List rewards
         * @param {RewardsApiListAllRewardsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllRewards(requestParameters: RewardsApiListAllRewardsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RewardsListAllRewardsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllRewards(requestParameters.offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Resends a reward, identified by the given `id` in the URL, to its recipient. 
         * @summary Resend reward
         * @param {RewardsApiResendRewardByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resendRewardById(requestParameters: RewardsApiResendRewardByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resendRewardById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RewardsApi - factory interface
 * @export
 */
export const RewardsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RewardsApiFp(configuration)
    return {
        /**
         * Generate a temporary reward token identified by the `id` in the URL. These tokens are needed to render a reward when using [Tremendous Embed](https://github.com/tremendous-rewards/embed/blob/master/docs/documentation.md). The token is valid for 24 hours. 
         * @summary Generate a reward token
         * @param {RewardsApiGenerateEmbedTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateEmbedToken(requestParameters: RewardsApiGenerateEmbedTokenRequest, options?: AxiosRequestConfig): AxiosPromise<RewardsGenerateEmbedTokenResponse> {
            return localVarFp.generateEmbedToken(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Generate a redemption link for the reward identified by the `id` in the URL 
         * @summary Generate a reward URL
         * @param {RewardsApiGenerateLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateLink(requestParameters: RewardsApiGenerateLinkRequest, options?: AxiosRequestConfig): AxiosPromise<RewardsGenerateLinkResponse> {
            return localVarFp.generateLink(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve the reward, identified by the given `id` in the URL 
         * @summary Retrieve single reward
         * @param {RewardsApiGetSingleRewardRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleReward(requestParameters: RewardsApiGetSingleRewardRequest, options?: AxiosRequestConfig): AxiosPromise<RewardsGetSingleRewardResponse> {
            return localVarFp.getSingleReward(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of all created rewards 
         * @summary List rewards
         * @param {RewardsApiListAllRewardsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllRewards(requestParameters: RewardsApiListAllRewardsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<RewardsListAllRewardsResponse> {
            return localVarFp.listAllRewards(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Resends a reward, identified by the given `id` in the URL, to its recipient. 
         * @summary Resend reward
         * @param {RewardsApiResendRewardByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendRewardById(requestParameters: RewardsApiResendRewardByIdRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.resendRewardById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for generateEmbedToken operation in RewardsApi.
 * @export
 * @interface RewardsApiGenerateEmbedTokenRequest
 */
export type RewardsApiGenerateEmbedTokenRequest = {
    
    /**
    * ID of the reward
    * @type {string}
    * @memberof RewardsApiGenerateEmbedToken
    */
    readonly id: string
    
}

/**
 * Request parameters for generateLink operation in RewardsApi.
 * @export
 * @interface RewardsApiGenerateLinkRequest
 */
export type RewardsApiGenerateLinkRequest = {
    
    /**
    * ID of the reward
    * @type {string}
    * @memberof RewardsApiGenerateLink
    */
    readonly id: string
    
}

/**
 * Request parameters for getSingleReward operation in RewardsApi.
 * @export
 * @interface RewardsApiGetSingleRewardRequest
 */
export type RewardsApiGetSingleRewardRequest = {
    
    /**
    * ID of the reward that should be retrieved
    * @type {string}
    * @memberof RewardsApiGetSingleReward
    */
    readonly id: string
    
}

/**
 * Request parameters for listAllRewards operation in RewardsApi.
 * @export
 * @interface RewardsApiListAllRewardsRequest
 */
export type RewardsApiListAllRewardsRequest = {
    
    /**
    * Offsets the returned list by the given number of rewards. The returned rewards are ordered (and offsetted) by their creation date (DESC).
    * @type {number}
    * @memberof RewardsApiListAllRewards
    */
    readonly offset?: number
    
}

/**
 * Request parameters for resendRewardById operation in RewardsApi.
 * @export
 * @interface RewardsApiResendRewardByIdRequest
 */
export type RewardsApiResendRewardByIdRequest = {
    
    /**
    * ID of the reward that should be resent
    * @type {string}
    * @memberof RewardsApiResendRewardById
    */
    readonly id: string
    
}

/**
 * RewardsApiGenerated - object-oriented interface
 * @export
 * @class RewardsApiGenerated
 * @extends {BaseAPI}
 */
export class RewardsApiGenerated extends BaseAPI {
    /**
     * Generate a temporary reward token identified by the `id` in the URL. These tokens are needed to render a reward when using [Tremendous Embed](https://github.com/tremendous-rewards/embed/blob/master/docs/documentation.md). The token is valid for 24 hours. 
     * @summary Generate a reward token
     * @param {RewardsApiGenerateEmbedTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RewardsApiGenerated
     */
    public generateEmbedToken(requestParameters: RewardsApiGenerateEmbedTokenRequest, options?: AxiosRequestConfig) {
        return RewardsApiFp(this.configuration).generateEmbedToken(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Generate a redemption link for the reward identified by the `id` in the URL 
     * @summary Generate a reward URL
     * @param {RewardsApiGenerateLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RewardsApiGenerated
     */
    public generateLink(requestParameters: RewardsApiGenerateLinkRequest, options?: AxiosRequestConfig) {
        return RewardsApiFp(this.configuration).generateLink(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve the reward, identified by the given `id` in the URL 
     * @summary Retrieve single reward
     * @param {RewardsApiGetSingleRewardRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RewardsApiGenerated
     */
    public getSingleReward(requestParameters: RewardsApiGetSingleRewardRequest, options?: AxiosRequestConfig) {
        return RewardsApiFp(this.configuration).getSingleReward(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a list of all created rewards 
     * @summary List rewards
     * @param {RewardsApiListAllRewardsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RewardsApiGenerated
     */
    public listAllRewards(requestParameters: RewardsApiListAllRewardsRequest = {}, options?: AxiosRequestConfig) {
        return RewardsApiFp(this.configuration).listAllRewards(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resends a reward, identified by the given `id` in the URL, to its recipient. 
     * @summary Resend reward
     * @param {RewardsApiResendRewardByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RewardsApiGenerated
     */
    public resendRewardById(requestParameters: RewardsApiResendRewardByIdRequest, options?: AxiosRequestConfig) {
        return RewardsApiFp(this.configuration).resendRewardById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
