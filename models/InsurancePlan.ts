import Meta from './Meta';
import Element from './Element';
import Narrative from './Narrative';
import Extension from './Extension';
import Identifier from './Identifier';
import CodeableConcept from './CodeableConcept';
import Period from './Period';
import Reference from './Reference';
import InsurancePlan_Contact from './InsurancePlan_Contact';
import InsurancePlan_Coverage from './InsurancePlan_Coverage';
import InsurancePlan_Plan from './InsurancePlan_Plan';

/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export default class InsurancePlan {
    /**
     * This is a InsurancePlan resource
     */
    static readonly resourceType = "InsurancePlan";

    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;

    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: Meta;

    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;

    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;

    /**
     * The base language in which the resource is written.
     */
    language?: string;

    /**
     * Extensions for language
     */
    _language?: Element;

    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;

    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    contained?: any | any[];

    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Extension | Extension[];

    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension | Extension[];

    /**
     * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: Identifier | Identifier[];

    /**
     * The current state of the health insurance product.
     */
    status?: status;

    /**
     * Extensions for status
     */
    _status?: Element;

    /**
     * The kind of health insurance product.
     */
    type?: CodeableConcept | CodeableConcept[];

    /**
     * Official name of the health insurance product as designated by the owner.
     */
    name?: string;

    /**
     * Extensions for name
     */
    _name?: Element;

    /**
     * A list of alternate names that the product is known as, or was known as in the past.
     */
    alias?: string | string[];

    /**
     * Extensions for alias
     */
    _alias?: Element | Element[];

    /**
     * The period of time that the health insurance product is available.
     */
    period?: Period;

    /**
     * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
     */
    ownedBy?: Reference;

    /**
     * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
     */
    administeredBy?: Reference;

    /**
     * The geographic region in which a health insurance product's benefits apply.
     */
    coverageArea?: Reference | Reference[];

    /**
     * The contact for the health insurance product for a certain purpose.
     */
    contact?: InsurancePlan_Contact | InsurancePlan_Contact[];

    /**
     * The technical endpoints providing access to services operated for the health insurance product.
     */
    endpoint?: Reference | Reference[];

    /**
     * Reference to the network included in the health insurance product.
     */
    network?: Reference | Reference[];

    /**
     * Details about the coverage offered by the insurance product.
     */
    coverage?: InsurancePlan_Coverage | InsurancePlan_Coverage[];

    /**
     * Details about an insurance plan.
     */
    plan?: InsurancePlan_Plan | InsurancePlan_Plan[];


}

/**
 * The current state of the health insurance product.
 */
export enum status
{
    "draft",
    "active",
    "retired",
    "unknown"
}


