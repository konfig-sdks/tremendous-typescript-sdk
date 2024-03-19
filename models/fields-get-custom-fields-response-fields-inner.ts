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
 * @interface FieldsGetCustomFieldsResponseFieldsInner
 */
export interface FieldsGetCustomFieldsResponseFieldsInner {
    /**
     * 
     * @type {string}
     * @memberof FieldsGetCustomFieldsResponseFieldsInner
     */
    'id'?: string;
    /**
     * Label of the field
     * @type {string}
     * @memberof FieldsGetCustomFieldsResponseFieldsInner
     */
    'label'?: string;
    /**
     * Type of the values of the field
     * @type {string}
     * @memberof FieldsGetCustomFieldsResponseFieldsInner
     */
    'data_type'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof FieldsGetCustomFieldsResponseFieldsInner
     */
    'data'?: { [key: string]: any; };
    /**
     * Is this field required (true) or optional (false)
     * @type {boolean}
     * @memberof FieldsGetCustomFieldsResponseFieldsInner
     */
    'required'?: boolean;
    /**
     * Type of objects this field gets associated with
     * @type {string}
     * @memberof FieldsGetCustomFieldsResponseFieldsInner
     */
    'scope'?: string;
}
