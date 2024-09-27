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
 * @interface PostSalesQuoteLineForSalesQuoteRequest
 */
export interface PostSalesQuoteLineForSalesQuoteRequest {
    /**
     * (v1.0) The id property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {string}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'id'?: string;
    /**
     * (v1.0) The documentId property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {string}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'documentId'?: string | null;
    /**
     * (v1.0) The sequence property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {number}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'sequence'?: number | null;
    /**
     * (v1.0) The itemId property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {string}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'itemId'?: string | null;
    /**
     * (v1.0) The accountId property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {string}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'accountId'?: string | null;
    /**
     * (v1.0) The lineType property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {string}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'lineType'?: string | null;
    /**
     * 
     * @type {Documentlineobjectdetailstype}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'lineDetails'?: Documentlineobjectdetailstype;
    /**
     * (v1.0) The description property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {string}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'description'?: string | null;
    /**
     * (v1.0) The unitOfMeasureId property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {string}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'unitOfMeasureId'?: string | null;
    /**
     * 
     * @type {Unitofmeasuretype}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'unitOfMeasure'?: Unitofmeasuretype;
    /**
     * (v1.0) The unitPrice property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {number}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'unitPrice'?: number | null;
    /**
     * (v1.0) The quantity property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {number}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'quantity'?: number | null;
    /**
     * (v1.0) The discountAmount property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {number}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'discountAmount'?: number | null;
    /**
     * (v1.0) The discountPercent property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {number}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'discountPercent'?: number | null;
    /**
     * (v1.0) The discountAppliedBeforeTax property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {boolean}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'discountAppliedBeforeTax'?: boolean | null;
    /**
     * (v1.0) The amountExcludingTax property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {number}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'amountExcludingTax'?: number | null;
    /**
     * (v1.0) The taxCode property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {string}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'taxCode'?: string | null;
    /**
     * (v1.0) The taxPercent property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {number}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'taxPercent'?: number | null;
    /**
     * (v1.0) The totalTaxAmount property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {number}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'totalTaxAmount'?: number | null;
    /**
     * (v1.0) The amountIncludingTax property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {number}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'amountIncludingTax'?: number | null;
    /**
     * (v1.0) The netAmount property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {number}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'netAmount'?: number | null;
    /**
     * (v1.0) The netTaxAmount property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {number}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'netTaxAmount'?: number | null;
    /**
     * (v1.0) The netAmountIncludingTax property for the Dynamics 365 Business Central salesQuoteLine entity
     * @type {number}
     * @memberof PostSalesQuoteLineForSalesQuoteRequest
     */
    'netAmountIncludingTax'?: number | null;
}

