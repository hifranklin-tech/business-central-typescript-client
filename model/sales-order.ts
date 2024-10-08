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
import type { Customer } from './customer';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentTerm } from './payment-term';
// May contain unused imports in some cases
// @ts-ignore
import type { Postaladdresstype } from './postaladdresstype';
// May contain unused imports in some cases
// @ts-ignore
import type { SalesOrderLine } from './sales-order-line';
// May contain unused imports in some cases
// @ts-ignore
import type { ShipmentMethod } from './shipment-method';

/**
 * 
 * @export
 * @interface SalesOrder
 */
export interface SalesOrder {
    /**
     * (v1.0) The id property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'id'?: string;
    /**
     * (v1.0) The number property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'number'?: string | null;
    /**
     * (v1.0) The externalDocumentNumber property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'externalDocumentNumber'?: string | null;
    /**
     * (v1.0) The orderDate property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'orderDate'?: string | null;
    /**
     * (v1.0) The customerId property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'customerId'?: string | null;
    /**
     * (v1.0) The contactId property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'contactId'?: string | null;
    /**
     * (v1.0) The customerNumber property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'customerNumber'?: string | null;
    /**
     * (v1.0) The customerName property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'customerName'?: string | null;
    /**
     * (v1.0) The billToName property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'billToName'?: string | null;
    /**
     * (v1.0) The billToCustomerId property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'billToCustomerId'?: string | null;
    /**
     * (v1.0) The billToCustomerNumber property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'billToCustomerNumber'?: string | null;
    /**
     * (v1.0) The shipToName property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'shipToName'?: string | null;
    /**
     * (v1.0) The shipToContact property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'shipToContact'?: string | null;
    /**
     * 
     * @type {Postaladdresstype}
     * @memberof SalesOrder
     */
    'sellingPostalAddress'?: Postaladdresstype;
    /**
     * 
     * @type {Postaladdresstype}
     * @memberof SalesOrder
     */
    'billingPostalAddress'?: Postaladdresstype;
    /**
     * 
     * @type {Postaladdresstype}
     * @memberof SalesOrder
     */
    'shippingPostalAddress'?: Postaladdresstype;
    /**
     * (v1.0) The currencyId property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'currencyId'?: string | null;
    /**
     * (v1.0) The currencyCode property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'currencyCode'?: string | null;
    /**
     * (v1.0) The pricesIncludeTax property for the Dynamics 365 Business Central salesOrder entity
     * @type {boolean}
     * @memberof SalesOrder
     */
    'pricesIncludeTax'?: boolean | null;
    /**
     * (v1.0) The paymentTermsId property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'paymentTermsId'?: string | null;
    /**
     * (v1.0) The shipmentMethodId property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'shipmentMethodId'?: string | null;
    /**
     * (v1.0) The salesperson property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'salesperson'?: string | null;
    /**
     * (v1.0) The partialShipping property for the Dynamics 365 Business Central salesOrder entity
     * @type {boolean}
     * @memberof SalesOrder
     */
    'partialShipping'?: boolean | null;
    /**
     * (v1.0) The requestedDeliveryDate property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'requestedDeliveryDate'?: string | null;
    /**
     * (v1.0) The discountAmount property for the Dynamics 365 Business Central salesOrder entity
     * @type {number}
     * @memberof SalesOrder
     */
    'discountAmount'?: number | null;
    /**
     * (v1.0) The discountAppliedBeforeTax property for the Dynamics 365 Business Central salesOrder entity
     * @type {boolean}
     * @memberof SalesOrder
     */
    'discountAppliedBeforeTax'?: boolean | null;
    /**
     * (v1.0) The totalAmountExcludingTax property for the Dynamics 365 Business Central salesOrder entity
     * @type {number}
     * @memberof SalesOrder
     */
    'totalAmountExcludingTax'?: number | null;
    /**
     * (v1.0) The totalTaxAmount property for the Dynamics 365 Business Central salesOrder entity
     * @type {number}
     * @memberof SalesOrder
     */
    'totalTaxAmount'?: number | null;
    /**
     * (v1.0) The totalAmountIncludingTax property for the Dynamics 365 Business Central salesOrder entity
     * @type {number}
     * @memberof SalesOrder
     */
    'totalAmountIncludingTax'?: number | null;
    /**
     * (v1.0) The fullyShipped property for the Dynamics 365 Business Central salesOrder entity
     * @type {boolean}
     * @memberof SalesOrder
     */
    'fullyShipped'?: boolean | null;
    /**
     * (v1.0) The status property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'status'?: string | null;
    /**
     * (v1.0) The lastModifiedDateTime property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'lastModifiedDateTime'?: string | null;
    /**
     * (v1.0) The phoneNumber property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'phoneNumber'?: string | null;
    /**
     * (v1.0) The email property for the Dynamics 365 Business Central salesOrder entity
     * @type {string}
     * @memberof SalesOrder
     */
    'email'?: string | null;
    /**
     * 
     * @type {Array<SalesOrderLine>}
     * @memberof SalesOrder
     */
    'salesOrderLines'?: Array<SalesOrderLine> | null;
    /**
     * 
     * @type {Customer}
     * @memberof SalesOrder
     */
    'customer'?: Customer;
    /**
     * 
     * @type {Currency}
     * @memberof SalesOrder
     */
    'currency'?: Currency;
    /**
     * 
     * @type {PaymentTerm}
     * @memberof SalesOrder
     */
    'paymentTerm'?: PaymentTerm;
    /**
     * 
     * @type {ShipmentMethod}
     * @memberof SalesOrder
     */
    'shipmentMethod'?: ShipmentMethod;
}

