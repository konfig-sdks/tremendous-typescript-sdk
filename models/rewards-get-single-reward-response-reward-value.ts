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
 * @interface RewardsGetSingleRewardResponseRewardValue
 */
export interface RewardsGetSingleRewardResponseRewardValue {
    /**
     * Amount of the reward
     * @type {number}
     * @memberof RewardsGetSingleRewardResponseRewardValue
     */
    'denomination': number;
    /**
     * Currency of the reward
     * @type {string}
     * @memberof RewardsGetSingleRewardResponseRewardValue
     */
    'currency_code': RewardsGetSingleRewardResponseRewardValueCurrencyCodeEnum;
}

type RewardsGetSingleRewardResponseRewardValueCurrencyCodeEnum = 'USD' | 'CAD' | 'EUR' | 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ARS' | 'AUD' | 'AZN' | 'BAM' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BND' | 'BOB' | 'BRL' | 'BWP' | 'BYR' | 'BZD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EEK' | 'EGP' | 'ERN' | 'ETB' | 'GBP' | 'GEL' | 'GHS' | 'GNF' | 'GTQ' | 'HKD' | 'HNL' | 'HRK' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KHR' | 'KRW' | 'KWD' | 'KZT' | 'LBP' | 'LKR' | 'LTL' | 'LVL' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MOP' | 'MUR' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SDG' | 'SEK' | 'SGD' | 'SOS' | 'SYP' | 'THB' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'UYU' | 'UZS' | 'VEF' | 'VND' | 'XAF' | 'XOF' | 'YER' | 'ZAR' | 'ZMK'


