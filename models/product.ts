/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProductCountriesInner } from './product-countries-inner';
import { ProductImagesInner } from './product-images-inner';
import { ProductSkusInner } from './product-skus-inner';

/**
 * A product represents one way to payout a reward to it\'s recipient. Think:  * Amazon.com gift card (ID: `OKMHM2X2OHYV`) * Donations to Save the Children (ID: `ESRNAD533W5A`) * Virtual Visa debit card (ID: `Q24BD9EZ332JT`)  each of which is one specific product on Tremendous.  > 📘 All available products > > See this [list](https://www.tremendous.com/catalog)  Products can be limited in their availability to recipients by  * geography (field `countries`) * currency (field `currencies`) * amount of the reward (field `skus`)   * e.g. adidas gift cards accept any amount between 5 and 200 USD.  See the description of each respective parameter for further details. 
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * Detailed description of the product. Mostly used for products with a `category` of `charities`.
     * @type {string}
     * @memberof Product
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'id': string;
    /**
     * Name of the product
     * @type {string}
     * @memberof Product
     */
    'name': string;
    /**
     * The category of this product  <table>   <thead>     <tr>       <th>Category</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td><code>ach</code></td>       <td>Bank transfer to the recipient</td>     </tr>     <tr>       <td><code>charity</code></td>       <td>Donations to a charity</td>     </tr>     <tr>       <td><code>merchant_card</code></td>       <td>A gift card for a certain merchant (e.g. Amazon)</td>     </tr>     <tr>       <td><code>paypal</code></td>       <td>Payout via PayPal</td>     </tr>     <tr>       <td><code>venmo</code></td>       <td>Payout via Venmo</td>     </tr>     <tr>       <td><code>visa_card</code></td>       <td>Payout in form of a Visa debit card</td>     </tr>   </tbody> </table> 
     * @type {string}
     * @memberof Product
     */
    'category': ProductCategoryEnum;
    /**
     * Legal disclosures for this product. Can be in HTML format.
     * @type {string}
     * @memberof Product
     */
    'disclosure': string;
    /**
     * Products may are restricted in their usage based on the amount of the reward. The `skus` array defines bands of denominations in which this product may be used for payouts. 
     * @type {Array<ProductSkusInner>}
     * @memberof Product
     */
    'skus'?: Array<ProductSkusInner>;
    /**
     * Available currencies for this product
     * @type {Array<string>}
     * @memberof Product
     */
    'currency_codes': Array<ProductCurrencyCodesEnum>;
    /**
     * List of countries in which this product is available to recipients.
     * @type {Array<ProductCountriesInner>}
     * @memberof Product
     */
    'countries': Array<ProductCountriesInner>;
    /**
     * List of product images associated with this product (e.g. logos or images of the gift cards)
     * @type {Array<ProductImagesInner>}
     * @memberof Product
     */
    'images': Array<ProductImagesInner>;
}

type ProductCategoryEnum = 'ach' | 'charity' | 'merchant_card' | 'paypal' | 'venmo' | 'visa_card'
type ProductCurrencyCodesEnum = 'USD' | 'CAD' | 'EUR' | 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ARS' | 'AUD' | 'AZN' | 'BAM' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BND' | 'BOB' | 'BRL' | 'BWP' | 'BYR' | 'BZD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EEK' | 'EGP' | 'ERN' | 'ETB' | 'GBP' | 'GEL' | 'GHS' | 'GNF' | 'GTQ' | 'HKD' | 'HNL' | 'HRK' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KHR' | 'KRW' | 'KWD' | 'KZT' | 'LBP' | 'LKR' | 'LTL' | 'LVL' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MOP' | 'MUR' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SDG' | 'SEK' | 'SGD' | 'SOS' | 'SYP' | 'THB' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'UYU' | 'UZS' | 'VEF' | 'VND' | 'XAF' | 'XOF' | 'YER' | 'ZAR' | 'ZMK'


