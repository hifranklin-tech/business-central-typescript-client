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
import type { CashFlowStatement } from '../model';
// @ts-ignore
import type { ListCashFlowStatement200Response } from '../model';
/**
 * CashFlowStatementApi - axios parameter creator
 * @export
 */
export const CashFlowStatementApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type cashFlowStatement for Dynamics 365 Business Central.
         * @param {string} companyId (v1.0) id for company
         * @param {number} cashFlowStatementLineNumber (v1.0) lineNumber for cashFlowStatement
         * @param {Array<GetCashFlowStatementSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCashFlowStatement: async (companyId: string, cashFlowStatementLineNumber: number, $select?: Array<GetCashFlowStatementSelectEnum>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getCashFlowStatement', 'companyId', companyId)
            // verify required parameter 'cashFlowStatementLineNumber' is not null or undefined
            assertParamExists('getCashFlowStatement', 'cashFlowStatementLineNumber', cashFlowStatementLineNumber)
            const localVarPath = `/companies({company_id})/cashFlowStatement({cashFlowStatement_lineNumber})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"cashFlowStatement_lineNumber"}}`, encodeURIComponent(String(cashFlowStatementLineNumber)));
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
         * @summary Returns a list of cashFlowStatement
         * @param {string} companyId (v1.0) id for company
         * @param {number} [$top] (v1.0) Number of items to return from the top of the list
         * @param {number} [$skip] (v1.0) Number of items to skip from the list
         * @param {number} [$limit] (v1.0) Number of items to return from the list
         * @param {string} [$filter] (v1.0) Filtering expression
         * @param {Array<ListCashFlowStatementSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCashFlowStatement: async (companyId: string, $top?: number, $skip?: number, $limit?: number, $filter?: string, $select?: Array<ListCashFlowStatementSelectEnum>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listCashFlowStatement', 'companyId', companyId)
            const localVarPath = `/companies({company_id})/cashFlowStatement`
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
    }
};

/**
 * CashFlowStatementApi - functional programming interface
 * @export
 */
export const CashFlowStatementApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CashFlowStatementApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type cashFlowStatement for Dynamics 365 Business Central.
         * @param {string} companyId (v1.0) id for company
         * @param {number} cashFlowStatementLineNumber (v1.0) lineNumber for cashFlowStatement
         * @param {Array<GetCashFlowStatementSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCashFlowStatement(companyId: string, cashFlowStatementLineNumber: number, $select?: Array<GetCashFlowStatementSelectEnum>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CashFlowStatement>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCashFlowStatement(companyId, cashFlowStatementLineNumber, $select, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CashFlowStatementApi.getCashFlowStatement']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Returns a list of cashFlowStatement
         * @param {string} companyId (v1.0) id for company
         * @param {number} [$top] (v1.0) Number of items to return from the top of the list
         * @param {number} [$skip] (v1.0) Number of items to skip from the list
         * @param {number} [$limit] (v1.0) Number of items to return from the list
         * @param {string} [$filter] (v1.0) Filtering expression
         * @param {Array<ListCashFlowStatementSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCashFlowStatement(companyId: string, $top?: number, $skip?: number, $limit?: number, $filter?: string, $select?: Array<ListCashFlowStatementSelectEnum>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCashFlowStatement200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCashFlowStatement(companyId, $top, $skip, $limit, $filter, $select, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CashFlowStatementApi.listCashFlowStatement']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CashFlowStatementApi - factory interface
 * @export
 */
export const CashFlowStatementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CashFlowStatementApiFp(configuration)
    return {
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type cashFlowStatement for Dynamics 365 Business Central.
         * @param {CashFlowStatementApiGetCashFlowStatementRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCashFlowStatement(requestParameters: CashFlowStatementApiGetCashFlowStatementRequest, options?: RawAxiosRequestConfig): AxiosPromise<CashFlowStatement> {
            return localVarFp.getCashFlowStatement(requestParameters.companyId, requestParameters.cashFlowStatementLineNumber, requestParameters.$select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Returns a list of cashFlowStatement
         * @param {CashFlowStatementApiListCashFlowStatementRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCashFlowStatement(requestParameters: CashFlowStatementApiListCashFlowStatementRequest, options?: RawAxiosRequestConfig): AxiosPromise<ListCashFlowStatement200Response> {
            return localVarFp.listCashFlowStatement(requestParameters.companyId, requestParameters.$top, requestParameters.$skip, requestParameters.$limit, requestParameters.$filter, requestParameters.$select, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCashFlowStatement operation in CashFlowStatementApi.
 * @export
 * @interface CashFlowStatementApiGetCashFlowStatementRequest
 */
export interface CashFlowStatementApiGetCashFlowStatementRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof CashFlowStatementApiGetCashFlowStatement
     */
    readonly companyId: string

    /**
     * (v1.0) lineNumber for cashFlowStatement
     * @type {number}
     * @memberof CashFlowStatementApiGetCashFlowStatement
     */
    readonly cashFlowStatementLineNumber: number

    /**
     * (v1.0) Selected properties to be retrieved
     * @type {Array<'lineNumber' | 'display' | 'netChange' | 'lineType' | 'indentation' | 'dateFilter'>}
     * @memberof CashFlowStatementApiGetCashFlowStatement
     */
    readonly $select?: Array<GetCashFlowStatementSelectEnum>
}

/**
 * Request parameters for listCashFlowStatement operation in CashFlowStatementApi.
 * @export
 * @interface CashFlowStatementApiListCashFlowStatementRequest
 */
export interface CashFlowStatementApiListCashFlowStatementRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof CashFlowStatementApiListCashFlowStatement
     */
    readonly companyId: string

    /**
     * (v1.0) Number of items to return from the top of the list
     * @type {number}
     * @memberof CashFlowStatementApiListCashFlowStatement
     */
    readonly $top?: number

    /**
     * (v1.0) Number of items to skip from the list
     * @type {number}
     * @memberof CashFlowStatementApiListCashFlowStatement
     */
    readonly $skip?: number

    /**
     * (v1.0) Number of items to return from the list
     * @type {number}
     * @memberof CashFlowStatementApiListCashFlowStatement
     */
    readonly $limit?: number

    /**
     * (v1.0) Filtering expression
     * @type {string}
     * @memberof CashFlowStatementApiListCashFlowStatement
     */
    readonly $filter?: string

    /**
     * (v1.0) Selected properties to be retrieved
     * @type {Array<'lineNumber' | 'display' | 'netChange' | 'lineType' | 'indentation' | 'dateFilter'>}
     * @memberof CashFlowStatementApiListCashFlowStatement
     */
    readonly $select?: Array<ListCashFlowStatementSelectEnum>
}

/**
 * CashFlowStatementApi - object-oriented interface
 * @export
 * @class CashFlowStatementApi
 * @extends {BaseAPI}
 */
export class CashFlowStatementApi extends BaseAPI {
    /**
     * 
     * @summary Retrieve the properties and relationships of an object of type cashFlowStatement for Dynamics 365 Business Central.
     * @param {CashFlowStatementApiGetCashFlowStatementRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashFlowStatementApi
     */
    public getCashFlowStatement(requestParameters: CashFlowStatementApiGetCashFlowStatementRequest, options?: RawAxiosRequestConfig) {
        return CashFlowStatementApiFp(this.configuration).getCashFlowStatement(requestParameters.companyId, requestParameters.cashFlowStatementLineNumber, requestParameters.$select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Returns a list of cashFlowStatement
     * @param {CashFlowStatementApiListCashFlowStatementRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashFlowStatementApi
     */
    public listCashFlowStatement(requestParameters: CashFlowStatementApiListCashFlowStatementRequest, options?: RawAxiosRequestConfig) {
        return CashFlowStatementApiFp(this.configuration).listCashFlowStatement(requestParameters.companyId, requestParameters.$top, requestParameters.$skip, requestParameters.$limit, requestParameters.$filter, requestParameters.$select, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetCashFlowStatementSelectEnum = {
    LineNumber: 'lineNumber',
    Display: 'display',
    NetChange: 'netChange',
    LineType: 'lineType',
    Indentation: 'indentation',
    DateFilter: 'dateFilter'
} as const;
export type GetCashFlowStatementSelectEnum = typeof GetCashFlowStatementSelectEnum[keyof typeof GetCashFlowStatementSelectEnum];
/**
 * @export
 */
export const ListCashFlowStatementSelectEnum = {
    LineNumber: 'lineNumber',
    Display: 'display',
    NetChange: 'netChange',
    LineType: 'lineType',
    Indentation: 'indentation',
    DateFilter: 'dateFilter'
} as const;
export type ListCashFlowStatementSelectEnum = typeof ListCashFlowStatementSelectEnum[keyof typeof ListCashFlowStatementSelectEnum];
