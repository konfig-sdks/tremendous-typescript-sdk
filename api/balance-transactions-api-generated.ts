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
import { BalanceTransactionsListAll401Response } from '../models';
// @ts-ignore
import { BalanceTransactionsListAll422Response } from '../models';
// @ts-ignore
import { BalanceTransactionsListAll429Response } from '../models';
// @ts-ignore
import { BalanceTransactionsListAll500Response } from '../models';
// @ts-ignore
import { BalanceTransactionsListAllResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * BalanceTransactionsApi - axios parameter creator
 * @export
 */
export const BalanceTransactionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetch a list of all balance transactions on your account. 
         * @summary List balance transactions
         * @param {number} [offset] Offsets the returned list by the given number of transactions. The returned transactions are ordered (and offsetted) by their creation date (DESC).
         * @param {number} [limit] Limits the number of transactions listed. The default value is 10.
         * @param {string} [createdAtGte] Only return results where the created_at field is greater than or equal to the supplied value. The string needs to be an ISO 8601 datetime.
         * @param {string} [createdAtLte] Only return results where the created_at field is less than or equal to the supplied value. The string needs to be an ISO 8601 datetime.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (offset?: number, limit?: number, createdAtGte?: string, createdAtLte?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/balance_transactions`;
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

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (createdAtGte !== undefined) {
                localVarQueryParameter['created_at[gte]'] = createdAtGte;
            }

            if (createdAtLte !== undefined) {
                localVarQueryParameter['created_at[lte]'] = createdAtLte;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/balance_transactions',
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
 * BalanceTransactionsApi - functional programming interface
 * @export
 */
export const BalanceTransactionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BalanceTransactionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Fetch a list of all balance transactions on your account. 
         * @summary List balance transactions
         * @param {BalanceTransactionsApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(requestParameters: BalanceTransactionsApiListAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BalanceTransactionsListAllResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(requestParameters.offset, requestParameters.limit, requestParameters.createdAtGte, requestParameters.createdAtLte, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BalanceTransactionsApi - factory interface
 * @export
 */
export const BalanceTransactionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BalanceTransactionsApiFp(configuration)
    return {
        /**
         * Fetch a list of all balance transactions on your account. 
         * @summary List balance transactions
         * @param {BalanceTransactionsApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(requestParameters: BalanceTransactionsApiListAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<BalanceTransactionsListAllResponse> {
            return localVarFp.listAll(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listAll operation in BalanceTransactionsApi.
 * @export
 * @interface BalanceTransactionsApiListAllRequest
 */
export type BalanceTransactionsApiListAllRequest = {
    
    /**
    * Offsets the returned list by the given number of transactions. The returned transactions are ordered (and offsetted) by their creation date (DESC).
    * @type {number}
    * @memberof BalanceTransactionsApiListAll
    */
    readonly offset?: number
    
    /**
    * Limits the number of transactions listed. The default value is 10.
    * @type {number}
    * @memberof BalanceTransactionsApiListAll
    */
    readonly limit?: number
    
    /**
    * Only return results where the created_at field is greater than or equal to the supplied value. The string needs to be an ISO 8601 datetime.
    * @type {string}
    * @memberof BalanceTransactionsApiListAll
    */
    readonly createdAtGte?: string
    
    /**
    * Only return results where the created_at field is less than or equal to the supplied value. The string needs to be an ISO 8601 datetime.
    * @type {string}
    * @memberof BalanceTransactionsApiListAll
    */
    readonly createdAtLte?: string
    
}

/**
 * BalanceTransactionsApiGenerated - object-oriented interface
 * @export
 * @class BalanceTransactionsApiGenerated
 * @extends {BaseAPI}
 */
export class BalanceTransactionsApiGenerated extends BaseAPI {
    /**
     * Fetch a list of all balance transactions on your account. 
     * @summary List balance transactions
     * @param {BalanceTransactionsApiListAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BalanceTransactionsApiGenerated
     */
    public listAll(requestParameters: BalanceTransactionsApiListAllRequest = {}, options?: AxiosRequestConfig) {
        return BalanceTransactionsApiFp(this.configuration).listAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
