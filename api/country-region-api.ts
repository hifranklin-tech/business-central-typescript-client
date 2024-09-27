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
import type { CountryRegion } from '../model';
// @ts-ignore
import type { ListCountriesRegions200Response } from '../model';
// @ts-ignore
import type { PostCountryRegionRequest } from '../model';
/**
 * CountryRegionApi - axios parameter creator
 * @export
 */
export const CountryRegionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deletes an object of type countryRegion in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} countryRegionId (v1.0) id for countryRegion
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCountryRegion: async (companyId: string, countryRegionId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('deleteCountryRegion', 'companyId', companyId)
            // verify required parameter 'countryRegionId' is not null or undefined
            assertParamExists('deleteCountryRegion', 'countryRegionId', countryRegionId)
            const localVarPath = `/companies({company_id})/countriesRegions({countryRegion_id})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"countryRegion_id"}}`, encodeURIComponent(String(countryRegionId)));
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
         * @summary Retrieve the properties and relationships of an object of type countryRegion for Dynamics 365 Business Central.
         * @param {string} companyId (v1.0) id for company
         * @param {string} countryRegionId (v1.0) id for countryRegion
         * @param {Array<GetCountryRegionSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCountryRegion: async (companyId: string, countryRegionId: string, $select?: Array<GetCountryRegionSelectEnum>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getCountryRegion', 'companyId', companyId)
            // verify required parameter 'countryRegionId' is not null or undefined
            assertParamExists('getCountryRegion', 'countryRegionId', countryRegionId)
            const localVarPath = `/companies({company_id})/countriesRegions({countryRegion_id})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"countryRegion_id"}}`, encodeURIComponent(String(countryRegionId)));
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
         * @summary Returns a list of countriesRegions
         * @param {string} companyId (v1.0) id for company
         * @param {number} [$top] (v1.0) Number of items to return from the top of the list
         * @param {number} [$skip] (v1.0) Number of items to skip from the list
         * @param {number} [$limit] (v1.0) Number of items to return from the list
         * @param {string} [$filter] (v1.0) Filtering expression
         * @param {Array<ListCountriesRegionsSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCountriesRegions: async (companyId: string, $top?: number, $skip?: number, $limit?: number, $filter?: string, $select?: Array<ListCountriesRegionsSelectEnum>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listCountriesRegions', 'companyId', companyId)
            const localVarPath = `/companies({company_id})/countriesRegions`
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
         * @summary Updates an object of type countryRegion in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} countryRegionId (v1.0) id for countryRegion
         * @param {string} contentType (v1.0) application/json
         * @param {string} ifMatch (v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.
         * @param {PostCountryRegionRequest} postCountryRegionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchCountryRegion: async (companyId: string, countryRegionId: string, contentType: string, ifMatch: string, postCountryRegionRequest: PostCountryRegionRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('patchCountryRegion', 'companyId', companyId)
            // verify required parameter 'countryRegionId' is not null or undefined
            assertParamExists('patchCountryRegion', 'countryRegionId', countryRegionId)
            // verify required parameter 'contentType' is not null or undefined
            assertParamExists('patchCountryRegion', 'contentType', contentType)
            // verify required parameter 'ifMatch' is not null or undefined
            assertParamExists('patchCountryRegion', 'ifMatch', ifMatch)
            // verify required parameter 'postCountryRegionRequest' is not null or undefined
            assertParamExists('patchCountryRegion', 'postCountryRegionRequest', postCountryRegionRequest)
            const localVarPath = `/companies({company_id})/countriesRegions({countryRegion_id})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"countryRegion_id"}}`, encodeURIComponent(String(countryRegionId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(postCountryRegionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates an object of type countryRegion in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} contentType (v1.0) application/json
         * @param {PostCountryRegionRequest} postCountryRegionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCountryRegion: async (companyId: string, contentType: string, postCountryRegionRequest: PostCountryRegionRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('postCountryRegion', 'companyId', companyId)
            // verify required parameter 'contentType' is not null or undefined
            assertParamExists('postCountryRegion', 'contentType', contentType)
            // verify required parameter 'postCountryRegionRequest' is not null or undefined
            assertParamExists('postCountryRegion', 'postCountryRegionRequest', postCountryRegionRequest)
            const localVarPath = `/companies({company_id})/countriesRegions`
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
            localVarRequestOptions.data = serializeDataIfNeeded(postCountryRegionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CountryRegionApi - functional programming interface
 * @export
 */
export const CountryRegionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CountryRegionApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Deletes an object of type countryRegion in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} countryRegionId (v1.0) id for countryRegion
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCountryRegion(companyId: string, countryRegionId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCountryRegion(companyId, countryRegionId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CountryRegionApi.deleteCountryRegion']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type countryRegion for Dynamics 365 Business Central.
         * @param {string} companyId (v1.0) id for company
         * @param {string} countryRegionId (v1.0) id for countryRegion
         * @param {Array<GetCountryRegionSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCountryRegion(companyId: string, countryRegionId: string, $select?: Array<GetCountryRegionSelectEnum>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CountryRegion>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCountryRegion(companyId, countryRegionId, $select, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CountryRegionApi.getCountryRegion']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Returns a list of countriesRegions
         * @param {string} companyId (v1.0) id for company
         * @param {number} [$top] (v1.0) Number of items to return from the top of the list
         * @param {number} [$skip] (v1.0) Number of items to skip from the list
         * @param {number} [$limit] (v1.0) Number of items to return from the list
         * @param {string} [$filter] (v1.0) Filtering expression
         * @param {Array<ListCountriesRegionsSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCountriesRegions(companyId: string, $top?: number, $skip?: number, $limit?: number, $filter?: string, $select?: Array<ListCountriesRegionsSelectEnum>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCountriesRegions200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCountriesRegions(companyId, $top, $skip, $limit, $filter, $select, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CountryRegionApi.listCountriesRegions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Updates an object of type countryRegion in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} countryRegionId (v1.0) id for countryRegion
         * @param {string} contentType (v1.0) application/json
         * @param {string} ifMatch (v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.
         * @param {PostCountryRegionRequest} postCountryRegionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchCountryRegion(companyId: string, countryRegionId: string, contentType: string, ifMatch: string, postCountryRegionRequest: PostCountryRegionRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CountryRegion>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchCountryRegion(companyId, countryRegionId, contentType, ifMatch, postCountryRegionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CountryRegionApi.patchCountryRegion']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Creates an object of type countryRegion in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} contentType (v1.0) application/json
         * @param {PostCountryRegionRequest} postCountryRegionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCountryRegion(companyId: string, contentType: string, postCountryRegionRequest: PostCountryRegionRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CountryRegion>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postCountryRegion(companyId, contentType, postCountryRegionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CountryRegionApi.postCountryRegion']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CountryRegionApi - factory interface
 * @export
 */
export const CountryRegionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CountryRegionApiFp(configuration)
    return {
        /**
         * 
         * @summary Deletes an object of type countryRegion in Dynamics 365 Business Central
         * @param {CountryRegionApiDeleteCountryRegionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCountryRegion(requestParameters: CountryRegionApiDeleteCountryRegionRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteCountryRegion(requestParameters.companyId, requestParameters.countryRegionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type countryRegion for Dynamics 365 Business Central.
         * @param {CountryRegionApiGetCountryRegionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCountryRegion(requestParameters: CountryRegionApiGetCountryRegionRequest, options?: RawAxiosRequestConfig): AxiosPromise<CountryRegion> {
            return localVarFp.getCountryRegion(requestParameters.companyId, requestParameters.countryRegionId, requestParameters.$select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Returns a list of countriesRegions
         * @param {CountryRegionApiListCountriesRegionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCountriesRegions(requestParameters: CountryRegionApiListCountriesRegionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ListCountriesRegions200Response> {
            return localVarFp.listCountriesRegions(requestParameters.companyId, requestParameters.$top, requestParameters.$skip, requestParameters.$limit, requestParameters.$filter, requestParameters.$select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates an object of type countryRegion in Dynamics 365 Business Central
         * @param {CountryRegionApiPatchCountryRegionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchCountryRegion(requestParameters: CountryRegionApiPatchCountryRegionRequest, options?: RawAxiosRequestConfig): AxiosPromise<CountryRegion> {
            return localVarFp.patchCountryRegion(requestParameters.companyId, requestParameters.countryRegionId, requestParameters.contentType, requestParameters.ifMatch, requestParameters.postCountryRegionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates an object of type countryRegion in Dynamics 365 Business Central
         * @param {CountryRegionApiPostCountryRegionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCountryRegion(requestParameters: CountryRegionApiPostCountryRegionRequest, options?: RawAxiosRequestConfig): AxiosPromise<CountryRegion> {
            return localVarFp.postCountryRegion(requestParameters.companyId, requestParameters.contentType, requestParameters.postCountryRegionRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteCountryRegion operation in CountryRegionApi.
 * @export
 * @interface CountryRegionApiDeleteCountryRegionRequest
 */
export interface CountryRegionApiDeleteCountryRegionRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof CountryRegionApiDeleteCountryRegion
     */
    readonly companyId: string

    /**
     * (v1.0) id for countryRegion
     * @type {string}
     * @memberof CountryRegionApiDeleteCountryRegion
     */
    readonly countryRegionId: string
}

/**
 * Request parameters for getCountryRegion operation in CountryRegionApi.
 * @export
 * @interface CountryRegionApiGetCountryRegionRequest
 */
export interface CountryRegionApiGetCountryRegionRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof CountryRegionApiGetCountryRegion
     */
    readonly companyId: string

    /**
     * (v1.0) id for countryRegion
     * @type {string}
     * @memberof CountryRegionApiGetCountryRegion
     */
    readonly countryRegionId: string

    /**
     * (v1.0) Selected properties to be retrieved
     * @type {Array<'id' | 'code' | 'displayName' | 'addressFormat' | 'lastModifiedDateTime'>}
     * @memberof CountryRegionApiGetCountryRegion
     */
    readonly $select?: Array<GetCountryRegionSelectEnum>
}

/**
 * Request parameters for listCountriesRegions operation in CountryRegionApi.
 * @export
 * @interface CountryRegionApiListCountriesRegionsRequest
 */
export interface CountryRegionApiListCountriesRegionsRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof CountryRegionApiListCountriesRegions
     */
    readonly companyId: string

    /**
     * (v1.0) Number of items to return from the top of the list
     * @type {number}
     * @memberof CountryRegionApiListCountriesRegions
     */
    readonly $top?: number

    /**
     * (v1.0) Number of items to skip from the list
     * @type {number}
     * @memberof CountryRegionApiListCountriesRegions
     */
    readonly $skip?: number

    /**
     * (v1.0) Number of items to return from the list
     * @type {number}
     * @memberof CountryRegionApiListCountriesRegions
     */
    readonly $limit?: number

    /**
     * (v1.0) Filtering expression
     * @type {string}
     * @memberof CountryRegionApiListCountriesRegions
     */
    readonly $filter?: string

    /**
     * (v1.0) Selected properties to be retrieved
     * @type {Array<'id' | 'code' | 'displayName' | 'addressFormat' | 'lastModifiedDateTime'>}
     * @memberof CountryRegionApiListCountriesRegions
     */
    readonly $select?: Array<ListCountriesRegionsSelectEnum>
}

/**
 * Request parameters for patchCountryRegion operation in CountryRegionApi.
 * @export
 * @interface CountryRegionApiPatchCountryRegionRequest
 */
export interface CountryRegionApiPatchCountryRegionRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof CountryRegionApiPatchCountryRegion
     */
    readonly companyId: string

    /**
     * (v1.0) id for countryRegion
     * @type {string}
     * @memberof CountryRegionApiPatchCountryRegion
     */
    readonly countryRegionId: string

    /**
     * (v1.0) application/json
     * @type {string}
     * @memberof CountryRegionApiPatchCountryRegion
     */
    readonly contentType: string

    /**
     * (v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.
     * @type {string}
     * @memberof CountryRegionApiPatchCountryRegion
     */
    readonly ifMatch: string

    /**
     * 
     * @type {PostCountryRegionRequest}
     * @memberof CountryRegionApiPatchCountryRegion
     */
    readonly postCountryRegionRequest: PostCountryRegionRequest
}

/**
 * Request parameters for postCountryRegion operation in CountryRegionApi.
 * @export
 * @interface CountryRegionApiPostCountryRegionRequest
 */
export interface CountryRegionApiPostCountryRegionRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof CountryRegionApiPostCountryRegion
     */
    readonly companyId: string

    /**
     * (v1.0) application/json
     * @type {string}
     * @memberof CountryRegionApiPostCountryRegion
     */
    readonly contentType: string

    /**
     * 
     * @type {PostCountryRegionRequest}
     * @memberof CountryRegionApiPostCountryRegion
     */
    readonly postCountryRegionRequest: PostCountryRegionRequest
}

/**
 * CountryRegionApi - object-oriented interface
 * @export
 * @class CountryRegionApi
 * @extends {BaseAPI}
 */
export class CountryRegionApi extends BaseAPI {
    /**
     * 
     * @summary Deletes an object of type countryRegion in Dynamics 365 Business Central
     * @param {CountryRegionApiDeleteCountryRegionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryRegionApi
     */
    public deleteCountryRegion(requestParameters: CountryRegionApiDeleteCountryRegionRequest, options?: RawAxiosRequestConfig) {
        return CountryRegionApiFp(this.configuration).deleteCountryRegion(requestParameters.companyId, requestParameters.countryRegionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve the properties and relationships of an object of type countryRegion for Dynamics 365 Business Central.
     * @param {CountryRegionApiGetCountryRegionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryRegionApi
     */
    public getCountryRegion(requestParameters: CountryRegionApiGetCountryRegionRequest, options?: RawAxiosRequestConfig) {
        return CountryRegionApiFp(this.configuration).getCountryRegion(requestParameters.companyId, requestParameters.countryRegionId, requestParameters.$select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Returns a list of countriesRegions
     * @param {CountryRegionApiListCountriesRegionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryRegionApi
     */
    public listCountriesRegions(requestParameters: CountryRegionApiListCountriesRegionsRequest, options?: RawAxiosRequestConfig) {
        return CountryRegionApiFp(this.configuration).listCountriesRegions(requestParameters.companyId, requestParameters.$top, requestParameters.$skip, requestParameters.$limit, requestParameters.$filter, requestParameters.$select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates an object of type countryRegion in Dynamics 365 Business Central
     * @param {CountryRegionApiPatchCountryRegionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryRegionApi
     */
    public patchCountryRegion(requestParameters: CountryRegionApiPatchCountryRegionRequest, options?: RawAxiosRequestConfig) {
        return CountryRegionApiFp(this.configuration).patchCountryRegion(requestParameters.companyId, requestParameters.countryRegionId, requestParameters.contentType, requestParameters.ifMatch, requestParameters.postCountryRegionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Creates an object of type countryRegion in Dynamics 365 Business Central
     * @param {CountryRegionApiPostCountryRegionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryRegionApi
     */
    public postCountryRegion(requestParameters: CountryRegionApiPostCountryRegionRequest, options?: RawAxiosRequestConfig) {
        return CountryRegionApiFp(this.configuration).postCountryRegion(requestParameters.companyId, requestParameters.contentType, requestParameters.postCountryRegionRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetCountryRegionSelectEnum = {
    Id: 'id',
    Code: 'code',
    DisplayName: 'displayName',
    AddressFormat: 'addressFormat',
    LastModifiedDateTime: 'lastModifiedDateTime'
} as const;
export type GetCountryRegionSelectEnum = typeof GetCountryRegionSelectEnum[keyof typeof GetCountryRegionSelectEnum];
/**
 * @export
 */
export const ListCountriesRegionsSelectEnum = {
    Id: 'id',
    Code: 'code',
    DisplayName: 'displayName',
    AddressFormat: 'addressFormat',
    LastModifiedDateTime: 'lastModifiedDateTime'
} as const;
export type ListCountriesRegionsSelectEnum = typeof ListCountriesRegionsSelectEnum[keyof typeof ListCountriesRegionsSelectEnum];
