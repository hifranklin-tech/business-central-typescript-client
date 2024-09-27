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
import type { AgedAccountsPayable } from './aged-accounts-payable';
// May contain unused imports in some cases
// @ts-ignore
import type { AgedAccountsReceivable } from './aged-accounts-receivable';
// May contain unused imports in some cases
// @ts-ignore
import type { Attachments } from './attachments';
// May contain unused imports in some cases
// @ts-ignore
import type { BalanceSheet } from './balance-sheet';
// May contain unused imports in some cases
// @ts-ignore
import type { BankAccount } from './bank-account';
// May contain unused imports in some cases
// @ts-ignore
import type { CashFlowStatement } from './cash-flow-statement';
// May contain unused imports in some cases
// @ts-ignore
import type { CompanyInformation } from './company-information';
// May contain unused imports in some cases
// @ts-ignore
import type { CountryRegion } from './country-region';
// May contain unused imports in some cases
// @ts-ignore
import type { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import type { Customer } from './customer';
// May contain unused imports in some cases
// @ts-ignore
import type { CustomerFinancialDetail } from './customer-financial-detail';
// May contain unused imports in some cases
// @ts-ignore
import type { CustomerPayment } from './customer-payment';
// May contain unused imports in some cases
// @ts-ignore
import type { CustomerPaymentJournal } from './customer-payment-journal';
// May contain unused imports in some cases
// @ts-ignore
import type { CustomerSale } from './customer-sale';
// May contain unused imports in some cases
// @ts-ignore
import type { DefaultDimensions } from './default-dimensions';
// May contain unused imports in some cases
// @ts-ignore
import type { Dimension } from './dimension';
// May contain unused imports in some cases
// @ts-ignore
import type { DimensionLine } from './dimension-line';
// May contain unused imports in some cases
// @ts-ignore
import type { DimensionValue } from './dimension-value';
// May contain unused imports in some cases
// @ts-ignore
import type { Employee } from './employee';
// May contain unused imports in some cases
// @ts-ignore
import type { GeneralLedgerEntry } from './general-ledger-entry';
// May contain unused imports in some cases
// @ts-ignore
import type { GeneralLedgerEntryAttachments } from './general-ledger-entry-attachments';
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatement } from './income-statement';
// May contain unused imports in some cases
// @ts-ignore
import type { Item } from './item';
// May contain unused imports in some cases
// @ts-ignore
import type { ItemCategory } from './item-category';
// May contain unused imports in some cases
// @ts-ignore
import type { Journal } from './journal';
// May contain unused imports in some cases
// @ts-ignore
import type { JournalLine } from './journal-line';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentMethod } from './payment-method';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentTerm } from './payment-term';
// May contain unused imports in some cases
// @ts-ignore
import type { PdfDocument } from './pdf-document';
// May contain unused imports in some cases
// @ts-ignore
import type { Picture } from './picture';
// May contain unused imports in some cases
// @ts-ignore
import type { Project } from './project';
// May contain unused imports in some cases
// @ts-ignore
import type { PurchaseInvoice } from './purchase-invoice';
// May contain unused imports in some cases
// @ts-ignore
import type { PurchaseInvoiceLine } from './purchase-invoice-line';
// May contain unused imports in some cases
// @ts-ignore
import type { RetainedEarningsStatement } from './retained-earnings-statement';
// May contain unused imports in some cases
// @ts-ignore
import type { SalesCreditMemo } from './sales-credit-memo';
// May contain unused imports in some cases
// @ts-ignore
import type { SalesCreditMemoLine } from './sales-credit-memo-line';
// May contain unused imports in some cases
// @ts-ignore
import type { SalesInvoice } from './sales-invoice';
// May contain unused imports in some cases
// @ts-ignore
import type { SalesInvoiceLine } from './sales-invoice-line';
// May contain unused imports in some cases
// @ts-ignore
import type { SalesOrder } from './sales-order';
// May contain unused imports in some cases
// @ts-ignore
import type { SalesOrderLine } from './sales-order-line';
// May contain unused imports in some cases
// @ts-ignore
import type { SalesQuote } from './sales-quote';
// May contain unused imports in some cases
// @ts-ignore
import type { SalesQuoteLine } from './sales-quote-line';
// May contain unused imports in some cases
// @ts-ignore
import type { ShipmentMethod } from './shipment-method';
// May contain unused imports in some cases
// @ts-ignore
import type { TaxArea } from './tax-area';
// May contain unused imports in some cases
// @ts-ignore
import type { TaxGroup } from './tax-group';
// May contain unused imports in some cases
// @ts-ignore
import type { TimeRegistrationEntry } from './time-registration-entry';
// May contain unused imports in some cases
// @ts-ignore
import type { TrialBalance } from './trial-balance';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitOfMeasure } from './unit-of-measure';
// May contain unused imports in some cases
// @ts-ignore
import type { Vendor } from './vendor';
// May contain unused imports in some cases
// @ts-ignore
import type { VendorPurchase } from './vendor-purchase';

