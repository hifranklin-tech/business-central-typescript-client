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


// May contain unused imports in some cases
// @ts-ignore
import type { Account } from './account';
// May contain unused imports in some cases
// @ts-ignore
import type { JournalLine } from './journal-line';

/**
 * 
 * @export
 * @interface Journal
 */
export interface Journal {
    /**
     * (v1.0) The id property for the Dynamics 365 Business Central journal entity
     * @type {string}
     * @memberof Journal
     */
    'id'?: string;
    /**
     * (v1.0) The code property for the Dynamics 365 Business Central journal entity
     * @type {string}
     * @memberof Journal
     */
    'code'?: string;
    /**
     * (v1.0) The displayName property for the Dynamics 365 Business Central journal entity
     * @type {string}
     * @memberof Journal
     */
    'displayName'?: string | null;
    /**
     * (v1.0) The lastModifiedDateTime property for the Dynamics 365 Business Central journal entity
     * @type {string}
     * @memberof Journal
     */
    'lastModifiedDateTime'?: string | null;
    /**
     * (v1.0) The balancingAccountId property for the Dynamics 365 Business Central journal entity
     * @type {string}
     * @memberof Journal
     */
    'balancingAccountId'?: string | null;
    /**
     * (v1.0) The balancingAccountNumber property for the Dynamics 365 Business Central journal entity
     * @type {string}
     * @memberof Journal
     */
    'balancingAccountNumber'?: string | null;
    /**
     * 
     * @type {Array<JournalLine>}
     * @memberof Journal
     */
    'journalLines'?: Array<JournalLine> | null;
    /**
     * 
     * @type {Account}
     * @memberof Journal
     */
    'account'?: Account;
}

