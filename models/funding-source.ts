/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FundingSourceMeta } from './funding-source-meta';

/**
 * 
 * @export
 * @interface FundingSource
 */
export interface FundingSource {
    /**
     * 
     * @type {string}
     * @memberof FundingSource
     */
    'id': string;
    /**
     * You can pay for rewards using different payment methods on Tremendous:  <table>   <thead>     <tr>       <th>Payment Method</th>       <th>Description</th>       </tr>   </thead>   <tbody>     <tr>       <td><code>balance</code></td>       <td>Pre-funded balance in your Tremendous account to draw funds from to send rewards to recipients.</td>     </tr>     <tr>       <td><code>bank_account</code></td>       <td>Bank account to draw funds from to send rewards to recipients.</td>     </tr>     <tr>       <td><code>credit_card</code></td>       <td>Credit card to draw funds from to send rewards to recipients.</td>     </tr>     <tr>       <td><code>invoice</code></td>       <td>Send rewards to recipients and pay by invoice.</td>     </tr>    </tbody> </table> 
     * @type {string}
     * @memberof FundingSource
     */
    'method': FundingSourceMethodEnum;
    /**
     * **Only available when `method` is set to `invoice`.** 
     * @type {string}
     * @memberof FundingSource
     */
    'type'?: FundingSourceTypeEnum;
    /**
     * 
     * @type {FundingSourceMeta}
     * @memberof FundingSource
     */
    'meta': FundingSourceMeta;
}

type FundingSourceMethodEnum = 'balance' | 'bank_account' | 'credit_card' | 'invoice'
type FundingSourceTypeEnum = 'COMMERCIAL' | 'PRO_FORMA' | 'PREFUNDING_ONLY'


