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
import type { ListProjects200Response } from '../model';
// @ts-ignore
import type { PostProjectRequest } from '../model';
// @ts-ignore
import type { Project } from '../model';
/**
 * ProjectApi - axios parameter creator
 * @export
 */
export const ProjectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deletes an object of type project in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} projectId (v1.0) id for project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProject: async (companyId: string, projectId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('deleteProject', 'companyId', companyId)
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('deleteProject', 'projectId', projectId)
            const localVarPath = `/companies({company_id})/projects({project_id})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
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
         * @summary Retrieve the properties and relationships of an object of type project for Dynamics 365 Business Central.
         * @param {string} companyId (v1.0) id for company
         * @param {string} projectId (v1.0) id for project
         * @param {Array<GetProjectSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProject: async (companyId: string, projectId: string, $select?: Array<GetProjectSelectEnum>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getProject', 'companyId', companyId)
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getProject', 'projectId', projectId)
            const localVarPath = `/companies({company_id})/projects({project_id})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
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
         * @summary Returns a list of projects
         * @param {string} companyId (v1.0) id for company
         * @param {number} [$top] (v1.0) Number of items to return from the top of the list
         * @param {number} [$skip] (v1.0) Number of items to skip from the list
         * @param {number} [$limit] (v1.0) Number of items to return from the list
         * @param {string} [$filter] (v1.0) Filtering expression
         * @param {Array<ListProjectsSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProjects: async (companyId: string, $top?: number, $skip?: number, $limit?: number, $filter?: string, $select?: Array<ListProjectsSelectEnum>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listProjects', 'companyId', companyId)
            const localVarPath = `/companies({company_id})/projects`
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
         * @summary Updates an object of type project in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} projectId (v1.0) id for project
         * @param {string} contentType (v1.0) application/json
         * @param {string} ifMatch (v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.
         * @param {PostProjectRequest} postProjectRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchProject: async (companyId: string, projectId: string, contentType: string, ifMatch: string, postProjectRequest: PostProjectRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('patchProject', 'companyId', companyId)
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('patchProject', 'projectId', projectId)
            // verify required parameter 'contentType' is not null or undefined
            assertParamExists('patchProject', 'contentType', contentType)
            // verify required parameter 'ifMatch' is not null or undefined
            assertParamExists('patchProject', 'ifMatch', ifMatch)
            // verify required parameter 'postProjectRequest' is not null or undefined
            assertParamExists('patchProject', 'postProjectRequest', postProjectRequest)
            const localVarPath = `/companies({company_id})/projects({project_id})`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(postProjectRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates an object of type project in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} contentType (v1.0) application/json
         * @param {PostProjectRequest} postProjectRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postProject: async (companyId: string, contentType: string, postProjectRequest: PostProjectRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('postProject', 'companyId', companyId)
            // verify required parameter 'contentType' is not null or undefined
            assertParamExists('postProject', 'contentType', contentType)
            // verify required parameter 'postProjectRequest' is not null or undefined
            assertParamExists('postProject', 'postProjectRequest', postProjectRequest)
            const localVarPath = `/companies({company_id})/projects`
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
            localVarRequestOptions.data = serializeDataIfNeeded(postProjectRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProjectApi - functional programming interface
 * @export
 */
export const ProjectApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProjectApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Deletes an object of type project in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} projectId (v1.0) id for project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProject(companyId: string, projectId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProject(companyId, projectId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProjectApi.deleteProject']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type project for Dynamics 365 Business Central.
         * @param {string} companyId (v1.0) id for company
         * @param {string} projectId (v1.0) id for project
         * @param {Array<GetProjectSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProject(companyId: string, projectId: string, $select?: Array<GetProjectSelectEnum>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProject(companyId, projectId, $select, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProjectApi.getProject']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Returns a list of projects
         * @param {string} companyId (v1.0) id for company
         * @param {number} [$top] (v1.0) Number of items to return from the top of the list
         * @param {number} [$skip] (v1.0) Number of items to skip from the list
         * @param {number} [$limit] (v1.0) Number of items to return from the list
         * @param {string} [$filter] (v1.0) Filtering expression
         * @param {Array<ListProjectsSelectEnum>} [$select] (v1.0) Selected properties to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listProjects(companyId: string, $top?: number, $skip?: number, $limit?: number, $filter?: string, $select?: Array<ListProjectsSelectEnum>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListProjects200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listProjects(companyId, $top, $skip, $limit, $filter, $select, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProjectApi.listProjects']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Updates an object of type project in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} projectId (v1.0) id for project
         * @param {string} contentType (v1.0) application/json
         * @param {string} ifMatch (v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.
         * @param {PostProjectRequest} postProjectRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchProject(companyId: string, projectId: string, contentType: string, ifMatch: string, postProjectRequest: PostProjectRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchProject(companyId, projectId, contentType, ifMatch, postProjectRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProjectApi.patchProject']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Creates an object of type project in Dynamics 365 Business Central
         * @param {string} companyId (v1.0) id for company
         * @param {string} contentType (v1.0) application/json
         * @param {PostProjectRequest} postProjectRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postProject(companyId: string, contentType: string, postProjectRequest: PostProjectRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postProject(companyId, contentType, postProjectRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProjectApi.postProject']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ProjectApi - factory interface
 * @export
 */
export const ProjectApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProjectApiFp(configuration)
    return {
        /**
         * 
         * @summary Deletes an object of type project in Dynamics 365 Business Central
         * @param {ProjectApiDeleteProjectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProject(requestParameters: ProjectApiDeleteProjectRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteProject(requestParameters.companyId, requestParameters.projectId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve the properties and relationships of an object of type project for Dynamics 365 Business Central.
         * @param {ProjectApiGetProjectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProject(requestParameters: ProjectApiGetProjectRequest, options?: RawAxiosRequestConfig): AxiosPromise<Project> {
            return localVarFp.getProject(requestParameters.companyId, requestParameters.projectId, requestParameters.$select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Returns a list of projects
         * @param {ProjectApiListProjectsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProjects(requestParameters: ProjectApiListProjectsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ListProjects200Response> {
            return localVarFp.listProjects(requestParameters.companyId, requestParameters.$top, requestParameters.$skip, requestParameters.$limit, requestParameters.$filter, requestParameters.$select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates an object of type project in Dynamics 365 Business Central
         * @param {ProjectApiPatchProjectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchProject(requestParameters: ProjectApiPatchProjectRequest, options?: RawAxiosRequestConfig): AxiosPromise<Project> {
            return localVarFp.patchProject(requestParameters.companyId, requestParameters.projectId, requestParameters.contentType, requestParameters.ifMatch, requestParameters.postProjectRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates an object of type project in Dynamics 365 Business Central
         * @param {ProjectApiPostProjectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postProject(requestParameters: ProjectApiPostProjectRequest, options?: RawAxiosRequestConfig): AxiosPromise<Project> {
            return localVarFp.postProject(requestParameters.companyId, requestParameters.contentType, requestParameters.postProjectRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteProject operation in ProjectApi.
 * @export
 * @interface ProjectApiDeleteProjectRequest
 */
export interface ProjectApiDeleteProjectRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof ProjectApiDeleteProject
     */
    readonly companyId: string

    /**
     * (v1.0) id for project
     * @type {string}
     * @memberof ProjectApiDeleteProject
     */
    readonly projectId: string
}

/**
 * Request parameters for getProject operation in ProjectApi.
 * @export
 * @interface ProjectApiGetProjectRequest
 */
export interface ProjectApiGetProjectRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof ProjectApiGetProject
     */
    readonly companyId: string

    /**
     * (v1.0) id for project
     * @type {string}
     * @memberof ProjectApiGetProject
     */
    readonly projectId: string

    /**
     * (v1.0) Selected properties to be retrieved
     * @type {Array<'id' | 'number' | 'displayName'>}
     * @memberof ProjectApiGetProject
     */
    readonly $select?: Array<GetProjectSelectEnum>
}

/**
 * Request parameters for listProjects operation in ProjectApi.
 * @export
 * @interface ProjectApiListProjectsRequest
 */
export interface ProjectApiListProjectsRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof ProjectApiListProjects
     */
    readonly companyId: string

    /**
     * (v1.0) Number of items to return from the top of the list
     * @type {number}
     * @memberof ProjectApiListProjects
     */
    readonly $top?: number

    /**
     * (v1.0) Number of items to skip from the list
     * @type {number}
     * @memberof ProjectApiListProjects
     */
    readonly $skip?: number

    /**
     * (v1.0) Number of items to return from the list
     * @type {number}
     * @memberof ProjectApiListProjects
     */
    readonly $limit?: number

    /**
     * (v1.0) Filtering expression
     * @type {string}
     * @memberof ProjectApiListProjects
     */
    readonly $filter?: string

    /**
     * (v1.0) Selected properties to be retrieved
     * @type {Array<'id' | 'number' | 'displayName'>}
     * @memberof ProjectApiListProjects
     */
    readonly $select?: Array<ListProjectsSelectEnum>
}

/**
 * Request parameters for patchProject operation in ProjectApi.
 * @export
 * @interface ProjectApiPatchProjectRequest
 */
export interface ProjectApiPatchProjectRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof ProjectApiPatchProject
     */
    readonly companyId: string

    /**
     * (v1.0) id for project
     * @type {string}
     * @memberof ProjectApiPatchProject
     */
    readonly projectId: string

    /**
     * (v1.0) application/json
     * @type {string}
     * @memberof ProjectApiPatchProject
     */
    readonly contentType: string

    /**
     * (v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.
     * @type {string}
     * @memberof ProjectApiPatchProject
     */
    readonly ifMatch: string

    /**
     * 
     * @type {PostProjectRequest}
     * @memberof ProjectApiPatchProject
     */
    readonly postProjectRequest: PostProjectRequest
}

/**
 * Request parameters for postProject operation in ProjectApi.
 * @export
 * @interface ProjectApiPostProjectRequest
 */
export interface ProjectApiPostProjectRequest {
    /**
     * (v1.0) id for company
     * @type {string}
     * @memberof ProjectApiPostProject
     */
    readonly companyId: string

    /**
     * (v1.0) application/json
     * @type {string}
     * @memberof ProjectApiPostProject
     */
    readonly contentType: string

    /**
     * 
     * @type {PostProjectRequest}
     * @memberof ProjectApiPostProject
     */
    readonly postProjectRequest: PostProjectRequest
}

/**
 * ProjectApi - object-oriented interface
 * @export
 * @class ProjectApi
 * @extends {BaseAPI}
 */
export class ProjectApi extends BaseAPI {
    /**
     * 
     * @summary Deletes an object of type project in Dynamics 365 Business Central
     * @param {ProjectApiDeleteProjectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public deleteProject(requestParameters: ProjectApiDeleteProjectRequest, options?: RawAxiosRequestConfig) {
        return ProjectApiFp(this.configuration).deleteProject(requestParameters.companyId, requestParameters.projectId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve the properties and relationships of an object of type project for Dynamics 365 Business Central.
     * @param {ProjectApiGetProjectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public getProject(requestParameters: ProjectApiGetProjectRequest, options?: RawAxiosRequestConfig) {
        return ProjectApiFp(this.configuration).getProject(requestParameters.companyId, requestParameters.projectId, requestParameters.$select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Returns a list of projects
     * @param {ProjectApiListProjectsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public listProjects(requestParameters: ProjectApiListProjectsRequest, options?: RawAxiosRequestConfig) {
        return ProjectApiFp(this.configuration).listProjects(requestParameters.companyId, requestParameters.$top, requestParameters.$skip, requestParameters.$limit, requestParameters.$filter, requestParameters.$select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates an object of type project in Dynamics 365 Business Central
     * @param {ProjectApiPatchProjectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public patchProject(requestParameters: ProjectApiPatchProjectRequest, options?: RawAxiosRequestConfig) {
        return ProjectApiFp(this.configuration).patchProject(requestParameters.companyId, requestParameters.projectId, requestParameters.contentType, requestParameters.ifMatch, requestParameters.postProjectRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Creates an object of type project in Dynamics 365 Business Central
     * @param {ProjectApiPostProjectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public postProject(requestParameters: ProjectApiPostProjectRequest, options?: RawAxiosRequestConfig) {
        return ProjectApiFp(this.configuration).postProject(requestParameters.companyId, requestParameters.contentType, requestParameters.postProjectRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetProjectSelectEnum = {
    Id: 'id',
    Number: 'number',
    DisplayName: 'displayName'
} as const;
export type GetProjectSelectEnum = typeof GetProjectSelectEnum[keyof typeof GetProjectSelectEnum];
/**
 * @export
 */
export const ListProjectsSelectEnum = {
    Id: 'id',
    Number: 'number',
    DisplayName: 'displayName'
} as const;
export type ListProjectsSelectEnum = typeof ListProjectsSelectEnum[keyof typeof ListProjectsSelectEnum];
