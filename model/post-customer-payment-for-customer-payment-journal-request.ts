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
import type { Dimensiontype } from './dimensiontype';

/**
 * 
 * @export
 * @interface PostCustomerPaymentForCustomerPaymentJournalRequest
 */
export interface PostCustomerPaymentForCustomerPaymentJournalRequest {
    /**
     * (v1.0) The id property for the Dynamics 365 Business Central customerPayment entity
     * @type {string}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'id'?: string;
    /**
     * (v1.0) The journalDisplayName property for the Dynamics 365 Business Central customerPayment entity
     * @type {string}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'journalDisplayName'?: string | null;
    /**
     * (v1.0) The lineNumber property for the Dynamics 365 Business Central customerPayment entity
     * @type {number}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'lineNumber'?: number | null;
    /**
     * (v1.0) The customerId property for the Dynamics 365 Business Central customerPayment entity
     * @type {string}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'customerId'?: string | null;
    /**
     * (v1.0) The customerNumber property for the Dynamics 365 Business Central customerPayment entity
     * @type {string}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'customerNumber'?: string | null;
    /**
     * (v1.0) The contactId property for the Dynamics 365 Business Central customerPayment entity
     * @type {string}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'contactId'?: string | null;
    /**
     * (v1.0) The postingDate property for the Dynamics 365 Business Central customerPayment entity
     * @type {string}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'postingDate'?: string | null;
    /**
     * (v1.0) The documentNumber property for the Dynamics 365 Business Central customerPayment entity
     * @type {string}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'documentNumber'?: string | null;
    /**
     * (v1.0) The externalDocumentNumber property for the Dynamics 365 Business Central customerPayment entity
     * @type {string}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'externalDocumentNumber'?: string | null;
    /**
     * (v1.0) The amount property for the Dynamics 365 Business Central customerPayment entity
     * @type {number}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'amount'?: number | null;
    /**
     * (v1.0) The appliesToInvoiceId property for the Dynamics 365 Business Central customerPayment entity
     * @type {string}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'appliesToInvoiceId'?: string | null;
    /**
     * (v1.0) The appliesToInvoiceNumber property for the Dynamics 365 Business Central customerPayment entity
     * @type {string}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'appliesToInvoiceNumber'?: string | null;
    /**
     * (v1.0) The description property for the Dynamics 365 Business Central customerPayment entity
     * @type {string}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'description'?: string | null;
    /**
     * (v1.0) The comment property for the Dynamics 365 Business Central customerPayment entity
     * @type {string}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'comment'?: string | null;
    /**
     * 
     * @type {Array<Dimensiontype>}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'dimensions'?: Array<Dimensiontype>;
    /**
     * (v1.0) The lastModifiedDateTime property for the Dynamics 365 Business Central customerPayment entity
     * @type {string}
     * @memberof PostCustomerPaymentForCustomerPaymentJournalRequest
     */
    'lastModifiedDateTime'?: string | null;
}

