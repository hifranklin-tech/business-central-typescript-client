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
import type { Dimensiontype } from './dimensiontype';
// May contain unused imports in some cases
// @ts-ignore
import type { Project } from './project';
// May contain unused imports in some cases
// @ts-ignore
import type { Unitofmeasuretype } from './unitofmeasuretype';

/**
 * 
 * @export
 * @interface TimeRegistrationEntry
 */
export interface TimeRegistrationEntry {
    /**
     * (v1.0) The id property for the Dynamics 365 Business Central timeRegistrationEntry entity
     * @type {string}
     * @memberof TimeRegistrationEntry
     */
    'id'?: string;
    /**
     * (v1.0) The employeeId property for the Dynamics 365 Business Central timeRegistrationEntry entity
     * @type {string}
     * @memberof TimeRegistrationEntry
     */
    'employeeId'?: string | null;
    /**
     * (v1.0) The employeeNumber property for the Dynamics 365 Business Central timeRegistrationEntry entity
     * @type {string}
     * @memberof TimeRegistrationEntry
     */
    'employeeNumber'?: string | null;
    /**
     * (v1.0) The jobId property for the Dynamics 365 Business Central timeRegistrationEntry entity
     * @type {string}
     * @memberof TimeRegistrationEntry
     */
    'jobId'?: string | null;
    /**
     * (v1.0) The jobNumber property for the Dynamics 365 Business Central timeRegistrationEntry entity
     * @type {string}
     * @memberof TimeRegistrationEntry
     */
    'jobNumber'?: string | null;
    /**
     * (v1.0) The absence property for the Dynamics 365 Business Central timeRegistrationEntry entity
     * @type {string}
     * @memberof TimeRegistrationEntry
     */
    'absence'?: string | null;
    /**
     * (v1.0) The lineNumber property for the Dynamics 365 Business Central timeRegistrationEntry entity
     * @type {number}
     * @memberof TimeRegistrationEntry
     */
    'lineNumber'?: number | null;
    /**
     * (v1.0) The date property for the Dynamics 365 Business Central timeRegistrationEntry entity
     * @type {string}
     * @memberof TimeRegistrationEntry
     */
    'date'?: string | null;
    /**
     * (v1.0) The quantity property for the Dynamics 365 Business Central timeRegistrationEntry entity
     * @type {number}
     * @memberof TimeRegistrationEntry
     */
    'quantity'?: number | null;
    /**
     * (v1.0) The status property for the Dynamics 365 Business Central timeRegistrationEntry entity
     * @type {string}
     * @memberof TimeRegistrationEntry
     */
    'status'?: string | null;
    /**
     * (v1.0) The unitOfMeasureId property for the Dynamics 365 Business Central timeRegistrationEntry entity
     * @type {string}
     * @memberof TimeRegistrationEntry
     */
    'unitOfMeasureId'?: string | null;
    /**
     * 
     * @type {Unitofmeasuretype}
     * @memberof TimeRegistrationEntry
     */
    'unitOfMeasure'?: Unitofmeasuretype;
    /**
     * 
     * @type {Array<Dimensiontype>}
     * @memberof TimeRegistrationEntry
     */
    'dimensions'?: Array<Dimensiontype>;
    /**
     * (v1.0) The lastModfiedDateTime property for the Dynamics 365 Business Central timeRegistrationEntry entity
     * @type {string}
     * @memberof TimeRegistrationEntry
     */
    'lastModfiedDateTime'?: string | null;
    /**
     * 
     * @type {Project}
     * @memberof TimeRegistrationEntry
     */
    'project'?: Project;
}

