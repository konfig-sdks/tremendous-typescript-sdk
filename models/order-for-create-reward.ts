/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrderForCreateRewardCustomFieldsInner } from './order-for-create-reward-custom-fields-inner';
import { OrderForCreateRewardRecipient } from './order-for-create-reward-recipient';
import { OrderForCreateRewardValue } from './order-for-create-reward-value';
import { RewardForOrderCreateDelivery } from './reward-for-order-create-delivery';

/**
 * A single reward, sent to a recipient. A reward is always part of an order.  Either `products` or `campaign_id` must be specified. 
 * @export
 * @interface OrderForCreateReward
 */
export interface OrderForCreateReward {
    /**
     * Tremendous ID of the reward
     * @type {string}
     * @memberof OrderForCreateReward
     */
    'id'?: string;
    /**
     * Tremendous ID of the order this reward is part of.
     * @type {string}
     * @memberof OrderForCreateReward
     */
    'order_id'?: string;
    /**
     * Date the reward was created
     * @type {string}
     * @memberof OrderForCreateReward
     */
    'created_at'?: string;
    /**
     * ID of the campaign in your account, that defines the available products (different gift cards, charity, etc.) that the recipient can choose from. 
     * @type {string}
     * @memberof OrderForCreateReward
     */
    'campaign_id'?: string | null;
    /**
     * List of IDs of product (different gift cards, charity, etc.) that will be available to the recipient to choose from.  Providing a `products` array will override the products made available by the campaign specified using the `campaign_id` property unless the `products` array is empty. It will _not_ override other campaign attributes, like the message and customization of the look and feel. 
     * @type {Array<string>}
     * @memberof OrderForCreateReward
     */
    'products'?: Array<string>;
    /**
     * 
     * @type {OrderForCreateRewardValue}
     * @memberof OrderForCreateReward
     */
    'value'?: OrderForCreateRewardValue;
    /**
     * 
     * @type {OrderForCreateRewardRecipient}
     * @memberof OrderForCreateReward
     */
    'recipient'?: OrderForCreateRewardRecipient;
    /**
     * Timestamp of reward delivery within the next year. Note that if date-time is provided, the time values will be ignored.
     * @type {string}
     * @memberof OrderForCreateReward
     */
    'deliver_at'?: string;
    /**
     * 
     * @type {Array<OrderForCreateRewardCustomFieldsInner>}
     * @memberof OrderForCreateReward
     */
    'custom_fields'?: Array<OrderForCreateRewardCustomFieldsInner>;
    /**
     * Set this to translate the redemption experience for this reward. Pass a 2-letter [ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the desired language. Defaults to `en`. 
     * @type {string}
     * @memberof OrderForCreateReward
     */
    'language'?: string;
    /**
     * 
     * @type {RewardForOrderCreateDelivery}
     * @memberof OrderForCreateReward
     */
    'delivery'?: RewardForOrderCreateDelivery;
}
