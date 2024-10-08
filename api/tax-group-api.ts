/* tslint:disable */
/* eslint-disable */
/**
 * (v1.0) Dynamics 365 Business Central
 * (v1.0) Business Central Standard APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ListTaxGroups200Response } from '../model';
// @ts-ignore
import type { PostTaxGroupRequest } from '../model';
// @ts-ignore
import type { TaxGroup } from '../model';
/**
 * TaxGroupApi - axios parameter creator
 * @export
 */
export const TaxGroupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deletes an object of type taxGroup in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} taxGroupId (v1.0) id for taxGroup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTaxGroup: async (companyId: string, taxGroupId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('deleteTaxGroup', 'companyId', companyId)
            // verify required parameter 'taxGroupId' is not null or undefined
            assertParamExists('deleteTaxGroup', 'taxGroupId', taxGroupId)
            const localVarPath = `/companies({company_id})/taxGroups({taxGroup_id})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"taxGroup_id"}}`, encodeURIComponent(String(taxGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oAuth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth", ["Financials.ReadWrite.All"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type taxGroup for Dynamics 365 Business Central.
         * @param {string} companyId (v1.0) id for company
         * @param {string} taxGroupId (v1.0) id for taxGroup
         * @param {Array<GetTaxGroupSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaxGroup: async (companyId: string, taxGroupId: string, $select?: Array<GetTaxGroupSelectEnum>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getTaxGroup', 'companyId', companyId)
            // verify required parameter 'taxGroupId' is not null or undefined
            assertParamExists('getTaxGroup', 'taxGroupId', taxGroupId)
            const localVarPath = `/companies({company_id})/taxGroups({taxGroup_id})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"taxGroup_id"}}`, encodeURIComponent(String(taxGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oAuth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth", ["Financials.ReadWrite.All"], configuration)

            if ($select) {
                localVarQueryParameter['$select'] = $select.join(COLLECTION_FORMATS.csv);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Returns a list of taxGroups
         * @param {string} companyId (v1.0) id for company
         * @param {number} [$top] (v1.0) Number of items to return from the top of the list
         * @param {number} [$skip] (v1.0) Number of items to skip from the list
         * @param {number} [$limit] (v1.0) Number of items to return from the list
         * @param {string} [$filter] (v1.0) Filtering expression
         * @param {Array<ListTaxGroupsSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTaxGroups: async (companyId: string, $top?: number, $skip?: number, $limit?: number, $filter?: string, $select?: Array<ListTaxGroupsSelectEnum>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listTaxGroups', 'companyId', companyId)
            const localVarPath = `/companies({company_id})/taxGroups`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oAuth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth", ["Financials.ReadWrite.All"], configuration)

            if ($top !== undefined) {
                localVarQueryParameter['$top'] = $top;
            }

            if ($skip !== undefined) {
                localVarQueryParameter['$skip'] = $skip;
            }

            if ($limit !== undefined) {
                localVarQueryParameter['$limit'] = $limit;
            }

            if ($filter !== undefined) {
                localVarQueryParameter['$filter'] = $filter;
            }

            if ($select) {
                localVarQueryParameter['$select'] = $select.join(COLLECTION_FORMATS.csv);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates an object of type taxGroup in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} taxGroupId (v1.0) id for taxGroup
         * @param {string} contentType (v1.0) application/json
         * @param {string} ifMatch (v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.
         * @param {PostTaxGroupRequest} postTaxGroupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchTaxGroup: async (companyId: string, taxGroupId: string, contentType: string, ifMatch: string, postTaxGroupRequest: PostTaxGroupRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('patchTaxGroup', 'companyId', companyId)
            // verify required parameter 'taxGroupId' is not null or undefined
            assertParamExists('patchTaxGroup', 'taxGroupId', taxGroupId)
            // verify required parameter 'contentType' is not null or undefined
            assertParamExists('patchTaxGroup', 'contentType', contentType)
            // verify required parameter 'ifMatch' is not null or undefined
            assertParamExists('patchTaxGroup', 'ifMatch', ifMatch)
            // verify required parameter 'postTaxGroupRequest' is not null or undefined
            assertParamExists('patchTaxGroup', 'postTaxGroupRequest', postTaxGroupRequest)
            const localVarPath = `/companies({company_id})/taxGroups({taxGroup_id})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"taxGroup_id"}}`, encodeURIComponent(String(taxGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oAuth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth", ["Financials.ReadWrite.All"], configuration)

            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            if (ifMatch != null) {
                localVarHeaderParameter['If-Match'] = String(ifMatch);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postTaxGroupRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates an object of type taxGroup in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} contentType (v1.0) application/json
         * @param {PostTaxGroupRequest} postTaxGroupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTaxGroup: async (companyId: string, contentType: string, postTaxGroupRequest: PostTaxGroupRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('postTaxGroup', 'companyId', companyId)
            // verify required parameter 'contentType' is not null or undefined
            assertParamExists('postTaxGroup', 'contentType', contentType)
            // verify required parameter 'postTaxGroupRequest' is not null or undefined
            assertParamExists('postTaxGroup', 'postTaxGroupRequest', postTaxGroupRequest)
            const localVarPath = `/companies({company_id})/taxGroups`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oAuth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth", ["Financials.ReadWrite.All"], configuration)

            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postTaxGroupRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TaxGroupApi - functional programming interface
 * @export
 */
export const TaxGroupApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TaxGroupApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Deletes an object of type taxGroup in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} taxGroupId (v1.0) id for taxGroup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTaxGroup(companyId: string, taxGroupId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTaxGroup(companyId, taxGroupId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaxGroupApi.deleteTaxGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type taxGroup for Dynamics 365 Business Central.
         * @param {string} companyId (v1.0) id for company
         * @param {string} taxGroupId (v1.0) id for taxGroup
         * @param {Array<GetTaxGroupSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTaxGroup(companyId: string, taxGroupId: string, $select?: Array<GetTaxGroupSelectEnum>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaxGroup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTaxGroup(companyId, taxGroupId, $select, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaxGroupApi.getTaxGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Returns a list of taxGroups
         * @param {string} companyId (v1.0) id for company
         * @param {number} [$top] (v1.0) Number of items to return from the top of the list
         * @param {number} [$skip] (v1.0) Number of items to skip from the list
         * @param {number} [$limit] (v1.0) Number of items to return from the list
         * @param {string} [$filter] (v1.0) Filtering expression
         * @param {Array<ListTaxGroupsSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listTaxGroups(companyId: string, $top?: number, $skip?: number, $limit?: number, $filter?: string, $select?: Array<ListTaxGroupsSelectEnum>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListTaxGroups200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listTaxGroups(companyId, $top, $skip, $limit, $filter, $select, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaxGroupApi.listTaxGroups']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Updates an object of type taxGroup in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} taxGroupId (v1.0) id for taxGroup
         * @param {string} contentType (v1.0) application/json
         * @param {string} ifMatch (v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.
         * @param {PostTaxGroupRequest} postTaxGroupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchTaxGroup(companyId: string, taxGroupId: string, contentType: string, ifMatch: string, postTaxGroupRequest: PostTaxGroupRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaxGroup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchTaxGroup(companyId, taxGroupId, contentType, ifMatch, postTaxGroupRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaxGroupApi.patchTaxGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Creates an object of type taxGroup in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} contentType (v1.0) application/json
         * @param {PostTaxGroupRequest} postTaxGroupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postTaxGroup(companyId: string, contentType: string, postTaxGroupRequest: PostTaxGroupRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaxGroup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postTaxGroup(companyId, contentType, postTaxGroupRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaxGroupApi.postTaxGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TaxGroupApi - factory interface
 * @export
 */
export const TaxGroupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TaxGroupApiFp(configuration)
    return {
        /**
         * 
         * @summary Deletes an object of type taxGroup in Dynamics 365 Business Central
         * @param {TaxGroupApiDeleteTaxGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTaxGroup(requestParameters: TaxGroupApiDeleteTaxGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteTaxGroup(requestParameters.companyId, requestParameters.taxGroupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type taxGroup for Dynamics 365 Business Central.
         * @param {TaxGroupApiGetTaxGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaxGroup(requestParameters: TaxGroupApiGetTaxGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<TaxGroup> {
            return localVarFp.getTaxGroup(requestParameters.companyId, requestParameters.taxGroupId, requestParameters.$select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Returns a list of taxGroups
         * @param {TaxGroupApiListTaxGroupsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTaxGroups(requestParameters: TaxGroupApiListTaxGroupsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ListTaxGroups200Response> {
            return localVarFp.listTaxGroups(requestParameters.companyId, requestParameters.$top, requestParameters.$skip, requestParameters.$limit, requestParameters.$filter, requestParameters.$select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates an object of type taxGroup in Dynamics 365 Business Central
         * @param {TaxGroupApiPatchTaxGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchTaxGroup(requestParameters: TaxGroupApiPatchTaxGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<TaxGroup> {
            return localVarFp.patchTaxGroup(requestParameters.companyId, requestParameters.taxGroupId, requestParameters.contentType, requestParameters.ifMatch, requestParameters.postTaxGroupRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates an object of type taxGroup in Dynamics 365 Business Central
         * @param {TaxGroupApiPostTaxGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTaxGroup(requestParameters: TaxGroupApiPostTaxGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<TaxGroup> {
            return localVarFp.postTaxGroup(requestParameters.companyId, requestParameters.contentType, requestParameters.postTaxGroupRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteTaxGroup operation in TaxGroupApi.
 * @export
 * @interface TaxGroupApiDeleteTaxGroupRequest
 */
export interface TaxGroupApiDeleteTaxGroupRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof TaxGroupApiDeleteTaxGroup
     */
    readonly companyId: string

    /**
     * (v1.0) id for taxGroup
     * @type {string}
     * @memberof TaxGroupApiDeleteTaxGroup
     */
    readonly taxGroupId: string
}

/**
 * Request parameters for getTaxGroup operation in TaxGroupApi.
 * @export
 * @interface TaxGroupApiGetTaxGroupRequest
 */
export interface TaxGroupApiGetTaxGroupRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof TaxGroupApiGetTaxGroup
     */
    readonly companyId: string

    /**
     * (v1.0) id for taxGroup
     * @type {string}
     * @memberof TaxGroupApiGetTaxGroup
     */
    readonly taxGroupId: string

    /**
     * (v1.0) Selected properties to be retrieved
     * @type {Array<'id' | 'code' | 'displayName' | 'taxType' | 'lastModifiedDateTime'>}
     * @memberof TaxGroupApiGetTaxGroup
     */
    readonly $select?: Array<GetTaxGroupSelectEnum>
}

/**
 * Request parameters for listTaxGroups operation in TaxGroupApi.
 * @export
 * @interface TaxGroupApiListTaxGroupsRequest
 */
export interface TaxGroupApiListTaxGroupsRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof TaxGroupApiListTaxGroups
     */
    readonly companyId: string

    /**
     * (v1.0) Number of items to return from the top of the list
     * @type {number}
     * @memberof TaxGroupApiListTaxGroups
     */
    readonly $top?: number

    /**
     * (v1.0) Number of items to skip from the list
     * @type {number}
     * @memberof TaxGroupApiListTaxGroups
     */
    readonly $skip?: number

    /**
     * (v1.0) Number of items to return from the list
     * @type {number}
     * @memberof TaxGroupApiListTaxGroups
     */
    readonly $limit?: number

    /**
     * (v1.0) Filtering expression
     * @type {string}
     * @memberof TaxGroupApiListTaxGroups
     */
    readonly $filter?: string

    /**
     * (v1.0) Selected properties to be retrieved
     * @type {Array<'id' | 'code' | 'displayName' | 'taxType' | 'lastModifiedDateTime'>}
     * @memberof TaxGroupApiListTaxGroups
     */
    readonly $select?: Array<ListTaxGroupsSelectEnum>
}

/**
 * Request parameters for patchTaxGroup operation in TaxGroupApi.
 * @export
 * @interface TaxGroupApiPatchTaxGroupRequest
 */
export interface TaxGroupApiPatchTaxGroupRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof TaxGroupApiPatchTaxGroup
     */
    readonly companyId: string

    /**
     * (v1.0) id for taxGroup
     * @type {string}
     * @memberof TaxGroupApiPatchTaxGroup
     */
    readonly taxGroupId: string

    /**
     * (v1.0) application/json
     * @type {string}
     * @memberof TaxGroupApiPatchTaxGroup
     */
    readonly contentType: string

    /**
     * (v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.
     * @type {string}
     * @memberof TaxGroupApiPatchTaxGroup
     */
    readonly ifMatch: string

    /**
     * 
     * @type {PostTaxGroupRequest}
     * @memberof TaxGroupApiPatchTaxGroup
     */
    readonly postTaxGroupRequest: PostTaxGroupRequest
}

/**
 * Request parameters for postTaxGroup operation in TaxGroupApi.
 * @export
 * @interface TaxGroupApiPostTaxGroupRequest
 */
export interface TaxGroupApiPostTaxGroupRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof TaxGroupApiPostTaxGroup
     */
    readonly companyId: string

    /**
     * (v1.0) application/json
     * @type {string}
     * @memberof TaxGroupApiPostTaxGroup
     */
    readonly contentType: string

    /**
     * 
     * @type {PostTaxGroupRequest}
     * @memberof TaxGroupApiPostTaxGroup
     */
    readonly postTaxGroupRequest: PostTaxGroupRequest
}

/**
 * TaxGroupApi - object-oriented interface
 * @export
 * @class TaxGroupApi
 * @extends {BaseAPI}
 */
export class TaxGroupApi extends BaseAPI {
    /**
     * 
     * @summary Deletes an object of type taxGroup in Dynamics 365 Business Central
     * @param {TaxGroupApiDeleteTaxGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaxGroupApi
     */
    public deleteTaxGroup(requestParameters: TaxGroupApiDeleteTaxGroupRequest, options?: RawAxiosRequestConfig) {
        return TaxGroupApiFp(this.configuration).deleteTaxGroup(requestParameters.companyId, requestParameters.taxGroupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve the properties and relationships of an object of type taxGroup for Dynamics 365 Business Central.
     * @param {TaxGroupApiGetTaxGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaxGroupApi
     */
    public getTaxGroup(requestParameters: TaxGroupApiGetTaxGroupRequest, options?: RawAxiosRequestConfig) {
        return TaxGroupApiFp(this.configuration).getTaxGroup(requestParameters.companyId, requestParameters.taxGroupId, requestParameters.$select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Returns a list of taxGroups
     * @param {TaxGroupApiListTaxGroupsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaxGroupApi
     */
    public listTaxGroups(requestParameters: TaxGroupApiListTaxGroupsRequest, options?: RawAxiosRequestConfig) {
        return TaxGroupApiFp(this.configuration).listTaxGroups(requestParameters.companyId, requestParameters.$top, requestParameters.$skip, requestParameters.$limit, requestParameters.$filter, requestParameters.$select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates an object of type taxGroup in Dynamics 365 Business Central
     * @param {TaxGroupApiPatchTaxGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaxGroupApi
     */
    public patchTaxGroup(requestParameters: TaxGroupApiPatchTaxGroupRequest, options?: RawAxiosRequestConfig) {
        return TaxGroupApiFp(this.configuration).patchTaxGroup(requestParameters.companyId, requestParameters.taxGroupId, requestParameters.contentType, requestParameters.ifMatch, requestParameters.postTaxGroupRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Creates an object of type taxGroup in Dynamics 365 Business Central
     * @param {TaxGroupApiPostTaxGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaxGroupApi
     */
    public postTaxGroup(requestParameters: TaxGroupApiPostTaxGroupRequest, options?: RawAxiosRequestConfig) {
        return TaxGroupApiFp(this.configuration).postTaxGroup(requestParameters.companyId, requestParameters.contentType, requestParameters.postTaxGroupRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetTaxGroupSelectEnum = {
    Id: 'id',
    Code: 'code',
    DisplayName: 'displayName',
    TaxType: 'taxType',
    LastModifiedDateTime: 'lastModifiedDateTime'
} as const;
export type GetTaxGroupSelectEnum = typeof GetTaxGroupSelectEnum[keyof typeof GetTaxGroupSelectEnum];
/**
 * @export
 */
export const ListTaxGroupsSelectEnum = {
    Id: 'id',
    Code: 'code',
    DisplayName: 'displayName',
    TaxType: 'taxType',
    LastModifiedDateTime: 'lastModifiedDateTime'
} as const;
export type ListTaxGroupsSelectEnum = typeof ListTaxGroupsSelectEnum[keyof typeof ListTaxGroupsSelectEnum];
