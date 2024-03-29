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
 * @interface FundingSourcesGetAllResponseFundingSourcesInnerMeta
 */
export interface FundingSourcesGetAllResponseFundingSourcesInnerMeta {
    /**
     * **Only available when `method` is set to `balance`.**  Available amount for this funding source (in Cents USD) 
     * @type {number}
     * @memberof FundingSourcesGetAllResponseFundingSourcesInnerMeta
     */
    'available_cents'?: number;
    /**
     * **Only available when `method` is set to `balance`.**  Funds that are already registered on your Tremendous account but which have not yet been deposited in your account (e.g. unpaid invoices) (in Cents USD). 
     * @type {number}
     * @memberof FundingSourcesGetAllResponseFundingSourcesInnerMeta
     */
    'pending_cents'?: number;
    /**
     * **Only available when `method` is set to `bank_account` or `credit_card`.**  Name of the holder of the bank account or credit_card 
     * @type {string}
     * @memberof FundingSourcesGetAllResponseFundingSourcesInnerMeta
     */
    'accountholder_name'?: string;
    /**
     * **Only available when `method` is set to `bank_account`.**  Is this a checking or savings account 
     * @type {string}
     * @memberof FundingSourcesGetAllResponseFundingSourcesInnerMeta
     */
    'account_type'?: FundingSourcesGetAllResponseFundingSourcesInnerMetaAccountTypeEnum;
    /**
     * **Only available when `method` is set to `bank_account`.**  Name of the bank 
     * @type {string}
     * @memberof FundingSourcesGetAllResponseFundingSourcesInnerMeta
     */
    'bank_name'?: string | null;
    /**
     * **Only available when `method` is set to `bank_account`.**  Last 4 digits of the account number 
     * @type {string}
     * @memberof FundingSourcesGetAllResponseFundingSourcesInnerMeta
     */
    'account_number_mask'?: string;
    /**
     * **Only available when `method` is set to `bank_account`.**  Last 4 digits of the routing number 
     * @type {string}
     * @memberof FundingSourcesGetAllResponseFundingSourcesInnerMeta
     */
    'account_routing_mask'?: string;
    /**
     * **Only available when `method` is set to `bank_account`.**  Can refunds be deposited to this bank account 
     * @type {boolean}
     * @memberof FundingSourcesGetAllResponseFundingSourcesInnerMeta
     */
    'refundable'?: boolean;
    /**
     * **Only available when `method` is set to `credit_card`.**  Network of the credit card 
     * @type {string}
     * @memberof FundingSourcesGetAllResponseFundingSourcesInnerMeta
     */
    'network'?: FundingSourcesGetAllResponseFundingSourcesInnerMetaNetworkEnum;
    /**
     * **Only available when `method` is set to `credit_card`.**  Last 4 digits of the credit card number 
     * @type {string}
     * @memberof FundingSourcesGetAllResponseFundingSourcesInnerMeta
     */
    'last4'?: string;
    /**
     * **Only available when `method` is set to `credit_card`.**  Is this credit card expired 
     * @type {boolean}
     * @memberof FundingSourcesGetAllResponseFundingSourcesInnerMeta
     */
    'expired'?: boolean;
    /**
     * **Only available when `method` is set to `bank_account` or `credit_card`.**  Point in time when the last order failed using this bank account or credit card as a funding source. 
     * @type {string}
     * @memberof FundingSourcesGetAllResponseFundingSourcesInnerMeta
     */
    'last_payment_failed_at'?: string | null;
}

type FundingSourcesGetAllResponseFundingSourcesInnerMetaAccountTypeEnum = 'checking' | 'savings'
type FundingSourcesGetAllResponseFundingSourcesInnerMetaNetworkEnum = 'MasterCard' | 'Amex' | 'JCB' | 'Diner\'s Club' | 'visa' | 'discover' | 'laser' | 'elo' | 'maestro' | 'solo'


