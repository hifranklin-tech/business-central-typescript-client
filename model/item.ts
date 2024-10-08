/* tslint:disable */
/* eslint-disable */
/**
 * (v1.0) Dynamics 365 Business Central
 * (v1.0) Business Central Standard APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { DefaultDimensions } from './default-dimensions';
// May contain unused imports in some cases
// @ts-ignore
import type { ItemCategory } from './item-category';
// May contain unused imports in some cases
// @ts-ignore
import type { Picture } from './picture';
// May contain unused imports in some cases
// @ts-ignore
import type { Unitofmeasuretype } from './unitofmeasuretype';

/**
 * 
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * (v1.0) The id property for the Dynamics 365 Business Central item entity
     * @type {string}
     * @memberof Item
     */
    'id'?: string;
    /**
     * (v1.0) The number property for the Dynamics 365 Business Central item entity
     * @type {string}
     * @memberof Item
     */
    'number'?: string | null;
    /**
     * (v1.0) The displayName property for the Dynamics 365 Business Central item entity
     * @type {string}
     * @memberof Item
     */
    'displayName'?: string | null;
    /**
     * (v1.0) The type property for the Dynamics 365 Business Central item entity
     * @type {string}
     * @memberof Item
     */
    'type'?: string | null;
    /**
     * (v1.0) The itemCategoryId property for the Dynamics 365 Business Central item entity
     * @type {string}
     * @memberof Item
     */
    'itemCategoryId'?: string | null;
    /**
     * (v1.0) The itemCategoryCode property for the Dynamics 365 Business Central item entity
     * @type {string}
     * @memberof Item
     */
    'itemCategoryCode'?: string | null;
    /**
     * (v1.0) The blocked property for the Dynamics 365 Business Central item entity
     * @type {boolean}
     * @memberof Item
     */
    'blocked'?: boolean | null;
    /**
     * (v1.0) The baseUnitOfMeasureId property for the Dynamics 365 Business Central item entity
     * @type {string}
     * @memberof Item
     */
    'baseUnitOfMeasureId'?: string | null;
    /**
     * 
     * @type {Unitofmeasuretype}
     * @memberof Item
     */
    'baseUnitOfMeasure'?: Unitofmeasuretype;
    /**
     * (v1.0) The gtin property for the Dynamics 365 Business Central item entity
     * @type {string}
     * @memberof Item
     */
    'gtin'?: string | null;
    /**
     * (v1.0) The inventory property for the Dynamics 365 Business Central item entity
     * @type {number}
     * @memberof Item
     */
    'inventory'?: number | null;
    /**
     * (v1.0) The unitPrice property for the Dynamics 365 Business Central item entity
     * @type {number}
     * @memberof Item
     */
    'unitPrice'?: number | null;
    /**
     * (v1.0) The priceIncludesTax property for the Dynamics 365 Business Central item entity
     * @type {boolean}
     * @memberof Item
     */
    'priceIncludesTax'?: boolean | null;
    /**
     * (v1.0) The unitCost property for the Dynamics 365 Business Central item entity
     * @type {number}
     * @memberof Item
     */
    'unitCost'?: number | null;
    /**
     * (v1.0) The taxGroupId property for the Dynamics 365 Business Central item entity
     * @type {string}
     * @memberof Item
     */
    'taxGroupId'?: string | null;
    /**
     * (v1.0) The taxGroupCode property for the Dynamics 365 Business Central item entity
     * @type {string}
     * @memberof Item
     */
    'taxGroupCode'?: string | null;
    /**
     * (v1.0) The lastModifiedDateTime property for the Dynamics 365 Business Central item entity
     * @type {string}
     * @memberof Item
     */
    'lastModifiedDateTime'?: string | null;
    /**
     * 
     * @type {Array<Picture>}
     * @memberof Item
     */
    'picture'?: Array<Picture> | null;
    /**
     * 
     * @type {Array<DefaultDimensions>}
     * @memberof Item
     */
    'defaultDimensions'?: Array<DefaultDimensions> | null;
    /**
     * 
     * @type {ItemCategory}
     * @memberof Item
     */
    'itemCategory'?: ItemCategory;
}

