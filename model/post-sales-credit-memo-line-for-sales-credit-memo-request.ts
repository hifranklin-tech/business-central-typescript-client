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
import type { Documentlineobjectdetailstype } from './documentlineobjectdetailstype';
// May contain unused imports in some cases
// @ts-ignore
import type { Unitofmeasuretype } from './unitofmeasuretype';

/**
 * 
 * @export
 * @interface PostSalesCreditMemoLineForSalesCreditMemoRequest
 */
export interface PostSalesCreditMemoLineForSalesCreditMemoRequest {
    /**
     * (v1.0) The id property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {string}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'id'?: string;
    /**
     * (v1.0) The documentId property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {string}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'documentId'?: string | null;
    /**
     * (v1.0) The sequence property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {number}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'sequence'?: number | null;
    /**
     * (v1.0) The itemId property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {string}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'itemId'?: string | null;
    /**
     * (v1.0) The accountId property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {string}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'accountId'?: string | null;
    /**
     * (v1.0) The lineType property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {string}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'lineType'?: string | null;
    /**
     * 
     * @type {Documentlineobjectdetailstype}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'lineDetails'?: Documentlineobjectdetailstype;
    /**
     * (v1.0) The description property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {string}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'description'?: string | null;
    /**
     * (v1.0) The unitOfMeasureId property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {string}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'unitOfMeasureId'?: string | null;
    /**
     * 
     * @type {Unitofmeasuretype}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'unitOfMeasure'?: Unitofmeasuretype;
    /**
     * (v1.0) The unitPrice property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {number}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'unitPrice'?: number | null;
    /**
     * (v1.0) The quantity property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {number}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'quantity'?: number | null;
    /**
     * (v1.0) The discountAmount property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {number}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'discountAmount'?: number | null;
    /**
     * (v1.0) The discountPercent property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {number}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'discountPercent'?: number | null;
    /**
     * (v1.0) The discountAppliedBeforeTax property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {boolean}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'discountAppliedBeforeTax'?: boolean | null;
    /**
     * (v1.0) The amountExcludingTax property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {number}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'amountExcludingTax'?: number | null;
    /**
     * (v1.0) The taxCode property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {string}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'taxCode'?: string | null;
    /**
     * (v1.0) The taxPercent property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {number}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'taxPercent'?: number | null;
    /**
     * (v1.0) The totalTaxAmount property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {number}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'totalTaxAmount'?: number | null;
    /**
     * (v1.0) The amountIncludingTax property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {number}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'amountIncludingTax'?: number | null;
    /**
     * (v1.0) The invoiceDiscountAllocation property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {number}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'invoiceDiscountAllocation'?: number | null;
    /**
     * (v1.0) The netAmount property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {number}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'netAmount'?: number | null;
    /**
     * (v1.0) The netTaxAmount property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {number}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'netTaxAmount'?: number | null;
    /**
     * (v1.0) The netAmountIncludingTax property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {number}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'netAmountIncludingTax'?: number | null;
    /**
     * (v1.0) The shipmentDate property for the Dynamics 365 Business Central salesCreditMemoLine entity
     * @type {string}
     * @memberof PostSalesCreditMemoLineForSalesCreditMemoRequest
     */
    'shipmentDate'?: string | null;
}

