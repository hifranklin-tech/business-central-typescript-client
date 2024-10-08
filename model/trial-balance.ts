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

/**
 * 
 * @export
 * @interface TrialBalance
 */
export interface TrialBalance {
    /**
     * (v1.0) The number property for the Dynamics 365 Business Central trialBalance entity
     * @type {string}
     * @memberof TrialBalance
     */
    'number'?: string;
    /**
     * (v1.0) The accountId property for the Dynamics 365 Business Central trialBalance entity
     * @type {string}
     * @memberof TrialBalance
     */
    'accountId'?: string | null;
    /**
     * (v1.0) The accountType property for the Dynamics 365 Business Central trialBalance entity
     * @type {string}
     * @memberof TrialBalance
     */
    'accountType'?: string | null;
    /**
     * (v1.0) The display property for the Dynamics 365 Business Central trialBalance entity
     * @type {string}
     * @memberof TrialBalance
     */
    'display'?: string | null;
    /**
     * (v1.0) The totalDebit property for the Dynamics 365 Business Central trialBalance entity
     * @type {string}
     * @memberof TrialBalance
     */
    'totalDebit'?: string | null;
    /**
     * (v1.0) The totalCredit property for the Dynamics 365 Business Central trialBalance entity
     * @type {string}
     * @memberof TrialBalance
     */
    'totalCredit'?: string | null;
    /**
     * (v1.0) The balanceAtDateDebit property for the Dynamics 365 Business Central trialBalance entity
     * @type {string}
     * @memberof TrialBalance
     */
    'balanceAtDateDebit'?: string | null;
    /**
     * (v1.0) The balanceAtDateCredit property for the Dynamics 365 Business Central trialBalance entity
     * @type {string}
     * @memberof TrialBalance
     */
    'balanceAtDateCredit'?: string | null;
    /**
     * (v1.0) The dateFilter property for the Dynamics 365 Business Central trialBalance entity
     * @type {string}
     * @memberof TrialBalance
     */
    'dateFilter'?: string | null;
    /**
     * 
     * @type {Account}
     * @memberof TrialBalance
     */
    'account'?: Account;
}

