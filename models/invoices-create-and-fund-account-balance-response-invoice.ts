/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Invoices are instruments to fund your Tremendous account\'s balance.  Invoices can be created by your organization programatically. Once we receive your payment, the invoice is marked as `PAID` and we add the respective funds to your account\'s balance. 
 * @export
 * @interface InvoicesCreateAndFundAccountBalanceResponseInvoice
 */
export interface InvoicesCreateAndFundAccountBalanceResponseInvoice {
    /**
     * The invoice number
     * @type {string}
     * @memberof InvoicesCreateAndFundAccountBalanceResponseInvoice
     */
    'id': string;
    /**
     * Reference to the purchase order number within your organization
     * @type {string}
     * @memberof InvoicesCreateAndFundAccountBalanceResponseInvoice
     */
    'po_number'?: string | null;
    /**
     * Amount of the invoice in USD
     * @type {number}
     * @memberof InvoicesCreateAndFundAccountBalanceResponseInvoice
     */
    'amount': number;
    /**
     * Status of this invoice  <table>   <thead>     <tr>       <th>Status</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td><code>DELETED</code></td>       <td>Invoice has been deleted by your organization</td>     </tr>     <tr>       <td><code>PAID</code></td>       <td>Invoice has been paid by your organization</td>     </tr>     <tr>       <td><code>OPEN</code></td>       <td>Invoice has been created by your organization but has not been paid, yet</td>     </tr>   </tbody> </table> 
     * @type {string}
     * @memberof InvoicesCreateAndFundAccountBalanceResponseInvoice
     */
    'status': InvoicesCreateAndFundAccountBalanceResponseInvoiceStatusEnum;
    /**
     * List of orders related to the invoice (it doesn\'t apply to prefunding)
     * @type {Array<string>}
     * @memberof InvoicesCreateAndFundAccountBalanceResponseInvoice
     */
    'orders'?: Array<string>;
    /**
     * List of rewards related to the invoice (it doesn\'t apply to prefunding)
     * @type {Array<string>}
     * @memberof InvoicesCreateAndFundAccountBalanceResponseInvoice
     */
    'rewards'?: Array<string>;
    /**
     * Timestamp of when the invoice has been created. 
     * @type {string}
     * @memberof InvoicesCreateAndFundAccountBalanceResponseInvoice
     */
    'created_at': string;
    /**
     * Timestamp of when the invoice has been paid. 
     * @type {string}
     * @memberof InvoicesCreateAndFundAccountBalanceResponseInvoice
     */
    'paid_at': string | null;
}

type InvoicesCreateAndFundAccountBalanceResponseInvoiceStatusEnum = 'DELETED' | 'PAID' | 'OPEN' | 'MARKED_AS_PAID'


