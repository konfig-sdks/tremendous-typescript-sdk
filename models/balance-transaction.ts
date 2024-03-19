/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A balance transaction represents a specific movement or change in an account\'s balance. 
 * @export
 * @interface BalanceTransaction
 */
export interface BalanceTransaction {
    /**
     * A brief description of the transaction
     * @type {string}
     * @memberof BalanceTransaction
     */
    'description'?: string;
    /**
     * Date that the transaction was created
     * @type {string}
     * @memberof BalanceTransaction
     */
    'created_at'?: string;
    /**
     * Amount of the transaction in USD
     * @type {number}
     * @memberof BalanceTransaction
     */
    'amount'?: number;
    /**
     * The updated total after the transaction. Note that this running balance may be delayed and contain `null`.
     * @type {number}
     * @memberof BalanceTransaction
     */
    'balance'?: number;
    /**
     * The action that was performed
     * @type {string}
     * @memberof BalanceTransaction
     */
    'action'?: string;
}
