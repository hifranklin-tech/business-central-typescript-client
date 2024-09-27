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
import type { ItemCategory } from '../model';
// @ts-ignore
import type { ListItemCategories200Response } from '../model';
// @ts-ignore
import type { PostItemCategoryRequest } from '../model';
/**
 * ItemCategoryApi - axios parameter creator
 * @export
 */
export const ItemCategoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deletes an object of type itemCategory in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} itemCategoryId (v1.0) id for itemCategory
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteItemCategory: async (companyId: string, itemCategoryId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('deleteItemCategory', 'companyId', companyId)
            // verify required parameter 'itemCategoryId' is not null or undefined
            assertParamExists('deleteItemCategory', 'itemCategoryId', itemCategoryId)
            const localVarPath = `/companies({company_id})/itemCategories({itemCategory_id})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"itemCategory_id"}}`, encodeURIComponent(String(itemCategoryId)));
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
         * @summary Retrieve the properties and relationships of an object of type itemCategory for Dynamics 365 Business Central.
         * @param {string} companyId (v1.0) id for company
         * @param {string} itemCategoryId (v1.0) id for itemCategory
         * @param {Array<GetItemCategorySelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemCategory: async (companyId: string, itemCategoryId: string, $select?: Array<GetItemCategorySelectEnum>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getItemCategory', 'companyId', companyId)
            // verify required parameter 'itemCategoryId' is not null or undefined
            assertParamExists('getItemCategory', 'itemCategoryId', itemCategoryId)
            const localVarPath = `/companies({company_id})/itemCategories({itemCategory_id})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"itemCategory_id"}}`, encodeURIComponent(String(itemCategoryId)));
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
         * @summary Returns a list of itemCategories
         * @param {string} companyId (v1.0) id for company
         * @param {number} [$top] (v1.0) Number of items to return from the top of the list
         * @param {number} [$skip] (v1.0) Number of items to skip from the list
         * @param {number} [$limit] (v1.0) Number of items to return from the list
         * @param {string} [$filter] (v1.0) Filtering expression
         * @param {Array<ListItemCategoriesSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listItemCategories: async (companyId: string, $top?: number, $skip?: number, $limit?: number, $filter?: string, $select?: Array<ListItemCategoriesSelectEnum>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listItemCategories', 'companyId', companyId)
            const localVarPath = `/companies({company_id})/itemCategories`
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
         * @summary Updates an object of type itemCategory in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} itemCategoryId (v1.0) id for itemCategory
         * @param {string} contentType (v1.0) application/json
         * @param {string} ifMatch (v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.
         * @param {PostItemCategoryRequest} postItemCategoryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchItemCategory: async (companyId: string, itemCategoryId: string, contentType: string, ifMatch: string, postItemCategoryRequest: PostItemCategoryRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('patchItemCategory', 'companyId', companyId)
            // verify required parameter 'itemCategoryId' is not null or undefined
            assertParamExists('patchItemCategory', 'itemCategoryId', itemCategoryId)
            // verify required parameter 'contentType' is not null or undefined
            assertParamExists('patchItemCategory', 'contentType', contentType)
            // verify required parameter 'ifMatch' is not null or undefined
            assertParamExists('patchItemCategory', 'ifMatch', ifMatch)
            // verify required parameter 'postItemCategoryRequest' is not null or undefined
            assertParamExists('patchItemCategory', 'postItemCategoryRequest', postItemCategoryRequest)
            const localVarPath = `/companies({company_id})/itemCategories({itemCategory_id})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"itemCategory_id"}}`, encodeURIComponent(String(itemCategoryId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(postItemCategoryRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates an object of type itemCategory in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} contentType (v1.0) application/json
         * @param {PostItemCategoryRequest} postItemCategoryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postItemCategory: async (companyId: string, contentType: string, postItemCategoryRequest: PostItemCategoryRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('postItemCategory', 'companyId', companyId)
            // verify required parameter 'contentType' is not null or undefined
            assertParamExists('postItemCategory', 'contentType', contentType)
            // verify required parameter 'postItemCategoryRequest' is not null or undefined
            assertParamExists('postItemCategory', 'postItemCategoryRequest', postItemCategoryRequest)
            const localVarPath = `/companies({company_id})/itemCategories`
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
            localVarRequestOptions.data = serializeDataIfNeeded(postItemCategoryRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ItemCategoryApi - functional programming interface
 * @export
 */
export const ItemCategoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ItemCategoryApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Deletes an object of type itemCategory in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} itemCategoryId (v1.0) id for itemCategory
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteItemCategory(companyId: string, itemCategoryId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteItemCategory(companyId, itemCategoryId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ItemCategoryApi.deleteItemCategory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type itemCategory for Dynamics 365 Business Central.
         * @param {string} companyId (v1.0) id for company
         * @param {string} itemCategoryId (v1.0) id for itemCategory
         * @param {Array<GetItemCategorySelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemCategory(companyId: string, itemCategoryId: string, $select?: Array<GetItemCategorySelectEnum>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ItemCategory>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemCategory(companyId, itemCategoryId, $select, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ItemCategoryApi.getItemCategory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Returns a list of itemCategories
         * @param {string} companyId (v1.0) id for company
         * @param {number} [$top] (v1.0) Number of items to return from the top of the list
         * @param {number} [$skip] (v1.0) Number of items to skip from the list
         * @param {number} [$limit] (v1.0) Number of items to return from the list
         * @param {string} [$filter] (v1.0) Filtering expression
         * @param {Array<ListItemCategoriesSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listItemCategories(companyId: string, $top?: number, $skip?: number, $limit?: number, $filter?: string, $select?: Array<ListItemCategoriesSelectEnum>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListItemCategories200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listItemCategories(companyId, $top, $skip, $limit, $filter, $select, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ItemCategoryApi.listItemCategories']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Updates an object of type itemCategory in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} itemCategoryId (v1.0) id for itemCategory
         * @param {string} contentType (v1.0) application/json
         * @param {string} ifMatch (v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.
         * @param {PostItemCategoryRequest} postItemCategoryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchItemCategory(companyId: string, itemCategoryId: string, contentType: string, ifMatch: string, postItemCategoryRequest: PostItemCategoryRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ItemCategory>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchItemCategory(companyId, itemCategoryId, contentType, ifMatch, postItemCategoryRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ItemCategoryApi.patchItemCategory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Creates an object of type itemCategory in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} contentType (v1.0) application/json
         * @param {PostItemCategoryRequest} postItemCategoryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postItemCategory(companyId: string, contentType: string, postItemCategoryRequest: PostItemCategoryRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ItemCategory>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postItemCategory(companyId, contentType, postItemCategoryRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ItemCategoryApi.postItemCategory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ItemCategoryApi - factory interface
 * @export
 */
export const ItemCategoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ItemCategoryApiFp(configuration)
    return {
        /**
         * 
         * @summary Deletes an object of type itemCategory in Dynamics 365 Business Central
         * @param {ItemCategoryApiDeleteItemCategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteItemCategory(requestParameters: ItemCategoryApiDeleteItemCategoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteItemCategory(requestParameters.companyId, requestParameters.itemCategoryId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type itemCategory for Dynamics 365 Business Central.
         * @param {ItemCategoryApiGetItemCategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemCategory(requestParameters: ItemCategoryApiGetItemCategoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<ItemCategory> {
            return localVarFp.getItemCategory(requestParameters.companyId, requestParameters.itemCategoryId, requestParameters.$select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Returns a list of itemCategories
         * @param {ItemCategoryApiListItemCategoriesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listItemCategories(requestParameters: ItemCategoryApiListItemCategoriesRequest, options?: RawAxiosRequestConfig): AxiosPromise<ListItemCategories200Response> {
            return localVarFp.listItemCategories(requestParameters.companyId, requestParameters.$top, requestParameters.$skip, requestParameters.$limit, requestParameters.$filter, requestParameters.$select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates an object of type itemCategory in Dynamics 365 Business Central
         * @param {ItemCategoryApiPatchItemCategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchItemCategory(requestParameters: ItemCategoryApiPatchItemCategoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<ItemCategory> {
            return localVarFp.patchItemCategory(requestParameters.companyId, requestParameters.itemCategoryId, requestParameters.contentType, requestParameters.ifMatch, requestParameters.postItemCategoryRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates an object of type itemCategory in Dynamics 365 Business Central
         * @param {ItemCategoryApiPostItemCategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postItemCategory(requestParameters: ItemCategoryApiPostItemCategoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<ItemCategory> {
            return localVarFp.postItemCategory(requestParameters.companyId, requestParameters.contentType, requestParameters.postItemCategoryRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteItemCategory operation in ItemCategoryApi.
 * @export
 * @interface ItemCategoryApiDeleteItemCategoryRequest
 */
export interface ItemCategoryApiDeleteItemCategoryRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof ItemCategoryApiDeleteItemCategory
     */
    readonly companyId: string

    /**
     * (v1.0) id for itemCategory
     * @type {string}
     * @memberof ItemCategoryApiDeleteItemCategory
     */
    readonly itemCategoryId: string
}

/**
 * Request parameters for getItemCategory operation in ItemCategoryApi.
 * @export
 * @interface ItemCategoryApiGetItemCategoryRequest
 */
export interface ItemCategoryApiGetItemCategoryRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof ItemCategoryApiGetItemCategory
     */
    readonly companyId: string

    /**
     * (v1.0) id for itemCategory
     * @type {string}
     * @memberof ItemCategoryApiGetItemCategory
     */
    readonly itemCategoryId: string

    /**
     * (v1.0) Selected properties to be retrieved
     * @type {Array<'id' | 'code' | 'displayName' | 'lastModifiedDateTime'>}
     * @memberof ItemCategoryApiGetItemCategory
     */
    readonly $select?: Array<GetItemCategorySelectEnum>
}

/**
 * Request parameters for listItemCategories operation in ItemCategoryApi.
 * @export
 * @interface ItemCategoryApiListItemCategoriesRequest
 */
export interface ItemCategoryApiListItemCategoriesRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof ItemCategoryApiListItemCategories
     */
    readonly companyId: string

    /**
     * (v1.0) Number of items to return from the top of the list
     * @type {number}
     * @memberof ItemCategoryApiListItemCategories
     */
    readonly $top?: number

    /**
     * (v1.0) Number of items to skip from the list
     * @type {number}
     * @memberof ItemCategoryApiListItemCategories
     */
    readonly $skip?: number

    /**
     * (v1.0) Number of items to return from the list
     * @type {number}
     * @memberof ItemCategoryApiListItemCategories
     */
    readonly $limit?: number

    /**
     * (v1.0) Filtering expression
     * @type {string}
     * @memberof ItemCategoryApiListItemCategories
     */
    readonly $filter?: string

    /**
     * (v1.0) Selected properties to be retrieved
     * @type {Array<'id' | 'code' | 'displayName' | 'lastModifiedDateTime'>}
     * @memberof ItemCategoryApiListItemCategories
     */
    readonly $select?: Array<ListItemCategoriesSelectEnum>
}

/**
 * Request parameters for patchItemCategory operation in ItemCategoryApi.
 * @export
 * @interface ItemCategoryApiPatchItemCategoryRequest
 */
export interface ItemCategoryApiPatchItemCategoryRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof ItemCategoryApiPatchItemCategory
     */
    readonly companyId: string

    /**
     * (v1.0) id for itemCategory
     * @type {string}
     * @memberof ItemCategoryApiPatchItemCategory
     */
    readonly itemCategoryId: string

    /**
     * (v1.0) application/json
     * @type {string}
     * @memberof ItemCategoryApiPatchItemCategory
     */
    readonly contentType: string

    /**
     * (v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.
     * @type {string}
     * @memberof ItemCategoryApiPatchItemCategory
     */
    readonly ifMatch: string

    /**
     * 
     * @type {PostItemCategoryRequest}
     * @memberof ItemCategoryApiPatchItemCategory
     */
    readonly postItemCategoryRequest: PostItemCategoryRequest
}

/**
 * Request parameters for postItemCategory operation in ItemCategoryApi.
 * @export
 * @interface ItemCategoryApiPostItemCategoryRequest
 */
export interface ItemCategoryApiPostItemCategoryRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof ItemCategoryApiPostItemCategory
     */
    readonly companyId: string

    /**
     * (v1.0) application/json
     * @type {string}
     * @memberof ItemCategoryApiPostItemCategory
     */
    readonly contentType: string

    /**
     * 
     * @type {PostItemCategoryRequest}
     * @memberof ItemCategoryApiPostItemCategory
     */
    readonly postItemCategoryRequest: PostItemCategoryRequest
}

/**
 * ItemCategoryApi - object-oriented interface
 * @export
 * @class ItemCategoryApi
 * @extends {BaseAPI}
 */
export class ItemCategoryApi extends BaseAPI {
    /**
     * 
     * @summary Deletes an object of type itemCategory in Dynamics 365 Business Central
     * @param {ItemCategoryApiDeleteItemCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemCategoryApi
     */
    public deleteItemCategory(requestParameters: ItemCategoryApiDeleteItemCategoryRequest, options?: RawAxiosRequestConfig) {
        return ItemCategoryApiFp(this.configuration).deleteItemCategory(requestParameters.companyId, requestParameters.itemCategoryId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve the properties and relationships of an object of type itemCategory for Dynamics 365 Business Central.
     * @param {ItemCategoryApiGetItemCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemCategoryApi
     */
    public getItemCategory(requestParameters: ItemCategoryApiGetItemCategoryRequest, options?: RawAxiosRequestConfig) {
        return ItemCategoryApiFp(this.configuration).getItemCategory(requestParameters.companyId, requestParameters.itemCategoryId, requestParameters.$select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Returns a list of itemCategories
     * @param {ItemCategoryApiListItemCategoriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemCategoryApi
     */
    public listItemCategories(requestParameters: ItemCategoryApiListItemCategoriesRequest, options?: RawAxiosRequestConfig) {
        return ItemCategoryApiFp(this.configuration).listItemCategories(requestParameters.companyId, requestParameters.$top, requestParameters.$skip, requestParameters.$limit, requestParameters.$filter, requestParameters.$select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates an object of type itemCategory in Dynamics 365 Business Central
     * @param {ItemCategoryApiPatchItemCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemCategoryApi
     */
    public patchItemCategory(requestParameters: ItemCategoryApiPatchItemCategoryRequest, options?: RawAxiosRequestConfig) {
        return ItemCategoryApiFp(this.configuration).patchItemCategory(requestParameters.companyId, requestParameters.itemCategoryId, requestParameters.contentType, requestParameters.ifMatch, requestParameters.postItemCategoryRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Creates an object of type itemCategory in Dynamics 365 Business Central
     * @param {ItemCategoryApiPostItemCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemCategoryApi
     */
    public postItemCategory(requestParameters: ItemCategoryApiPostItemCategoryRequest, options?: RawAxiosRequestConfig) {
        return ItemCategoryApiFp(this.configuration).postItemCategory(requestParameters.companyId, requestParameters.contentType, requestParameters.postItemCategoryRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetItemCategorySelectEnum = {
    Id: 'id',
    Code: 'code',
    DisplayName: 'displayName',
    LastModifiedDateTime: 'lastModifiedDateTime'
} as const;
export type GetItemCategorySelectEnum = typeof GetItemCategorySelectEnum[keyof typeof GetItemCategorySelectEnum];
/**
 * @export
 */
export const ListItemCategoriesSelectEnum = {
    Id: 'id',
    Code: 'code',
    DisplayName: 'displayName',
    LastModifiedDateTime: 'lastModifiedDateTime'
} as const;
export type ListItemCategoriesSelectEnum = typeof ListItemCategoriesSelectEnum[keyof typeof ListItemCategoriesSelectEnum];
