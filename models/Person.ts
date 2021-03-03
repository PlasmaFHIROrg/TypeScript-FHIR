import Meta from './Meta';
import Element from './Element';
import Narrative from './Narrative';
import Extension from './Extension';
import Identifier from './Identifier';
import HumanName from './HumanName';
import ContactPoint from './ContactPoint';
import Address from './Address';
import Attachment from './Attachment';
import Reference from './Reference';
import Person_Link from './Person_Link';

/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export default class Person {
    /**
     * This is a Person resource
     */
    static readonly resourceType = "Person";

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
     * Identifier for a person within a particular scope.
     */
    identifier?: Identifier | Identifier[];

    /**
     * A name associated with the person.
     */
    name?: HumanName | HumanName[];

    /**
     * A contact detail for the person, e.g. a telephone number or an email address.
     */
    telecom?: ContactPoint | ContactPoint[];

    /**
     * Administrative Gender.
     */
    gender?: gender;

    /**
     * Extensions for gender
     */
    _gender?: Element;

    /**
     * The birth date for the person.
     */
    birthDate?: string;

    /**
     * Extensions for birthDate
     */
    _birthDate?: Element;

    /**
     * One or more addresses for the person.
     */
    address?: Address | Address[];

    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */
    photo?: Attachment;

    /**
     * The organization that is the custodian of the person record.
     */
    managingOrganization?: Reference;

    /**
     * Whether this person's record is in active use.
     */
    active?: boolean;

    /**
     * Extensions for active
     */
    _active?: Element;

    /**
     * Link to a resource that concerns the same actual person.
     */
    link?: Person_Link | Person_Link[];


}

/**
 * Administrative Gender.
 */
export enum gender
{
    "male",
    "female",
    "other",
    "unknown"
}


