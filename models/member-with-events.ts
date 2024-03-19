/*
API Endpoints

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

The version of the OpenAPI document: 2
Contact: developers@tremendous.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MemberWithEventsEventsInner } from './member-with-events-events-inner';

/**
 * Each organization has one or more users that can access and manage that organization. These users are called members.  Members can take actions via the Tremendous web dashboard directly.  These actions include adding funding sources to the organization, creating Campaigns, and more. 
 * @export
 * @interface MemberWithEvents
 */
export interface MemberWithEvents {
    /**
     * 
     * @type {string}
     * @memberof MemberWithEvents
     */
    'id': string;
    /**
     * Email address of the member
     * @type {string}
     * @memberof MemberWithEvents
     */
    'email': string;
    /**
     * Full name of the member
     * @type {string}
     * @memberof MemberWithEvents
     */
    'name': string | null;
    /**
     * Role of the member within the organization.  <table>   <thead>     <tr>       <th>Role</th>       <th>Description</th>     </tr>   </thead>     <tr>       <td><code>MEMBER</code></td>       <td>Limited permissions. Can view their own reward and order histories only.</td>     </tr>     <tr>       <td><code>ADMIN</code></td>       <td>Update organization settings, invite other members to the organization, and view all member order and reward histories within their organization.</td>     </tr>     <tr>       <td><code>DELETED</code></td>       <td>No longer a member of this organization.</td>     </tr>   <tbody>   </tbody> </table> 
     * @type {string}
     * @memberof MemberWithEvents
     */
    'role': MemberWithEventsRoleEnum;
    /**
     * Current status of the member\'s account.  When creating a member it starts out in the status `INVITED`. As soon as that member open the invitation link and registers an account, the status switches to `REGISTERED`. 
     * @type {string}
     * @memberof MemberWithEvents
     */
    'status': MemberWithEventsStatusEnum;
    /**
     * List of events related to the member.
     * @type {Array<MemberWithEventsEventsInner>}
     * @memberof MemberWithEvents
     */
    'events'?: Array<MemberWithEventsEventsInner>;
}

type MemberWithEventsRoleEnum = 'MEMBER' | 'ADMIN' | 'DELETED'
type MemberWithEventsStatusEnum = 'REGISTERED' | 'INVITED'


