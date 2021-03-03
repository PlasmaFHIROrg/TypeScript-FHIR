import Meta from './Meta';
import Element from './Element';
import Narrative from './Narrative';
import Extension from './Extension';
import Identifier from './Identifier';
import ContactDetail from './ContactDetail';
import UsageContext from './UsageContext';
import CodeableConcept from './CodeableConcept';
import ConceptMap_Group from './ConceptMap_Group';

/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
export default class ConceptMap {
    /**
     * This is a ConceptMap resource
     */
    static readonly resourceType = "ConceptMap";

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
     * An absolute URI that is used to identify this concept map when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this concept map is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the concept map is stored on different servers.
     */
    url?: string;

    /**
     * Extensions for url
     */
    _url?: Element;

    /**
     * A formal identifier that is used to identify this concept map when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: Identifier;

    /**
     * The identifier that is used to identify this version of the concept map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the concept map author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;

    /**
     * Extensions for version
     */
    _version?: Element;

    /**
     * A natural language name identifying the concept map. This name should be usable as an identifier for the module by machine processing applications such as code generation.
     */
    name?: string;

    /**
     * Extensions for name
     */
    _name?: Element;

    /**
     * A short, descriptive, user-friendly title for the concept map.
     */
    title?: string;

    /**
     * Extensions for title
     */
    _title?: Element;

    /**
     * The status of this concept map. Enables tracking the life-cycle of the content.
     */
    status?: status;

    /**
     * Extensions for status
     */
    _status?: Element;

    /**
     * A Boolean value to indicate that this concept map is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
     */
    experimental?: boolean;

    /**
     * Extensions for experimental
     */
    _experimental?: Element;

    /**
     * The date  (and optionally time) when the concept map was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the concept map changes.
     */
    date?: string;

    /**
     * Extensions for date
     */
    _date?: Element;

    /**
     * The name of the organization or individual that published the concept map.
     */
    publisher?: string;

    /**
     * Extensions for publisher
     */
    _publisher?: Element;

    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: ContactDetail | ContactDetail[];

    /**
     * A free text natural language description of the concept map from a consumer's perspective.
     */
    description?: string;

    /**
     * Extensions for description
     */
    _description?: Element;

    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate concept map instances.
     */
    useContext?: UsageContext | UsageContext[];

    /**
     * A legal or geographic region in which the concept map is intended to be used.
     */
    jurisdiction?: CodeableConcept | CodeableConcept[];

    /**
     * Explanation of why this concept map is needed and why it has been designed as it has.
     */
    purpose?: string;

    /**
     * Extensions for purpose
     */
    _purpose?: Element;

    /**
     * A copyright statement relating to the concept map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the concept map.
     */
    copyright?: string;

    /**
     * Extensions for copyright
     */
    _copyright?: Element;

    /**
     * Identifier for the source value set that contains the concepts that are being mapped and provides context for the mappings.
     */
    sourceUri?: string;

    /**
     * Extensions for sourceUri
     */
    _sourceUri?: Element;

    /**
     * Identifier for the source value set that contains the concepts that are being mapped and provides context for the mappings.
     */
    sourceCanonical?: string;

    /**
     * Extensions for sourceCanonical
     */
    _sourceCanonical?: Element;

    /**
     * The target value set provides context for the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
     */
    targetUri?: string;

    /**
     * Extensions for targetUri
     */
    _targetUri?: Element;

    /**
     * The target value set provides context for the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
     */
    targetCanonical?: string;

    /**
     * Extensions for targetCanonical
     */
    _targetCanonical?: Element;

    /**
     * A group of mappings that all have the same source and target system.
     */
    group?: ConceptMap_Group | ConceptMap_Group[];


}

/**
 * The status of this concept map. Enables tracking the life-cycle of the content.
 */
export enum status
{
    "draft",
    "active",
    "retired",
    "unknown"
}


