import Extension from './Extension';
import Element from './Element';
import CodeableConcept from './CodeableConcept';
import Reference from './Reference';
import Timing from './Timing';
import Period from './Period';
import Quantity from './Quantity';

/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export default class CarePlan_Detail {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;

    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Extension | Extension[];

    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension | Extension[];

    /**
     * A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
     */
    kind?: string;

    /**
     * Extensions for kind
     */
    _kind?: Element;

    /**
     * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
     */
    instantiatesCanonical?: string | string[];

    /**
     * The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
     */
    instantiatesUri?: string | string[];

    /**
     * Extensions for instantiatesUri
     */
    _instantiatesUri?: Element | Element[];

    /**
     * Detailed description of the type of planned activity; e.g. what lab test, what procedure, what kind of encounter.
     */
    code?: CodeableConcept;

    /**
     * Provides the rationale that drove the inclusion of this particular activity as part of the plan or the reason why the activity was prohibited.
     */
    reasonCode?: CodeableConcept | CodeableConcept[];

    /**
     * Indicates another resource, such as the health condition(s), whose existence justifies this request and drove the inclusion of this particular activity as part of the plan.
     */
    reasonReference?: Reference | Reference[];

    /**
     * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
     */
    goal?: Reference | Reference[];

    /**
     * Identifies what progress is being made for the specific activity.
     */
    status?: status;

    /**
     * Extensions for status
     */
    _status?: Element;

    /**
     * Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.
     */
    statusReason?: CodeableConcept;

    /**
     * If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, or missing, indicates that the described activity is one that should be engaged in when following the plan.
     */
    doNotPerform?: boolean;

    /**
     * Extensions for doNotPerform
     */
    _doNotPerform?: Element;

    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledTiming?: Timing;

    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledPeriod?: Period;

    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledString?: string;

    /**
     * Extensions for scheduledString
     */
    _scheduledString?: Element;

    /**
     * Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
     */
    location?: Reference;

    /**
     * Identifies who's expected to be involved in the activity.
     */
    performer?: Reference | Reference[];

    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productCodeableConcept?: CodeableConcept;

    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productReference?: Reference;

    /**
     * Identifies the quantity expected to be consumed in a given day.
     */
    dailyAmount?: Quantity;

    /**
     * Identifies the quantity expected to be supplied, administered or consumed by the subject.
     */
    quantity?: Quantity;

    /**
     * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
     */
    description?: string;

    /**
     * Extensions for description
     */
    _description?: Element;


}

/**
 * Identifies what progress is being made for the specific activity.
 */
export enum status
{
    "scheduled",
    "completed",
    "cancelled",
    "stopped",
    "unknown"
}


