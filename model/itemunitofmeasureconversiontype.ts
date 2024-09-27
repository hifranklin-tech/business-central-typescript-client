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

/**
 * 
 * @export
 * @interface Itemunitofmeasureconversiontype
 */
export interface Itemunitofmeasureconversiontype {
    /**
     * (v1.0) The toUnitOfMeasure property for the Dynamics 365 Business Central itemunitofmeasureconversiontype entity
     * @type {string}
     * @memberof Itemunitofmeasureconversiontype
     */
    'toUnitOfMeasure'?: string | null;
    /**
     * (v1.0) The fromToConversionRate property for the Dynamics 365 Business Central itemunitofmeasureconversiontype entity
     * @type {number}
     * @memberof Itemunitofmeasureconversiontype
     */
    'fromToConversionRate'?: number | null;
    /**
     * 
     * @type {Array<Picture>}
     * @memberof Itemunitofmeasureconversiontype
     */
    'picture'?: Array<Picture> | null;
    /**
     * 
     * @type {Array<DefaultDimensions>}
     * @memberof Itemunitofmeasureconversiontype
     */
    'defaultDimensions'?: Array<DefaultDimensions> | null;
    /**
     * 
     * @type {ItemCategory}
     * @memberof Itemunitofmeasureconversiontype
     */
    'itemCategory'?: ItemCategory;
}

