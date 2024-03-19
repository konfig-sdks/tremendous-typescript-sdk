/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebhooksTriggerEvent500ResponseErrors } from './webhooks-trigger-event500-response-errors';

/**
 * 
 * @export
 * @interface WebhooksTriggerEvent500Response
 */
export interface WebhooksTriggerEvent500Response {
    /**
     * 
     * @type {WebhooksTriggerEvent500ResponseErrors}
     * @memberof WebhooksTriggerEvent500Response
     */
    'errors': WebhooksTriggerEvent500ResponseErrors;
}
