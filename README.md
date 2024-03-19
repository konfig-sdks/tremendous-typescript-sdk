<div align="left">

[![Visit Tremendous](./header.png)](https://www.tremendous.com&#x2F;)

# [Tremendous](https://www.tremendous.com&#x2F;)<a id="tremendous"></a>

Deliver monetary rewards and incentives to employees, customers, survey participants, and more through the Tremendous API. For organizational tasks, like managing your organization and it's members within Tremendous, please see the Tremendous Organizational API.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`tremendous.balanceTransactions.listAll`](#tremendousbalancetransactionslistall)
  * [`tremendous.campaigns.getAll`](#tremendouscampaignsgetall)
  * [`tremendous.campaigns.getById`](#tremendouscampaignsgetbyid)
  * [`tremendous.fields.getCustomFields`](#tremendousfieldsgetcustomfields)
  * [`tremendous.fundingSources.getAll`](#tremendousfundingsourcesgetall)
  * [`tremendous.fundingSources.getById`](#tremendousfundingsourcesgetbyid)
  * [`tremendous.invoices.createAndFundAccountBalance`](#tremendousinvoicescreateandfundaccountbalance)
- [Request body](#request-body)
  * [`tremendous.invoices.getAll`](#tremendousinvoicesgetall)
  * [`tremendous.invoices.getById`](#tremendousinvoicesgetbyid)
  * [`tremendous.invoices.getCsv`](#tremendousinvoicesgetcsv)
  * [`tremendous.invoices.getPdf`](#tremendousinvoicesgetpdf)
  * [`tremendous.invoices.removeInvoice`](#tremendousinvoicesremoveinvoice)
  * [`tremendous.members.createNewMember`](#tremendousmemberscreatenewmember)
  * [Permissions](#permissions)
  * [Inviting new members](#inviting-new-members)
  * [`tremendous.members.getMember`](#tremendousmembersgetmember)
  * [`tremendous.members.listMembers`](#tremendousmemberslistmembers)
  * [`tremendous.orders.approveOrderById`](#tremendousordersapproveorderbyid)
  * [`tremendous.orders.createOrder`](#tremendousorderscreateorder)
- [Request body](#request-body-1)
  * [Funding sources](#funding-sources)
  * [Idempotence](#idempotence)
  * [`tremendous.orders.getList`](#tremendousordersgetlist)
  * [`tremendous.orders.getOrderById`](#tremendousordersgetorderbyid)
  * [`tremendous.orders.rejectById`](#tremendousordersrejectbyid)
  * [`tremendous.organizations.createApiKey`](#tremendousorganizationscreateapikey)
  * [`tremendous.organizations.createNewOrganization`](#tremendousorganizationscreateneworganization)
  * [`tremendous.organizations.getList`](#tremendousorganizationsgetlist)
  * [`tremendous.organizations.getOrganization`](#tremendousorganizationsgetorganization)
  * [`tremendous.products.getById`](#tremendousproductsgetbyid)
  * [`tremendous.products.getList`](#tremendousproductsgetlist)
  * [`tremendous.rewards.generateEmbedToken`](#tremendousrewardsgenerateembedtoken)
  * [`tremendous.rewards.generateLink`](#tremendousrewardsgeneratelink)
  * [`tremendous.rewards.getSingleReward`](#tremendousrewardsgetsinglereward)
  * [`tremendous.rewards.listAllRewards`](#tremendousrewardslistallrewards)
  * [`tremendous.rewards.resendRewardById`](#tremendousrewardsresendrewardbyid)
  * [`tremendous.webhooks.createWebhook`](#tremendouswebhookscreatewebhook)
- [Request body](#request-body-2)
  * [`tremendous.webhooks.getDetails`](#tremendouswebhooksgetdetails)
  * [`tremendous.webhooks.getDetails_0`](#tremendouswebhooksgetdetails_0)
  * [`tremendous.webhooks.listEvents`](#tremendouswebhookslistevents)
  * [`tremendous.webhooks.triggerEvent`](#tremendouswebhookstriggerevent)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Tremendous&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Tremendous } from "tremendous-typescript-sdk";

const tremendous = new Tremendous({
  // Defining the base path is optional and defaults to https://testflight.tremendous.com/api/v2
  // basePath: "https://testflight.tremendous.com/api/v2",
  accessToken: "ACCESS_TOKEN",
});

const listAllResponse = await tremendous.balanceTransactions.listAll({});

console.log(listAllResponse);
```

## Reference<a id="reference"></a>


### `tremendous.balanceTransactions.listAll`<a id="tremendousbalancetransactionslistall"></a>

Fetch a list of all balance transactions on your account.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await tremendous.balanceTransactions.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### offset: `number`<a id="offset-number"></a>

Offsets the returned list by the given number of transactions. The returned transactions are ordered (and offsetted) by their creation date (DESC).

##### limit: `number`<a id="limit-number"></a>

Limits the number of transactions listed. The default value is 10.

##### createdAtGte: `string`<a id="createdatgte-string"></a>

Only return results where the created_at field is greater than or equal to the supplied value. The string needs to be an ISO 8601 datetime.

##### createdAtLte: `string`<a id="createdatlte-string"></a>

Only return results where the created_at field is less than or equal to the supplied value. The string needs to be an ISO 8601 datetime.

#### 🔄 Return<a id="🔄-return"></a>

[BalanceTransactionsListAllResponse](./models/balance-transactions-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/balance_transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.campaigns.getAll`<a id="tremendouscampaignsgetall"></a>

Retrieve a list of all campaigns created in your account


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await tremendous.campaigns.getAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsGetAllResponse](./models/campaigns-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.campaigns.getById`<a id="tremendouscampaignsgetbyid"></a>

Retrieve a campaign, identified by the given `id` in the URL


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await tremendous.campaigns.getById({
  id: "SOMEIDSOMEID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the campaign that should be retrieved

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsGetByIdResponse](./models/campaigns-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.fields.getCustomFields`<a id="tremendousfieldsgetcustomfields"></a>

For reporting and analytics purposes, custom fields can be associated with rewards generated through the API. Custom fields must be first added by members of your admin team through the Tremendous Dashboard.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomFieldsResponse = await tremendous.fields.getCustomFields();
```

#### 🔄 Return<a id="🔄-return"></a>

[FieldsGetCustomFieldsResponse](./models/fields-get-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.fundingSources.getAll`<a id="tremendousfundingsourcesgetall"></a>

Retrieve a list of all funding sources available for ordering through the API in your organization's account.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await tremendous.fundingSources.getAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[FundingSourcesGetAllResponse](./models/funding-sources-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/funding_sources` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.fundingSources.getById`<a id="tremendousfundingsourcesgetbyid"></a>

Retrieve a funding source, identified by the given `id` in the URL


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await tremendous.fundingSources.getById({
  id: "SOMEIDSOMEID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the funding source that should be retrieved

#### 🔄 Return<a id="🔄-return"></a>

[FundingSourcesGetByIdResponse](./models/funding-sources-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/funding_sources/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.invoices.createAndFundAccountBalance`<a id="tremendousinvoicescreateandfundaccountbalance"></a>

Creating an invoice is the way for your organization to fund your account's balance.

1. Create an invoice
2. Pay the invoice
3. Funds get added to your account's balance

## Request body<a id="request-body"></a>

<div class="object-schema-request-schema">
  <table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="object-schema-table-body">
    <tr class=""><td><div class="property-name">
  <code class="property-name">po_number</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>Reference to the purchase order number within your organization</p>
</td></tr>
<tr class=""><td><div class="property-name">
  <code class="property-name">amount</code>
</div>
</td><td><span class="property-type">number</span> <span class="property-format">double</span></td><td><p>Amount of the invoice in USD</p>
</td></tr>
<tr class=""><td><div class="property-name">
  <code class="property-name">memo</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>A note to be included in the invoice. This is for your internal use and will not be visible to the recipient.</p>
</td></tr>
  </tbody>
</table>

</div>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAndFundAccountBalanceResponse =
  await tremendous.invoices.createAndFundAccountBalance({
    po_number: "123-PO-EE",
    amount: 50.35,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

Amount of the invoice in USD

##### po_number: `string`<a id="po_number-string"></a>

Reference to the purchase order number within your organization

##### memo: `string`<a id="memo-string"></a>

A note to be included in the invoice. This is for your internal use and will not be visible to the recipient. 

#### 🔄 Return<a id="🔄-return"></a>

[InvoicesCreateAndFundAccountBalanceResponse](./models/invoices-create-and-fund-account-balance-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invoices` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.invoices.getAll`<a id="tremendousinvoicesgetall"></a>

Fetch a list of all invoices on your account.

> 🚧 Deleted invoices are omitted
>
> The response does not include any previously deleted invoices.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await tremendous.invoices.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### offset: `number`<a id="offset-number"></a>

Offsets the returned list by the given number of invoices. The returned invoices are ordered (and offsetted) by their creation date (DESC).

##### limit: `number`<a id="limit-number"></a>

Limits the number of invoices listed. The maximum and default value is 10.

#### 🔄 Return<a id="🔄-return"></a>

[InvoicesGetAllResponse](./models/invoices-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invoices` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.invoices.getById`<a id="tremendousinvoicesgetbyid"></a>

Retrieve an invoice, identified by the given `id` in the URL

> 📘 Deleted Invoices
>
> This endpoint can be used to retrieve details on deleted invoices
> that the list of invoices omits.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await tremendous.invoices.getById({
  id: "PPS-26873",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the invoice that should be retrieved

#### 🔄 Return<a id="🔄-return"></a>

[InvoicesGetByIdResponse](./models/invoices-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invoices/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.invoices.getCsv`<a id="tremendousinvoicesgetcsv"></a>

Generates a CSV version for an invoice listing the associated rewards and orders


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCsvResponse = await tremendous.invoices.getCsv({
  id: "PPS-26873",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the Invoice for that the CSV should be generated

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invoices/{id}/csv` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.invoices.getPdf`<a id="tremendousinvoicesgetpdf"></a>

Generates a PDF version for an invoice


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPdfResponse = await tremendous.invoices.getPdf({
  id: "PPS-26873",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the Invoice for that the PDF should be generated

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invoices/{id}/pdf` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.invoices.removeInvoice`<a id="tremendousinvoicesremoveinvoice"></a>

Removes an invoice. This has no further consequences but is a rather cosmetic operation.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeInvoiceResponse = await tremendous.invoices.removeInvoice({
  id: "PPS-26873",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the invoice that should be retrieved

#### 🔄 Return<a id="🔄-return"></a>

[InvoicesRemoveInvoiceResponse](./models/invoices-remove-invoice-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invoices/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.members.createNewMember`<a id="tremendousmemberscreatenewmember"></a>

Each organization has one or more users that can access and manage that organization. These users are called members.

Members can take actions via the Tremendous web dashboard directly. These actions include adding funding sources to the organization, creating Campaigns, and more.

### Permissions<a id="permissions"></a>

Members can have one of two roles that determine their permissions within the organization:

1. `MEMBER`: Limited permissions. Can view their own reward and order histories only.
2. `ADMIN`: Update organization settings, invite other members to the organization, and view all member order and reward histories within their organization.

To create members of a sub-organizations [create an API key for that organization](https://developers.tremendous.com/) first, then use the new API key in the create member request.

### Inviting new members<a id="inviting-new-members"></a>

After creating a member, an automatic invite is sent to the email address. If the user is not registered yet, that person will then need to sign up for a Tremendous account.

> ❗️ Automatic invitations are not available in the sandbox
>
> You must manually use the returned `invite_url` field in the payload instead.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewMemberResponse = await tremendous.members.createNewMember({
  email: "jane@example.com",
  name: "Jane Doe",
  role: "MEMBER",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

Email address of the member

##### name: `string`<a id="name-string"></a>

Full name of the member

##### role: `string`<a id="role-string"></a>

Role of the member within the organization.  <table>   <thead>     <tr>       <th>Role</th>       <th>Description</th>     </tr>   </thead>     <tr>       <td><code>MEMBER</code></td>       <td>Limited permissions. Can view their own reward and order histories only.</td>     </tr>     <tr>       <td><code>ADMIN</code></td>       <td>Update organization settings, invite other members to the organization, and view all member order and reward histories within their organization.</td>     </tr>   <tbody> </table> 

#### 🔄 Return<a id="🔄-return"></a>

[MembersCreateNewMemberResponse](./models/members-create-new-member-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.members.getMember`<a id="tremendousmembersgetmember"></a>

Retrieve member

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberResponse = await tremendous.members.getMember({
  id: "SOMEIDSOMEID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the member to retrieve

#### 🔄 Return<a id="🔄-return"></a>

[MembersGetMemberResponse](./models/members-get-member-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.members.listMembers`<a id="tremendousmemberslistmembers"></a>

To list members of a sub-organization [create an API key for that organization](https://developers.tremendous.com/) first, then use the new API key in the list members request.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMembersResponse = await tremendous.members.listMembers();
```

#### 🔄 Return<a id="🔄-return"></a>

[MembersListMembersResponse](./models/members-list-members-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.orders.approveOrderById`<a id="tremendousordersapproveorderbyid"></a>

Approves an order that is pending review, identified by the given `id` in the URL.

Approvals is a feature that requires orders to be approved by an organization admin
before they are sent out. To enable approvals for your organization, please enable
'Allow approvals via API' via the organization''s 'Order Approvals' settings from the Tremendous dashboard.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveOrderByIdResponse = await tremendous.orders.approveOrderById({
  id: "SOMEIDSOMEID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the order that should be approved. In case the order has an `external_id` reference supplied by the customer on creation, it\'s possible to use it instead.

#### 🔄 Return<a id="🔄-return"></a>

[OrdersApproveOrderByIdResponse](./models/orders-approve-order-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/order_approvals/{id}/approve` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.orders.createOrder`<a id="tremendousorderscreateorder"></a>

Every time you want to send out a reward through Tremendous you need to create an order for it.

> 📘 Getting started with your first order
>
> Our step-by-step guide walks you through everything you need
> to send your first gift card through the Tremendous API:
>
> <strong><a style="display: block; margin-top: 20px;" href="/docs/sending-rewards-intro">Check it out!</a></strong>

## Request body<a id="request-body"></a>

<div class="object-schema-request-schema">
  <table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="object-schema-table-body">
    <tr class=""><td><div class="property-name">
  <code class="property-name">external_id</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>Reference for this order, supplied by the customer.</p>

<p>When set, <code>external_id</code> makes order idempotent. All requests that use the same <code>external_id</code>
after the initial order creation, will result in a response that returns the data of the
initially created order. The response will have a <code>201</code> response code. These responses
<strong>fail</strong> to create any further orders.</p>

<p>It also allows for retrieving by <code>external_id</code> instead of <code>id</code> only.</p>
</td></tr>
<tr class=""><td><div class="property-name">
  <code class="property-name">payment</code>
</div>
</td><td><span class="property-type">object</span></td><td></td></tr>  <tr>
    <td colspan="3">
      <details>
        <summary>Show object properties</summary>
        <table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="object-schema-table-body">
    <tr class=""><td><div class="property-name">
  <code class="property-name">funding_source_id</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>Tremendous ID of the funding source that will be used to pay for the order. Use <code>balance</code> to use your Tremendous&#39;s balance.</p>
</td></tr>
  </tbody>
</table>

</tr>

<tr class=""><td><div class="property-name">
  <code class="property-name">reward</code>
</div>
</td><td><span class="property-type">object</span></td><td><p>A single reward, sent to a recipient. A reward is always part of an order.</p>

<p>Either <code>products</code> or <code>campaign_id</code> must be specified.</p>
</td></tr>  <tr>
    <td colspan="3">
      <details>
        <summary>Show object properties</summary>
        <table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="object-schema-table-body">
    <tr class="property-conditional-hint-response-only"><td><div class="property-name">
  <code class="property-name">id</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>Tremendous ID of the reward</p>
</td></tr>
<tr class="property-conditional-hint-response-only"><td><div class="property-name">
  <code class="property-name">order_id</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>Tremendous ID of the order this reward is part of.</p>
</td></tr>
<tr class="property-conditional-hint-response-only"><td><div class="property-name">
  <code class="property-name">created_at</code>
</div>
</td><td><span class="property-type">string</span> <span class="property-format">date-time</span></td><td><p>Date the reward was created</p>
</td></tr>
<tr class="property-conditional-hint-request-only"><td><div class="property-name">
  <code class="property-name">campaign_id</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>ID of the campaign in your account, that defines the available products (different gift cards, charity, etc.)
that the recipient can choose from.</p>
</td></tr>
<tr class="property-conditional-hint-request-only"><td><div class="property-name">
  <code class="property-name">products</code>
</div>
</td><td><span class="property-type">array</span> <span class="property-format">string</span></td><td><p>List of IDs of product (different gift cards, charity, etc.) that will be available
to the recipient to choose from.</p>

<p>Providing a <code>products</code> array will override the products made available by the campaign
specified using the <code>campaign_id</code> property unless the <code>products</code> array is empty. It will
<em>not</em> override other campaign attributes, like the message and customization of the look and feel.</p>
</td></tr>
<tr class=""><td><div class="property-name">
  <code class="property-name">value</code>
</div>
</td><td><span class="property-type">object</span></td><td></td></tr>  <tr>
    <td colspan="3">
      <details>
        <summary>Show object properties</summary>
        <table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="object-schema-table-body">
    <tr class=""><td><div class="property-name">
  <code class="property-name">denomination</code>
</div>
</td><td><span class="property-type">number</span> <span class="property-format">double</span></td><td><p>Amount of the reward</p>
</td></tr>
<tr class=""><td><div class="property-name">
  <code class="property-name">currency_code</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>Currency of the reward</p>
</td></tr>
  </tbody>
</table>

</tr>

<tr class=""><td><div class="property-name">
  <code class="property-name">recipient</code>
</div>
</td><td><span class="property-type">object</span></td><td><p>Details of the recipient of the reward</p>
</td></tr>  <tr>
    <td colspan="3">
      <details>
        <summary>Show object properties</summary>
        <table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="object-schema-table-body">
    <tr class=""><td><div class="property-name">
  <code class="property-name">name</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>Name of the recipient</p>
</td></tr>
<tr class=""><td><div class="property-name">
  <code class="property-name">email</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>Email address of the recipient</p>
</td></tr>
<tr class=""><td><div class="property-name">
  <code class="property-name">phone</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>Phone number of the recipient. For non-US phone numbers, specify the country code (prefixed with +).</p>
</td></tr>
  </tbody>
</table>

</tr>

<tr class=""><td><div class="property-name">
  <code class="property-name">deliver_at</code>
</div>
</td><td><span class="property-type">string</span> <span class="property-format">date</span></td><td><p>Timestamp of reward delivery within the next year. Note that if date-time is provided, the time values will be ignored.</p>
</td></tr>
<tr class=""><td><div class="property-name">
  <code class="property-name">custom_fields</code>
</div>
</td><td><span class="property-type">array</span></td><td></td></tr>  <tr>
    <td colspan="3">
      <details>
        <summary>Show array item type</summary>
        <table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="object-schema-table-body">
    <tr class=""><td><div class="property-name">
  <code class="property-name">id</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>Tremendous ID of the custom field</p>
</td></tr>
<tr class=""><td><div class="property-name">
  <code class="property-name">value</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>Value of the custom field</p>
</td></tr>
  </tbody>
</table>

</tr>

<tr class=""><td><div class="property-name">
  <code class="property-name">language</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>Set this to translate the redemption experience for this reward. Pass a 2-letter <a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">ISO-639-1 code</a> for the desired language. Defaults to <code>en</code>.</p>
</td></tr>
<tr class=""><td><div class="property-name">
  <code class="property-name">delivery</code>
</div>
</td><td><span class="property-type">object</span></td><td><p>Details on how the reward is delivered to the recipient.</p>
</td></tr>  <tr>
    <td colspan="3">
      <details>
        <summary>Show object properties</summary>
        <table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="object-schema-table-body">
    <tr class=""><td><div class="property-name">
  <code class="property-name">method</code>
</div>
</td><td><span class="property-type">string</span></td><td><p>How to deliver the reward to the recipient.</p>

<table>
  <thead>
    <tr>
      <th>Delivery Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>EMAIL</code></td>
      <td>Deliver the reward to the recipient by email</td>
    </tr>
    <tr>
      <td><code>LINK</code></td>
      <td>
        <p>Deliver the reward to the recipient via a link.</p>
        <p>The link can be retrieved on a successfully ordered reward via the <code>/rewards</code> or <code>/rewards/{id}</code> endpoint. That link must then be  delivered to the recipient out-of-band.</p>
      </td>
    </tr>
    <tr>
      <td><code>PHONE</code></td>
      <td>Deliver the reward to the recipient by SMS</td>
    </tr>
  </tbody>
</table>
</td></tr>
  </tbody>
</table>

</tr>

  </tbody>
</table>

</tr>

  </tbody>
</table>

</div>


### Funding sources<a id="funding-sources"></a>

There are different ways to pay for gift cards and rewards on Tremendous. Every payment mechanism is called a "funding source".

You can retrieve a list of all available funding sources by using the [Funding sources API endpoint](https://tremendous.readme.io/reference/core-funding-source-index).

The Tremendous API sandbox environment comes with a single funding source that allows you to spend up to $5,000 in *fake money* to test the API. [Learn more about the sandbox environment](https://tremendous.readme.io/reference/sandbox).

The HTTP status code `200` on the response will be used to indicate success.

After processing successfully the reward gets queued to be delivered to it's recipient
(for delivery method `EMAIL` and `PHONE`). Delivery will happen asynchronously, after the response
has been sent.

### Idempotence<a id="idempotence"></a>

Requests issued with the same external_id are idempotent.

Submitting an order with an already existing `external_id`, will result in a `201` response code.
In this case the response will return a representation of the already existing order in the response body.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOrderResponse = await tremendous.orders.createOrder({
  external_id: "Your-Individual-Identifier-for-This-Order",
  payment: {
    funding_source_id: "funding_source_id_example",
  },
  reward: {
    campaign_id: "SOMEIDSOMEID",
    deliver_at: "2023-12-31",
    language: "de",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payment: [`OrderForCreatePayment`](./models/order-for-create-payment.ts)<a id="payment-orderforcreatepaymentmodelsorder-for-create-paymentts"></a>

##### reward: [`OrdersCreateOrderRequestReward`](./models/orders-create-order-request-reward.ts)<a id="reward-orderscreateorderrequestrewardmodelsorders-create-order-request-rewardts"></a>

##### external_id: `string`<a id="external_id-string"></a>

Reference for this order, supplied by the customer.  When set, `external_id` makes order idempotent. All requests that use the same `external_id` after the initial order creation, will result in a response that returns the data of the initially created order. The response will have a `201` response code. These responses **fail** to create any further orders.  It also allows for retrieving by `external_id` instead of `id` only. 

#### 🔄 Return<a id="🔄-return"></a>

[OrdersCreateOrderResponse](./models/orders-create-order-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.orders.getList`<a id="tremendousordersgetlist"></a>

Retrieve a list of orders


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await tremendous.orders.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### offset: `number`<a id="offset-number"></a>

Offsets the returned list by the given number of orders. The returned orders are ordered (and offsetted) by their creation date (DESC).

##### campaignId: `string`<a id="campaignid-string"></a>

Only return results with a matching campaign_id.

##### externalId: `string`<a id="externalid-string"></a>

Only return results with a matching external_id.

##### createdAtGte: `string`<a id="createdatgte-string"></a>

Only return results where the created_at field is greater than or equal to the supplied value. The string needs to be an ISO 8601 datetime.

##### createdAtLte: `string`<a id="createdatlte-string"></a>

Only return results where the created_at field is less than or equal to the supplied value. The string needs to be an ISO 8601 datetime.

##### limit: `number`<a id="limit-number"></a>

Limits the number of orders listed. The maximum value is 100 and the default is 10.

#### 🔄 Return<a id="🔄-return"></a>

[OrdersGetListResponse](./models/orders-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.orders.getOrderById`<a id="tremendousordersgetorderbyid"></a>

Retrieve the order, identified by the given `id` in the URL


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrderByIdResponse = await tremendous.orders.getOrderById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the order that should be retrieved. In case the order has an `external_id` reference supplied by the customer on creation, it\'s possible to use it instead. 

#### 🔄 Return<a id="🔄-return"></a>

[OrdersGetOrderByIdResponse](./models/orders-get-order-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orders/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.orders.rejectById`<a id="tremendousordersrejectbyid"></a>

Rejects an order that is pending review, identified by the given `id` in the URL.

Approvals is a feature that requires orders to be approved by an organization admin
before they are sent out. To enable approvals for your organization, please enable
'Allow approvals via API' via the organization''s 'Order Approvals' settings from the Tremendous dashboard.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const rejectByIdResponse = await tremendous.orders.rejectById({
  id: "SOMEIDSOMEID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the order that should be rejected. In case the order has an `external_id` reference supplied by the customer on creation, it\'s possible to use it instead.

#### 🔄 Return<a id="🔄-return"></a>

[OrdersRejectByIdResponse](./models/orders-reject-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/order_approvals/{id}/reject` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.organizations.createApiKey`<a id="tremendousorganizationscreateapikey"></a>

Creates a new API key. The API key used to make the request will remain active.

Created API keys are generated randomly and returned in the response. **You cannot retrieve them again.**


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createApiKeyResponse = await tremendous.organizations.createApiKey();
```

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationsCreateApiKeyResponse](./models/organizations-create-api-key-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/create_api_key` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.organizations.createNewOrganization`<a id="tremendousorganizationscreateneworganization"></a>

Organizations are a way to separate different parts of your business within the same Tremendous account.

You can assign users in your Tremendous team as members to any organization. Users can be members of multiple organizations at once.

API keys belong to a single organization. The API key used in a request determines on behalf of which organization the request is carried out.

**Important note:** When creating an organization, you are required to either pass `with_api_key` or `copy_settings[user]` in the request body as `true`. This ensures that your new Organization can either be accessed via the API or the Dashboard.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewOrganizationResponse =
  await tremendous.organizations.createNewOrganization({
    name: "ACME Inc.",
    website: "https://www.example.com/some-org",
    with_api_key: true,
    phone: "123-456-7890",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the organization

##### website: `string`<a id="website-string"></a>

URL of the website of that organization

##### with_api_key: `boolean`<a id="with_api_key-boolean"></a>

Default value is `false`. Set to true to also generate an API key associated to the new organization.

##### copy_settings: [`OrganizationsCreateNewOrganizationRequestCopySettings`](./models/organizations-create-new-organization-request-copy-settings.ts)<a id="copy_settings-organizationscreateneworganizationrequestcopysettingsmodelsorganizations-create-new-organization-request-copy-settingsts"></a>

##### phone: `string`<a id="phone-string"></a>

Phone number of the organization. For non-US phone numbers, specify the country code (prefixed with +).

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationsCreateNewOrganizationResponse](./models/organizations-create-new-organization-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.organizations.getList`<a id="tremendousorganizationsgetlist"></a>

The returned list only includes the organization to which the API key belongs to, that is used for the request.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await tremendous.organizations.getList();
```

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationsGetListResponse](./models/organizations-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.organizations.getOrganization`<a id="tremendousorganizationsgetorganization"></a>

Retrieve organization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrganizationResponse = await tremendous.organizations.getOrganization({
  id: "SOMEIDSOMEID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the organization to retrieve

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationsGetOrganizationResponse](./models/organizations-get-organization-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.products.getById`<a id="tremendousproductsgetbyid"></a>

Retrieve a product, identified by the given `id` in the URL


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await tremendous.products.getById({
  id: "SOMEIDSOMEID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the product that should be retrieved

#### 🔄 Return<a id="🔄-return"></a>

[ProductsGetByIdResponse](./models/products-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.products.getList`<a id="tremendousproductsgetlist"></a>

Retrieve a list of available products


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await tremendous.products.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

Comma-separated list of [Alpha-2 country codes](https://www.iban.com/country-codes), used to only retrieve products available in the provided countries

##### currency: `string`<a id="currency-string"></a>

Comma-separated list of [currency codes](https://www.iban.com/currency-codes), used to only retrieve products available in the provided currencies

#### 🔄 Return<a id="🔄-return"></a>

[ProductsGetListResponse](./models/products-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.rewards.generateEmbedToken`<a id="tremendousrewardsgenerateembedtoken"></a>

Generate a temporary reward token identified by the `id` in the URL.
These tokens are needed to render a reward when using [Tremendous Embed](https://github.com/tremendous-rewards/embed/blob/master/docs/documentation.md).
The token is valid for 24 hours.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateEmbedTokenResponse = await tremendous.rewards.generateEmbedToken({
  id: "SOMEIDSOMEID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the reward

#### 🔄 Return<a id="🔄-return"></a>

[RewardsGenerateEmbedTokenResponse](./models/rewards-generate-embed-token-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rewards/{id}/generate_embed_token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.rewards.generateLink`<a id="tremendousrewardsgeneratelink"></a>

Generate a redemption link for the reward identified by the `id` in the URL


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateLinkResponse = await tremendous.rewards.generateLink({
  id: "SOMEIDSOMEID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the reward

#### 🔄 Return<a id="🔄-return"></a>

[RewardsGenerateLinkResponse](./models/rewards-generate-link-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rewards/{id}/generate_link` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.rewards.getSingleReward`<a id="tremendousrewardsgetsinglereward"></a>

Retrieve the reward, identified by the given `id` in the URL


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleRewardResponse = await tremendous.rewards.getSingleReward({
  id: "SOMEIDSOMEID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the reward that should be retrieved

#### 🔄 Return<a id="🔄-return"></a>

[RewardsGetSingleRewardResponse](./models/rewards-get-single-reward-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rewards/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.rewards.listAllRewards`<a id="tremendousrewardslistallrewards"></a>

Retrieve a list of all created rewards


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllRewardsResponse = await tremendous.rewards.listAllRewards({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### offset: `number`<a id="offset-number"></a>

Offsets the returned list by the given number of rewards. The returned rewards are ordered (and offsetted) by their creation date (DESC).

#### 🔄 Return<a id="🔄-return"></a>

[RewardsListAllRewardsResponse](./models/rewards-list-all-rewards-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rewards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.rewards.resendRewardById`<a id="tremendousrewardsresendrewardbyid"></a>

Resends a reward, identified by the given `id` in the URL, to its recipient.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resendRewardByIdResponse = await tremendous.rewards.resendRewardById({
  id: "SOMEIDSOMEID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the reward that should be resent

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rewards/{id}/resend` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.webhooks.createWebhook`<a id="tremendouswebhookscreatewebhook"></a>

Tremendous uses webhooks as a notification system for various events that happen in your account.

> 📘 Learn more about Webhooks
>
> Our guide explains everything you need to know about the Tremendous webhooks:
> [Read it here](https://developers.tremendous.com/)

Every organization can define a single webhook endpoint where we send requests to, whenever an event happens.

This endpoint allows you to setup that endpoint. The URL of the endpoint can be changed by making a request to this endpoint again with the new URL.

## Request body<a id="request-body"></a>

<div class="object-schema-request-schema">
  <table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="object-schema-table-body">
    <tr class=""><td><div class="property-name">
  <code class="property-name">url</code>
</div>
</td><td><span class="property-type">string</span> <span class="property-format">uri</span></td><td><p>URL the webhook will make requests to</p>
</td></tr>
  </tbody>
</table>

</div>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWebhookResponse = await tremendous.webhooks.createWebhook({
  url: "https://example.com/webhook",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

URL the webhook will make requests to

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksCreateWebhookResponse](./models/webhooks-create-webhook-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.webhooks.getDetails`<a id="tremendouswebhooksgetdetails"></a>

Every organization can only have one webhook. This endpoint shows the details about that webhook.

> 📘 Learn more about Webhooks
>
> Our guide explains everything you need to know about the Tremendous webhooks:
> [Read it here](https://developers.tremendous.com/)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await tremendous.webhooks.getDetails();
```

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksGetDetailsResponse](./models/webhooks-get-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.webhooks.getDetails_0`<a id="tremendouswebhooksgetdetails_0"></a>

> 📘 Learn more about Webhooks
>
> Our guide explains everything you need to know about the Tremendous webhooks:
> [Read it here](https://developers.tremendous.com/)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetails_0Response = await tremendous.webhooks.getDetails_0({
  id: "SOMEIDSOMEID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the webhook to retrieve

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksGetDetails200Response](./models/webhooks-get-details200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.webhooks.listEvents`<a id="tremendouswebhookslistevents"></a>

Lists all event types that can be sent to the configured webhook endpoint.

> 📘 Learn more about Webhooks
>
> Our guide explains everything you need to know about the Tremendous webhooks:
> [Read it here](https://developers.tremendous.com/)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEventsResponse = await tremendous.webhooks.listEvents({
  id: "SOMEIDSOMEID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

ID of the webhook to list the events for

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksListEventsResponse](./models/webhooks-list-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{id}/events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `tremendous.webhooks.triggerEvent`<a id="tremendouswebhookstriggerevent"></a>

Making a request to this endpoint will cause our system to trigger a webhook for the specified event. This can be very useful when testing the setup that processes webhooks on your end.

> 📘 Learn more about Webhooks
>
> Our guide explains everything you need to know about the Tremendous webhooks:
> [Read it here](https://developers.tremendous.com/)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const triggerEventResponse = await tremendous.webhooks.triggerEvent({
  id: "SOMEIDSOMEID",
  event: "INVOICES.PAID",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### event: `string`<a id="event-string"></a>

The event to test. See the [List events endpoint reference](https://developers.tremendous.com/) for all available events.

##### id: `string`<a id="id-string"></a>

ID of the webhook to test

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{id}/simulate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
