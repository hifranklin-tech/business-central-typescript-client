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
 * @interface PostJournalRequest
 */
export interface PostJournalRequest {
    /**
     * (v1.0) The id property for the Dynamics 365 Business Central journal entity
     * @type {string}
     * @memberof PostJournalRequest
     */
    'id'?: string;
    /**
     * (v1.0) The code property for the Dynamics 365 Business Central journal entity
     * @type {string}
     * @memberof PostJournalRequest
     */
    'code'?: string;
    /**
     * (v1.0) The displayName property for the Dynamics 365 Business Central journal entity
     * @type {string}
     * @memberof PostJournalRequest
     */
    'displayName'?: string | null;
    /**
     * (v1.0) The lastModifiedDateTime property for the Dynamics 365 Business Central journal entity
     * @type {string}
     * @memberof PostJournalRequest
     */
    'lastModifiedDateTime'?: string | null;
    /**
     * (v1.0) The balancingAccountId property for the Dynamics 365 Business Central journal entity
     * @type {string}
     * @memberof PostJournalRequest
     */
    'balancingAccountId'?: string | null;
    /**
     * (v1.0) The balancingAccountNumber property for the Dynamics 365 Business Central journal entity
     * @type {string}
     * @memberof PostJournalRequest
     */
    'balancingAccountNumber'?: string | null;
}

