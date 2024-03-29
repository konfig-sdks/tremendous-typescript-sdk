/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrdersCreateOrder201ResponseOrderPaymentRefund } from './orders-create-order201-response-order-payment-refund';

/**
 * Cost breakdown of the order (cost of rewards + fees). Cost and fees are always denominated in USD, independent from the currency of the ordered rewards. Note that this property will only appear for processed orders (`status` is `EXECUTED`).
 * @export
 * @interface OrdersCreateOrder201ResponseOrderPayment
 */
export interface OrdersCreateOrder201ResponseOrderPayment {
    /**
     * Total price of the order before fees (in USD)
     * @type {number}
     * @memberof OrdersCreateOrder201ResponseOrderPayment
     */
    'subtotal'?: number;
    /**
     * Total price of the order including fees (in USD)
     * @type {number}
     * @memberof OrdersCreateOrder201ResponseOrderPayment
     */
    'total'?: number;
    /**
     * Fees for the order (in USD)
     * @type {number}
     * @memberof OrdersCreateOrder201ResponseOrderPayment
     */
    'fees'?: number;
    /**
     * 
     * @type {OrdersCreateOrder201ResponseOrderPaymentRefund}
     * @memberof OrdersCreateOrder201ResponseOrderPayment
     */
    'refund'?: OrdersCreateOrder201ResponseOrderPaymentRefund;
    /**
     * Name of the channel in which the order was created
     * @type {string}
     * @memberof OrdersCreateOrder201ResponseOrderPayment
     */
    'channel'?: OrdersCreateOrder201ResponseOrderPaymentChannelEnum;
}

type OrdersCreateOrder201ResponseOrderPaymentChannelEnum = 'UI' | 'API' | 'EMBED' | 'DECIPHER' | 'QUALTRICS' | 'TYPEFORM' | 'SURVEY MONKEY'


