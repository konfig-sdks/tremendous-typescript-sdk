/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Webhook
 */
export interface Webhook {
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    'id'?: string;
    /**
     * URL the webhook will make requests to
     * @type {string}
     * @memberof Webhook
     */
    'url': string | null;
    /**
     * Private key for the webhook
     * @type {string}
     * @memberof Webhook
     */
    'private_key'?: string;
}

