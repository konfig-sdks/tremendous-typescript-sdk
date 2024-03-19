/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RewardForOrderCreateCustomFieldsInner } from './reward-for-order-create-custom-fields-inner';
import { RewardForOrderCreateDelivery } from './reward-for-order-create-delivery';
import { RewardForOrderCreateRecipient } from './reward-for-order-create-recipient';
import { RewardForOrderCreateValue } from './reward-for-order-create-value';

/**
 * A single reward, sent to a recipient. A reward is always part of an order.  Either `products` or `campaign_id` must be specified. 
 * @export
 * @interface RewardForOrderCreate
 */
export interface RewardForOrderCreate {
    /**
     * Tremendous ID of the reward
     * @type {string}
     * @memberof RewardForOrderCreate
     */
    'id'?: string;
    /**
     * Tremendous ID of the order this reward is part of.
     * @type {string}
     * @memberof RewardForOrderCreate
     */
    'order_id'?: string;
    /**
     * Date the reward was created
     * @type {string}
     * @memberof RewardForOrderCreate
     */
    'created_at'?: string;
    /**
     * ID of the campaign in your account, that defines the available products (different gift cards, charity, etc.) that the recipient can choose from. 
     * @type {string}
     * @memberof RewardForOrderCreate
     */
    'campaign_id'?: string | null;
    /**
     * List of IDs of product (different gift cards, charity, etc.) that will be available to the recipient to choose from.  Providing a `products` array will override the products made available by the campaign specified using the `campaign_id` property unless the `products` array is empty. It will _not_ override other campaign attributes, like the message and customization of the look and feel. 
     * @type {Array<string>}
     * @memberof RewardForOrderCreate
     */
    'products'?: Array<string>;
    /**
     * 
     * @type {RewardForOrderCreateValue}
     * @memberof RewardForOrderCreate
     */
    'value'?: RewardForOrderCreateValue;
    /**
     * 
     * @type {RewardForOrderCreateRecipient}
     * @memberof RewardForOrderCreate
     */
    'recipient'?: RewardForOrderCreateRecipient;
    /**
     * Timestamp of reward delivery within the next year. Note that if date-time is provided, the time values will be ignored.
     * @type {string}
     * @memberof RewardForOrderCreate
     */
    'deliver_at'?: string;
    /**
     * 
     * @type {Array<RewardForOrderCreateCustomFieldsInner>}
     * @memberof RewardForOrderCreate
     */
    'custom_fields'?: Array<RewardForOrderCreateCustomFieldsInner>;
    /**
     * Set this to translate the redemption experience for this reward. Pass a 2-letter [ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the desired language. Defaults to `en`. 
     * @type {string}
     * @memberof RewardForOrderCreate
     */
    'language'?: string;
    /**
     * 
     * @type {RewardForOrderCreateDelivery}
     * @memberof RewardForOrderCreate
     */
    'delivery'?: RewardForOrderCreateDelivery;
}
