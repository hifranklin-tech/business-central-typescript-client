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
import type { Dimension } from '../model';
// @ts-ignore
import type { ListDimensions200Response } from '../model';
/**
 * DimensionApi - axios parameter creator
 * @export
 */
export const DimensionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type dimension for Dynamics 365 Business Central.
         * @param {string} companyId (v1.0) id for company
         * @param {string} dimensionId (v1.0) id for dimension
         * @param {Array<GetDimensionExpandEnum>} [$expand] (v1.0) Entities to expand
         * @param {Array<GetDimensionSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDimension: async (companyId: string, dimensionId: string, $expand?: Array<GetDimensionExpandEnum>, $select?: Array<GetDimensionSelectEnum>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getDimension', 'companyId', companyId)
            // verify required parameter 'dimensionId' is not null or undefined
            assertParamExists('getDimension', 'dimensionId', dimensionId)
            const localVarPath = `/companies({company_id})/dimensions({dimension_id})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"dimension_id"}}`, encodeURIComponent(String(dimensionId)));
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

            if ($expand) {
                localVarQueryParameter['$expand'] = $expand.join(COLLECTION_FORMATS.csv);
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
         * @summary Returns a list of dimensions
         * @param {string} companyId (v1.0) id for company
         * @param {number} [$top] (v1.0) Number of items to return from the top of the list
         * @param {number} [$skip] (v1.0) Number of items to skip from the list
         * @param {number} [$limit] (v1.0) Number of items to return from the list
         * @param {string} [$filter] (v1.0) Filtering expression
         * @param {Array<ListDimensionsExpandEnum>} [$expand] (v1.0) Entities to expand
         * @param {Array<ListDimensionsSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDimensions: async (companyId: string, $top?: number, $skip?: number, $limit?: number, $filter?: string, $expand?: Array<ListDimensionsExpandEnum>, $select?: Array<ListDimensionsSelectEnum>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listDimensions', 'companyId', companyId)
            const localVarPath = `/companies({company_id})/dimensions`
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

            if ($expand) {
                localVarQueryParameter['$expand'] = $expand.join(COLLECTION_FORMATS.csv);
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
    }
};

/**
 * DimensionApi - functional programming interface
 * @export
 */
export const DimensionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DimensionApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type dimension for Dynamics 365 Business Central.
         * @param {string} companyId (v1.0) id for company
         * @param {string} dimensionId (v1.0) id for dimension
         * @param {Array<GetDimensionExpandEnum>} [$expand] (v1.0) Entities to expand
         * @param {Array<GetDimensionSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDimension(companyId: string, dimensionId: string, $expand?: Array<GetDimensionExpandEnum>, $select?: Array<GetDimensionSelectEnum>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Dimension>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDimension(companyId, dimensionId, $expand, $select, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DimensionApi.getDimension']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Returns a list of dimensions
         * @param {string} companyId (v1.0) id for company
         * @param {number} [$top] (v1.0) Number of items to return from the top of the list
         * @param {number} [$skip] (v1.0) Number of items to skip from the list
         * @param {number} [$limit] (v1.0) Number of items to return from the list
         * @param {string} [$filter] (v1.0) Filtering expression
         * @param {Array<ListDimensionsExpandEnum>} [$expand] (v1.0) Entities to expand
         * @param {Array<ListDimensionsSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listDimensions(companyId: string, $top?: number, $skip?: number, $limit?: number, $filter?: string, $expand?: Array<ListDimensionsExpandEnum>, $select?: Array<ListDimensionsSelectEnum>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListDimensions200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listDimensions(companyId, $top, $skip, $limit, $filter, $expand, $select, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DimensionApi.listDimensions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DimensionApi - factory interface
 * @export
 */
export const DimensionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DimensionApiFp(configuration)
    return {
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type dimension for Dynamics 365 Business Central.
         * @param {DimensionApiGetDimensionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDimension(requestParameters: DimensionApiGetDimensionRequest, options?: RawAxiosRequestConfig): AxiosPromise<Dimension> {
            return localVarFp.getDimension(requestParameters.companyId, requestParameters.dimensionId, requestParameters.$expand, requestParameters.$select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Returns a list of dimensions
         * @param {DimensionApiListDimensionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDimensions(requestParameters: DimensionApiListDimensionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ListDimensions200Response> {
            return localVarFp.listDimensions(requestParameters.companyId, requestParameters.$top, requestParameters.$skip, requestParameters.$limit, requestParameters.$filter, requestParameters.$expand, requestParameters.$select, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getDimension operation in DimensionApi.
 * @export
 * @interface DimensionApiGetDimensionRequest
 */
export interface DimensionApiGetDimensionRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof DimensionApiGetDimension
     */
    readonly companyId: string

    /**
     * (v1.0) id for dimension
     * @type {string}
     * @memberof DimensionApiGetDimension
     */
    readonly dimensionId: string

    /**
     * (v1.0) Entities to expand
     * @type {Array<'dimensionValues'>}
     * @memberof DimensionApiGetDimension
     */
    readonly $expand?: Array<GetDimensionExpandEnum>

    /**
     * (v1.0) Selected properties to be retrieved
     * @type {Array<'id' | 'code' | 'displayName' | 'lastModifiedDateTime'>}
     * @memberof DimensionApiGetDimension
     */
    readonly $select?: Array<GetDimensionSelectEnum>
}

/**
 * Request parameters for listDimensions operation in DimensionApi.
 * @export
 * @interface DimensionApiListDimensionsRequest
 */
export interface DimensionApiListDimensionsRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof DimensionApiListDimensions
     */
    readonly companyId: string

    /**
     * (v1.0) Number of items to return from the top of the list
     * @type {number}
     * @memberof DimensionApiListDimensions
     */
    readonly $top?: number

    /**
     * (v1.0) Number of items to skip from the list
     * @type {number}
     * @memberof DimensionApiListDimensions
     */
    readonly $skip?: number

    /**
     * (v1.0) Number of items to return from the list
     * @type {number}
     * @memberof DimensionApiListDimensions
     */
    readonly $limit?: number

    /**
     * (v1.0) Filtering expression
     * @type {string}
     * @memberof DimensionApiListDimensions
     */
    readonly $filter?: string

    /**
     * (v1.0) Entities to expand
     * @type {Array<'dimensionValues'>}
     * @memberof DimensionApiListDimensions
     */
    readonly $expand?: Array<ListDimensionsExpandEnum>

    /**
     * (v1.0) Selected properties to be retrieved
     * @type {Array<'id' | 'code' | 'displayName' | 'lastModifiedDateTime'>}
     * @memberof DimensionApiListDimensions
     */
    readonly $select?: Array<ListDimensionsSelectEnum>
}

/**
 * DimensionApi - object-oriented interface
 * @export
 * @class DimensionApi
 * @extends {BaseAPI}
 */
export class DimensionApi extends BaseAPI {
    /**
     * 
     * @summary Retrieve the properties and relationships of an object of type dimension for Dynamics 365 Business Central.
     * @param {DimensionApiGetDimensionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DimensionApi
     */
    public getDimension(requestParameters: DimensionApiGetDimensionRequest, options?: RawAxiosRequestConfig) {
        return DimensionApiFp(this.configuration).getDimension(requestParameters.companyId, requestParameters.dimensionId, requestParameters.$expand, requestParameters.$select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Returns a list of dimensions
     * @param {DimensionApiListDimensionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DimensionApi
     */
    public listDimensions(requestParameters: DimensionApiListDimensionsRequest, options?: RawAxiosRequestConfig) {
        return DimensionApiFp(this.configuration).listDimensions(requestParameters.companyId, requestParameters.$top, requestParameters.$skip, requestParameters.$limit, requestParameters.$filter, requestParameters.$expand, requestParameters.$select, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetDimensionExpandEnum = {
    DimensionValues: 'dimensionValues'
} as const;
export type GetDimensionExpandEnum = typeof GetDimensionExpandEnum[keyof typeof GetDimensionExpandEnum];
/**
 * @export
 */
export const GetDimensionSelectEnum = {
    Id: 'id',
    Code: 'code',
    DisplayName: 'displayName',
    LastModifiedDateTime: 'lastModifiedDateTime'
} as const;
export type GetDimensionSelectEnum = typeof GetDimensionSelectEnum[keyof typeof GetDimensionSelectEnum];
/**
 * @export
 */
export const ListDimensionsExpandEnum = {
    DimensionValues: 'dimensionValues'
} as const;
export type ListDimensionsExpandEnum = typeof ListDimensionsExpandEnum[keyof typeof ListDimensionsExpandEnum];
/**
 * @export
 */
export const ListDimensionsSelectEnum = {
    Id: 'id',
    Code: 'code',
    DisplayName: 'displayName',
    LastModifiedDateTime: 'lastModifiedDateTime'
} as const;
export type ListDimensionsSelectEnum = typeof ListDimensionsSelectEnum[keyof typeof ListDimensionsSelectEnum];
