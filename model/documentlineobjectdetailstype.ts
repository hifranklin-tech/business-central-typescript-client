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
import type { Item } from './item';

/**
 * 
 * @export
 * @interface Documentlineobjectdetailstype
 */
export interface Documentlineobjectdetailstype {
    /**
     * (v1.0) The number property for the Dynamics 365 Business Central documentlineobjectdetailstype entity
     * @type {string}
     * @memberof Documentlineobjectdetailstype
     */
    'number'?: string | null;
    /**
     * (v1.0) The displayName property for the Dynamics 365 Business Central documentlineobjectdetailstype entity
     * @type {string}
     * @memberof Documentlineobjectdetailstype
     */
    'displayName'?: string | null;
    /**
     * 
     * @type {Item}
     * @memberof Documentlineobjectdetailstype
     */
    'item'?: Item;
    /**
     * 
     * @type {Account}
     * @memberof Documentlineobjectdetailstype
     */
    'account'?: Account;
}

