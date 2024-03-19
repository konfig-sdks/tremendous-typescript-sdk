/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FundingSourcesGetById500ResponseErrors } from './funding-sources-get-by-id500-response-errors';

/**
 * 
 * @export
 * @interface FundingSourcesGetById500Response
 */
export interface FundingSourcesGetById500Response {
    /**
     * 
     * @type {FundingSourcesGetById500ResponseErrors}
     * @memberof FundingSourcesGetById500Response
     */
    'errors': FundingSourcesGetById500ResponseErrors;
}
