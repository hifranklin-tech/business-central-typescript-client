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
import type { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import type { CustomerFinancialDetail } from './customer-financial-detail';
// May contain unused imports in some cases
// @ts-ignore
import type { DefaultDimensions } from './default-dimensions';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentMethod } from './payment-method';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentTerm } from './payment-term';
// May contain unused imports in some cases
// @ts-ignore
import type { Picture } from './picture';
// May contain unused imports in some cases
// @ts-ignore
import type { Postaladdresstype } from './postaladdresstype';
// May contain unused imports in some cases
// @ts-ignore
import type { ShipmentMethod } from './shipment-method';

/**
 * 
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     * (v1.0) The id property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'id'?: string;
    /**
     * (v1.0) The number property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'number'?: string | null;
    /**
     * (v1.0) The displayName property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'displayName'?: string;
    /**
     * (v1.0) The type property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'type'?: string | null;
    /**
     * 
     * @type {Postaladdresstype}
     * @memberof Customer
     */
    'address'?: Postaladdresstype;
    /**
     * (v1.0) The phoneNumber property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'phoneNumber'?: string | null;
    /**
     * (v1.0) The email property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'email'?: string | null;
    /**
     * (v1.0) The website property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'website'?: string | null;
    /**
     * (v1.0) The taxLiable property for the Dynamics 365 Business Central customer entity
     * @type {boolean}
     * @memberof Customer
     */
    'taxLiable'?: boolean | null;
    /**
     * (v1.0) The taxAreaId property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'taxAreaId'?: string | null;
    /**
     * (v1.0) The taxAreaDisplayName property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'taxAreaDisplayName'?: string | null;
    /**
     * (v1.0) The taxRegistrationNumber property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'taxRegistrationNumber'?: string | null;
    /**
     * (v1.0) The currencyId property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'currencyId'?: string | null;
    /**
     * (v1.0) The currencyCode property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'currencyCode'?: string | null;
    /**
     * (v1.0) The paymentTermsId property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'paymentTermsId'?: string | null;
    /**
     * (v1.0) The shipmentMethodId property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'shipmentMethodId'?: string | null;
    /**
     * (v1.0) The paymentMethodId property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'paymentMethodId'?: string | null;
    /**
     * (v1.0) The blocked property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'blocked'?: string | null;
    /**
     * (v1.0) The lastModifiedDateTime property for the Dynamics 365 Business Central customer entity
     * @type {string}
     * @memberof Customer
     */
    'lastModifiedDateTime'?: string | null;
    /**
     * 
     * @type {Array<CustomerFinancialDetail>}
     * @memberof Customer
     */
    'customerFinancialDetails'?: Array<CustomerFinancialDetail> | null;
    /**
     * 
     * @type {Array<Picture>}
     * @memberof Customer
     */
    'picture'?: Array<Picture> | null;
    /**
     * 
     * @type {Array<DefaultDimensions>}
     * @memberof Customer
     */
    'defaultDimensions'?: Array<DefaultDimensions> | null;
    /**
     * 
     * @type {Currency}
     * @memberof Customer
     */
    'currency'?: Currency;
    /**
     * 
     * @type {PaymentTerm}
     * @memberof Customer
     */
    'paymentTerm'?: PaymentTerm;
    /**
     * 
     * @type {ShipmentMethod}
     * @memberof Customer
     */
    'shipmentMethod'?: ShipmentMethod;
    /**
     * 
     * @type {PaymentMethod}
     * @memberof Customer
     */
    'paymentMethod'?: PaymentMethod;
}

