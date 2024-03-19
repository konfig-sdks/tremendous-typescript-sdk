/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Details of the recipient of the reward
 * @export
 * @interface RewardsListAllRewardsResponseRewardsInnerRecipient
 */
export interface RewardsListAllRewardsResponseRewardsInnerRecipient {
    /**
     * Name of the recipient
     * @type {string}
     * @memberof RewardsListAllRewardsResponseRewardsInnerRecipient
     */
    'name'?: string;
    /**
     * Email address of the recipient
     * @type {string}
     * @memberof RewardsListAllRewardsResponseRewardsInnerRecipient
     */
    'email'?: string;
    /**
     * Phone number of the recipient. For non-US phone numbers, specify the country code (prefixed with +).
     * @type {string}
     * @memberof RewardsListAllRewardsResponseRewardsInnerRecipient
     */
    'phone'?: string;
}

