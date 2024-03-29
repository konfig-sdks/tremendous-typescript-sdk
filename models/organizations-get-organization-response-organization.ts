/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Organizations are a way to separate different parts of your business within the same Tremendous account. Your root Tremendous account is an organization itself and can have multiple sub-organizations.  You can assign users in your Tremendous team as members to any organization. Users can be members of multiple organizations at once.  Each organizations can have it\'s own API key. 
 * @export
 * @interface OrganizationsGetOrganizationResponseOrganization
 */
export interface OrganizationsGetOrganizationResponseOrganization {
    /**
     * 
     * @type {string}
     * @memberof OrganizationsGetOrganizationResponseOrganization
     */
    'id'?: string;
    /**
     * Name of the organization
     * @type {string}
     * @memberof OrganizationsGetOrganizationResponseOrganization
     */
    'name': string;
    /**
     * URL of the website of that organization
     * @type {string}
     * @memberof OrganizationsGetOrganizationResponseOrganization
     */
    'website': string;
    /**
     * Status of the organization. Organizations need to be approved to be able to use them to send out rewards.
     * @type {string}
     * @memberof OrganizationsGetOrganizationResponseOrganization
     */
    'status'?: OrganizationsGetOrganizationResponseOrganizationStatusEnum;
    /**
     * Timestamp of when the organization has been created.  *This field is only returned when creating an organization.* It is not returned anymore when retrieving or listing organizations. 
     * @type {string}
     * @memberof OrganizationsGetOrganizationResponseOrganization
     */
    'created_at'?: string;
}

type OrganizationsGetOrganizationResponseOrganizationStatusEnum = 'PENDING' | 'APPROVED' | 'REJECTED'


