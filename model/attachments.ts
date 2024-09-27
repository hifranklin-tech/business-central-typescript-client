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



/**
 * 
 * @export
 * @interface Attachments
 */
export interface Attachments {
    /**
     * (v1.0) The parentId property for the Dynamics 365 Business Central attachments entity
     * @type {string}
     * @memberof Attachments
     */
    'parentId'?: string;
    /**
     * (v1.0) The id property for the Dynamics 365 Business Central attachments entity
     * @type {string}
     * @memberof Attachments
     */
    'id'?: string;
    /**
     * (v1.0) The fileName property for the Dynamics 365 Business Central attachments entity
     * @type {string}
     * @memberof Attachments
     */
    'fileName'?: string | null;
    /**
     * (v1.0) The byteSize property for the Dynamics 365 Business Central attachments entity
     * @type {number}
     * @memberof Attachments
     */
    'byteSize'?: number | null;
    /**
     * (v1.0) The content property for the Dynamics 365 Business Central attachments entity
     * @type {File}
     * @memberof Attachments
     */
    'content'?: File | null;
    /**
     * (v1.0) The lastModifiedDateTime property for the Dynamics 365 Business Central attachments entity
     * @type {string}
     * @memberof Attachments
     */
    'lastModifiedDateTime'?: string | null;
}

