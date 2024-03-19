/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The redemption link for a reward.
 * @export
 * @interface RewardLink
 */
export interface RewardLink {
    /**
     * Tremendous ID of the reward
     * @type {string}
     * @memberof RewardLink
     */
    'id'?: string;
    /**
     * Link to redeem the reward at. You need to deliver this link to the recipient. 
     * @type {string}
     * @memberof RewardLink
     */
    'link'?: string;
}

