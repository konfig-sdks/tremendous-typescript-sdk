/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface CreateInvoice
 */
export interface CreateInvoice {
    /**
     * Reference to the purchase order number within your organization
     * @type {string}
     * @memberof CreateInvoice
     */
    'po_number'?: string | null;
    /**
     * Amount of the invoice in USD
     * @type {number}
     * @memberof CreateInvoice
     */
    'amount': number;
    /**
     * A note to be included in the invoice. This is for your internal use and will not be visible to the recipient. 
     * @type {string}
     * @memberof CreateInvoice
     */
    'memo'?: string | null;
}

