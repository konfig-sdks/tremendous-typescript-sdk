/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * With a campaign you can define the look & feel of how rewards are sent out. It also lets you set the available products (different gift cards, charity, etc.) recipients can choose from.  > Note: Campaigns must be created from the Tremendous dashboard. > > • [Production Dashboard](https://app.tremendous.com) > • [Sandbox Dashboard](https://app.testflight.tremendous.com/) 
 * @export
 * @interface CampaignsGetByIdResponseCampaign
 */
export interface CampaignsGetByIdResponseCampaign {
    /**
     * Description of the campaign
     * @type {string}
     * @memberof CampaignsGetByIdResponseCampaign
     */
    'description': string | null;
    /**
     * 
     * @type {string}
     * @memberof CampaignsGetByIdResponseCampaign
     */
    'id': string;
    /**
     * Name of the campaign
     * @type {string}
     * @memberof CampaignsGetByIdResponseCampaign
     */
    'name': string;
    /**
     * List of IDs of products (different gift cards, charity, etc.) that are available in this campaign. 
     * @type {Array<string>}
     * @memberof CampaignsGetByIdResponseCampaign
     */
    'products': Array<string>;
}

