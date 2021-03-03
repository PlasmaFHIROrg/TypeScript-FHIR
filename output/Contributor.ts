import Extension from './Extension';
import Element from './Element';
import ContactDetail from './ContactDetail';

/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export default class Contributor {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;

    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Extension | Extension[];

    /**
     * The type of contributor.
     */
    type?: type;

    /**
     * Extensions for type
     */
    _type?: Element;

    /**
     * The name of the individual or organization responsible for the contribution.
     */
    name?: string;

    /**
     * Extensions for name
     */
    _name?: Element;

    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: ContactDetail | ContactDetail[];


}

/**
 * The type of contributor.
 */
export enum type
{
    "author",
    "editor",
    "reviewer",
    "endorser"
}


