import Extension from './Extension';
import Element from './Element';
import Coding from './Coding';

/**
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export default class Meta {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;

    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Extension | Extension[];

    /**
     * The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted.
     */
    versionId?: string;

    /**
     * Extensions for versionId
     */
    _versionId?: Element;

    /**
     * When the resource last changed - e.g. when the version changed.
     */
    lastUpdated?: string;

    /**
     * Extensions for lastUpdated
     */
    _lastUpdated?: Element;

    /**
     * A uri that identifies the source system of the resource. This provides a minimal amount of [[[Provenance]]] information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc.
     */
    source?: string;

    /**
     * Extensions for source
     */
    _source?: Element;

    /**
     * A list of profiles (references to [[[StructureDefinition]]] resources) that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].
     */
    profile?: string | string[];

    /**
     * Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.
     */
    security?: Coding | Coding[];

    /**
     * Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.
     */
    tag?: Coding | Coding[];


}

