/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrdersGetOrderByIdResponseOrderRewardCustomFieldsInner } from './orders-get-order-by-id-response-order-reward-custom-fields-inner';
import { OrdersGetOrderByIdResponseOrderRewardRecipient } from './orders-get-order-by-id-response-order-reward-recipient';
import { OrdersGetOrderByIdResponseOrderRewardValue } from './orders-get-order-by-id-response-order-reward-value';
import { RewardsListAllRewardsResponseRewardsInnerDelivery } from './rewards-list-all-rewards-response-rewards-inner-delivery';

/**
 * A single reward, sent to a recipient. A reward is always part of an order.  Either `products` or `campaign_id` must be specified. 
 * @export
 * @interface OrdersGetOrderByIdResponseOrderReward
 */
export interface OrdersGetOrderByIdResponseOrderReward {
    /**
     * Tremendous ID of the reward
     * @type {string}
     * @memberof OrdersGetOrderByIdResponseOrderReward
     */
    'id'?: string;
    /**
     * Tremendous ID of the order this reward is part of.
     * @type {string}
     * @memberof OrdersGetOrderByIdResponseOrderReward
     */
    'order_id'?: string;
    /**
     * Date the reward was created
     * @type {string}
     * @memberof OrdersGetOrderByIdResponseOrderReward
     */
    'created_at'?: string;
    /**
     * 
     * @type {OrdersGetOrderByIdResponseOrderRewardValue}
     * @memberof OrdersGetOrderByIdResponseOrderReward
     */
    'value'?: OrdersGetOrderByIdResponseOrderRewardValue;
    /**
     * 
     * @type {OrdersGetOrderByIdResponseOrderRewardRecipient}
     * @memberof OrdersGetOrderByIdResponseOrderReward
     */
    'recipient'?: OrdersGetOrderByIdResponseOrderRewardRecipient;
    /**
     * Timestamp of reward delivery within the next year. Note that if date-time is provided, the time values will be ignored.
     * @type {string}
     * @memberof OrdersGetOrderByIdResponseOrderReward
     */
    'deliver_at'?: string;
    /**
     * 
     * @type {Array<OrdersGetOrderByIdResponseOrderRewardCustomFieldsInner>}
     * @memberof OrdersGetOrderByIdResponseOrderReward
     */
    'custom_fields'?: Array<OrdersGetOrderByIdResponseOrderRewardCustomFieldsInner>;
    /**
     * 
     * @type {RewardsListAllRewardsResponseRewardsInnerDelivery}
     * @memberof OrdersGetOrderByIdResponseOrderReward
     */
    'delivery'?: RewardsListAllRewardsResponseRewardsInnerDelivery;
}

