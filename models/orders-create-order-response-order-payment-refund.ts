/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Breakdown of the order refunds (total amount in USD, independent from the currency of the ordered rewards). Note that this property will only appear for canceled orders or orders with canceled rewards. 
 * @export
 * @interface OrdersCreateOrderResponseOrderPaymentRefund
 */
export interface OrdersCreateOrderResponseOrderPaymentRefund {
    /**
     * Total amount of the order refunds (in USD)
     * @type {number}
     * @memberof OrdersCreateOrderResponseOrderPaymentRefund
     */
    'total': number;
}

