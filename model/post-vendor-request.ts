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
import type { Postaladdresstype } from './postaladdresstype';

/**
 * 
 * @export
 * @interface PostVendorRequest
 */
export interface PostVendorRequest {
    /**
     * (v1.0) The id property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'id'?: string;
    /**
     * (v1.0) The number property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'number'?: string | null;
    /**
     * (v1.0) The displayName property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'displayName'?: string | null;
    /**
     * 
     * @type {Postaladdresstype}
     * @memberof PostVendorRequest
     */
    'address'?: Postaladdresstype;
    /**
     * (v1.0) The phoneNumber property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'phoneNumber'?: string | null;
    /**
     * (v1.0) The email property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'email'?: string | null;
    /**
     * (v1.0) The website property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'website'?: string | null;
    /**
     * (v1.0) The taxRegistrationNumber property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'taxRegistrationNumber'?: string | null;
    /**
     * (v1.0) The currencyId property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'currencyId'?: string | null;
    /**
     * (v1.0) The currencyCode property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'currencyCode'?: string | null;
    /**
     * (v1.0) The irs1099Code property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'irs1099Code'?: string | null;
    /**
     * (v1.0) The paymentTermsId property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'paymentTermsId'?: string | null;
    /**
     * (v1.0) The paymentMethodId property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'paymentMethodId'?: string | null;
    /**
     * (v1.0) The taxLiable property for the Dynamics 365 Business Central vendor entity
     * @type {boolean}
     * @memberof PostVendorRequest
     */
    'taxLiable'?: boolean | null;
    /**
     * (v1.0) The blocked property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'blocked'?: string | null;
    /**
     * (v1.0) The balance property for the Dynamics 365 Business Central vendor entity
     * @type {number}
     * @memberof PostVendorRequest
     */
    'balance'?: number | null;
    /**
     * (v1.0) The lastModifiedDateTime property for the Dynamics 365 Business Central vendor entity
     * @type {string}
     * @memberof PostVendorRequest
     */
    'lastModifiedDateTime'?: string | null;
}