/**
 * 
 * @export
 * @interface Company
 */
export interface Company {
    /**
     * (v1.0) The id property for the Dynamics 365 Business Central company entity
     * @type {string}
     * @memberof Company
     */
    'id'?: string;
    /**
     * (v1.0) The systemVersion property for the Dynamics 365 Business Central company entity
     * @type {string}
     * @memberof Company
     */
    'systemVersion'?: string | null;
    /**
     * (v1.0) The name property for the Dynamics 365 Business Central company entity
     * @type {string}
     * @memberof Company
     */
    'name'?: string | null;
    /**
     * (v1.0) The displayName property for the Dynamics 365 Business Central company entity
     * @type {string}
     * @memberof Company
     */
    'displayName'?: string | null;
    /**
     * (v1.0) The businessProfileId property for the Dynamics 365 Business Central company entity
     * @type {string}
     * @memberof Company
     */
    'businessProfileId'?: string | null;
    /**
     * 
     * @type {Array<Item>}
     * @memberof Company
     */
    'items'?: Array<Item> | null;
    /**
     * 
     * @type {Array<Picture>}
     * @memberof Company
     */
    'picture'?: Array<Picture> | null;
    /**
     * 
     * @type {Array<DefaultDimensions>}
     * @memberof Company
     */
    'defaultDimensions'?: Array<DefaultDimensions> | null;
    /**
     * 
     * @type {Array<Customer>}
     * @memberof Company
     */
    'customers'?: Array<Customer> | null;
    /**
     * 
     * @type {Array<CustomerFinancialDetail>}
     * @memberof Company
     */
    'customerFinancialDetails'?: Array<CustomerFinancialDetail> | null;
    /**
     * 
     * @type {Array<Vendor>}
     * @memberof Company
     */
    'vendors'?: Array<Vendor> | null;
    /**
     * 
     * @type {Array<CompanyInformation>}
     * @memberof Company
     */
    'companyInformation'?: Array<CompanyInformation> | null;
    /**
     * 
     * @type {Array<SalesInvoice>}
     * @memberof Company
     */
    'salesInvoices'?: Array<SalesInvoice> | null;
    /**
     * 
     * @type {Array<SalesInvoiceLine>}
     * @memberof Company
     */
    'salesInvoiceLines'?: Array<SalesInvoiceLine> | null;
    /**
     * 
     * @type {Array<PdfDocument>}
     * @memberof Company
     */
    'pdfDocument'?: Array<PdfDocument> | null;
    /**
     * 
     * @type {Array<CustomerPaymentJournal>}
     * @memberof Company
     */
    'customerPaymentJournals'?: Array<CustomerPaymentJournal> | null;
    /**
     * 
     * @type {Array<CustomerPayment>}
     * @memberof Company
     */
    'customerPayments'?: Array<CustomerPayment> | null;
    /**
     * 
     * @type {Array<Account>}
     * @memberof Company
     */
    'accounts'?: Array<Account> | null;
    /**
     * 
     * @type {Array<TaxGroup>}
     * @memberof Company
     */
    'taxGroups'?: Array<TaxGroup> | null;
    /**
     * 
     * @type {Array<Journal>}
     * @memberof Company
     */
    'journals'?: Array<Journal> | null;
    /**
     * 
     * @type {Array<JournalLine>}
     * @memberof Company
     */
    'journalLines'?: Array<JournalLine> | null;
    /**
     * 
     * @type {Array<Attachments>}
     * @memberof Company
     */
    'attachments'?: Array<Attachments> | null;
    /**
     * 
     * @type {Array<Employee>}
     * @memberof Company
     */
    'employees'?: Array<Employee> | null;
    /**
     * 
     * @type {Array<TimeRegistrationEntry>}
     * @memberof Company
     */
    'timeRegistrationEntries'?: Array<TimeRegistrationEntry> | null;
    /**
     * 
     * @type {Array<GeneralLedgerEntry>}
     * @memberof Company
     */
    'generalLedgerEntries'?: Array<GeneralLedgerEntry> | null;
    /**
     * 
     * @type {Array<Currency>}
     * @memberof Company
     */
    'currencies'?: Array<Currency> | null;
    /**
     * 
     * @type {Array<PaymentMethod>}
     * @memberof Company
     */
    'paymentMethods'?: Array<PaymentMethod> | null;
    /**
     * 
     * @type {Array<Dimension>}
     * @memberof Company
     */
    'dimensions'?: Array<Dimension> | null;
    /**
     * 
     * @type {Array<DimensionValue>}
     * @memberof Company
     */
    'dimensionValues'?: Array<DimensionValue> | null;
    /**
     * 
     * @type {Array<DimensionLine>}
     * @memberof Company
     */
    'dimensionLines'?: Array<DimensionLine> | null;
    /**
     * 
     * @type {Array<PaymentTerm>}
     * @memberof Company
     */
    'paymentTerms'?: Array<PaymentTerm> | null;
    /**
     * 
     * @type {Array<ShipmentMethod>}
     * @memberof Company
     */
    'shipmentMethods'?: Array<ShipmentMethod> | null;
    /**
     * 
     * @type {Array<ItemCategory>}
     * @memberof Company
     */
    'itemCategories'?: Array<ItemCategory> | null;
    /**
     * 
     * @type {Array<CashFlowStatement>}
     * @memberof Company
     */
    'cashFlowStatement'?: Array<CashFlowStatement> | null;
    /**
     * 
     * @type {Array<CountryRegion>}
     * @memberof Company
     */
    'countriesRegions'?: Array<CountryRegion> | null;
    /**
     * 
     * @type {Array<SalesOrder>}
     * @memberof Company
     */
    'salesOrders'?: Array<SalesOrder> | null;
    /**
     * 
     * @type {Array<SalesOrderLine>}
     * @memberof Company
     */
    'salesOrderLines'?: Array<SalesOrderLine> | null;
    /**
     * 
     * @type {Array<RetainedEarningsStatement>}
     * @memberof Company
     */
    'retainedEarningsStatement'?: Array<RetainedEarningsStatement> | null;
    /**
     * 
     * @type {Array<UnitOfMeasure>}
     * @memberof Company
     */
    'unitsOfMeasure'?: Array<UnitOfMeasure> | null;
    /**
     * 
     * @type {Array<AgedAccountsReceivable>}
     * @memberof Company
     */
    'agedAccountsReceivable'?: Array<AgedAccountsReceivable> | null;
    /**
     * 
     * @type {Array<AgedAccountsPayable>}
     * @memberof Company
     */
    'agedAccountsPayable'?: Array<AgedAccountsPayable> | null;
    /**
     * 
     * @type {Array<BalanceSheet>}
     * @memberof Company
     */
    'balanceSheet'?: Array<BalanceSheet> | null;
    /**
     * 
     * @type {Array<TrialBalance>}
     * @memberof Company
     */
    'trialBalance'?: Array<TrialBalance> | null;
    /**
     * 
     * @type {Array<IncomeStatement>}
     * @memberof Company
     */
    'incomeStatement'?: Array<IncomeStatement> | null;
    /**
     * 
     * @type {Array<TaxArea>}
     * @memberof Company
     */
    'taxAreas'?: Array<TaxArea> | null;
    /**
     * 
     * @type {Array<SalesQuote>}
     * @memberof Company
     */
    'salesQuotes'?: Array<SalesQuote> | null;
    /**
     * 
     * @type {Array<SalesQuoteLine>}
     * @memberof Company
     */
    'salesQuoteLines'?: Array<SalesQuoteLine> | null;
    /**
     * 
     * @type {Array<SalesCreditMemo>}
     * @memberof Company
     */
    'salesCreditMemos'?: Array<SalesCreditMemo> | null;
    /**
     * 
     * @type {Array<SalesCreditMemoLine>}
     * @memberof Company
     */
    'salesCreditMemoLines'?: Array<SalesCreditMemoLine> | null;
    /**
     * 
     * @type {Array<GeneralLedgerEntryAttachments>}
     * @memberof Company
     */
    'generalLedgerEntryAttachments'?: Array<GeneralLedgerEntryAttachments> | null;
    /**
     * 
     * @type {Array<PurchaseInvoice>}
     * @memberof Company
     */
    'purchaseInvoices'?: Array<PurchaseInvoice> | null;
    /**
     * 
     * @type {Array<PurchaseInvoiceLine>}
     * @memberof Company
     */
    'purchaseInvoiceLines'?: Array<PurchaseInvoiceLine> | null;
    /**
     * 
     * @type {Array<Project>}
     * @memberof Company
     */
    'projects'?: Array<Project> | null;
    /**
     * 
     * @type {Array<BankAccount>}
     * @memberof Company
     */
    'bankAccounts'?: Array<BankAccount> | null;
    /**
     * 
     * @type {Array<CustomerSale>}
     * @memberof Company
     */
    'customerSales'?: Array<CustomerSale> | null;
    /**
     * 
     * @type {Array<VendorPurchase>}
     * @memberof Company
     */
    'vendorPurchases'?: Array<VendorPurchase> | null;
}

