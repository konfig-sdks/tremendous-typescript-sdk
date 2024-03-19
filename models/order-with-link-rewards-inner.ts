/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrderWithLinkRewardsInnerCustomFieldsInner } from './order-with-link-rewards-inner-custom-fields-inner';
import { OrderWithLinkRewardsInnerDelivery } from './order-with-link-rewards-inner-delivery';
import { OrderWithLinkRewardsInnerRecipient } from './order-with-link-rewards-inner-recipient';
import { OrderWithLinkRewardsInnerValue } from './order-with-link-rewards-inner-value';

/**
 * A single reward, sent to a recipient. A reward is always part of an order.  Either `products` or `campaign_id` must be specified. 
 * @export
 * @interface OrderWithLinkRewardsInner
 */
export interface OrderWithLinkRewardsInner {
    /**
     * Tremendous ID of the reward
     * @type {string}
     * @memberof OrderWithLinkRewardsInner
     */
    'id'?: string;
    /**
     * Tremendous ID of the order this reward is part of.
     * @type {string}
     * @memberof OrderWithLinkRewardsInner
     */
    'order_id'?: string;
    /**
     * Date the reward was created
     * @type {string}
     * @memberof OrderWithLinkRewardsInner
     */
    'created_at'?: string;
    /**
     * ID of the campaign in your account, that defines the available products (different gift cards, charity, etc.) that the recipient can choose from. 
     * @type {string}
     * @memberof OrderWithLinkRewardsInner
     */
    'campaign_id'?: string | null;
    /**
     * List of IDs of product (different gift cards, charity, etc.) that will be available to the recipient to choose from.  Providing a `products` array will override the products made available by the campaign specified using the `campaign_id` property unless the `products` array is empty. It will _not_ override other campaign attributes, like the message and customization of the look and feel. 
     * @type {Array<string>}
     * @memberof OrderWithLinkRewardsInner
     */
    'products'?: Array<string>;
    /**
     * 
     * @type {OrderWithLinkRewardsInnerValue}
     * @memberof OrderWithLinkRewardsInner
     */
    'value'?: OrderWithLinkRewardsInnerValue;
    /**
     * 
     * @type {OrderWithLinkRewardsInnerRecipient}
     * @memberof OrderWithLinkRewardsInner
     */
    'recipient'?: OrderWithLinkRewardsInnerRecipient;
    /**
     * Timestamp of reward delivery within the next year. Note that if date-time is provided, the time values will be ignored.
     * @type {string}
     * @memberof OrderWithLinkRewardsInner
     */
    'deliver_at'?: string;
    /**
     * 
     * @type {Array<OrderWithLinkRewardsInnerCustomFieldsInner>}
     * @memberof OrderWithLinkRewardsInner
     */
    'custom_fields'?: Array<OrderWithLinkRewardsInnerCustomFieldsInner>;
    /**
     * 
     * @type {OrderWithLinkRewardsInnerDelivery}
     * @memberof OrderWithLinkRewardsInner
     */
    'delivery'?: OrderWithLinkRewardsInnerDelivery;
}

