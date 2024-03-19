/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Reward custom data for searching, tracking or copy (see [Adding custom fields to orders](https://developers.tremendous.com/reference/using-custom-fields-to-add-custom-data-to-rewards).)
 * @export
 * @interface OrdersGetListResponseOrdersInnerRewardCustomFieldsInner
 */
export interface OrdersGetListResponseOrdersInnerRewardCustomFieldsInner {
    /**
     * Tremendous ID of the custom field
     * @type {string}
     * @memberof OrdersGetListResponseOrdersInnerRewardCustomFieldsInner
     */
    'id'?: string;
    /**
     * Value of the custom field
     * @type {string}
     * @memberof OrdersGetListResponseOrdersInnerRewardCustomFieldsInner
     */
    'value'?: string | null;
}

