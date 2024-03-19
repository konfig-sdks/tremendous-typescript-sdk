/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrderForCreatePayment } from './order-for-create-payment';
import { OrderForCreateReward } from './order-for-create-reward';

/**
 * 
 * @export
 * @interface OrderForCreate
 */
export interface OrderForCreate {
    /**
     * Reference for this order, supplied by the customer.  When set, `external_id` makes order idempotent. All requests that use the same `external_id` after the initial order creation, will result in a response that returns the data of the initially created order. The response will have a `201` response code. These responses **fail** to create any further orders.  It also allows for retrieving by `external_id` instead of `id` only. 
     * @type {string}
     * @memberof OrderForCreate
     */
    'external_id'?: string | null;
    /**
     * 
     * @type {OrderForCreatePayment}
     * @memberof OrderForCreate
     */
    'payment': OrderForCreatePayment;
    /**
     * 
     * @type {OrderForCreateReward}
     * @memberof OrderForCreate
     */
    'reward': OrderForCreateReward;
}

