/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrdersGetOrderById429ResponseErrors } from './orders-get-order-by-id429-response-errors';

/**
 * 
 * @export
 * @interface OrdersGetOrderById429Response
 */
export interface OrdersGetOrderById429Response {
    /**
     * 
     * @type {OrdersGetOrderById429ResponseErrors}
     * @memberof OrdersGetOrderById429Response
     */
    'errors': OrdersGetOrderById429ResponseErrors;
}

