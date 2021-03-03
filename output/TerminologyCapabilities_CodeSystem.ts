import Extension from './Extension';
import TerminologyCapabilities_Version from './TerminologyCapabilities_Version';
import Element from './Element';

/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export default class TerminologyCapabilities_CodeSystem {
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
     * URI for the Code System.
     */
    uri?: string;

    /**
     * For the code system, a list of versions that are supported by the server.
     */
    version?: TerminologyCapabilities_Version | TerminologyCapabilities_Version[];

    /**
     * True if subsumption is supported for this version of the code system.
     */
    subsumption?: boolean;

    /**
     * Extensions for subsumption
     */
    _subsumption?: Element;


}

