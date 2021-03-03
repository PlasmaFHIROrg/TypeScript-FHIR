import Meta from './Meta';
import Element from './Element';
import Narrative from './Narrative';
import Extension from './Extension';
import ContactDetail from './ContactDetail';
import UsageContext from './UsageContext';
import CodeableConcept from './CodeableConcept';
import ImplementationGuide_DependsOn from './ImplementationGuide_DependsOn';
import ImplementationGuide_Global from './ImplementationGuide_Global';
import ImplementationGuide_Definition from './ImplementationGuide_Definition';
import ImplementationGuide_Manifest from './ImplementationGuide_Manifest';

/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
export default class ImplementationGuide {
    /**
     * This is a ImplementationGuide resource
     */
    static readonly resourceType = "ImplementationGuide";

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
     * An absolute URI that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this implementation guide is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the implementation guide is stored on different servers.
     */
    url?: string;

    /**
     * Extensions for url
     */
    _url?: Element;

    /**
     * The identifier that is used to identify this version of the implementation guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the implementation guide author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;

    /**
     * Extensions for version
     */
    _version?: Element;

    /**
     * A natural language name identifying the implementation guide. This name should be usable as an identifier for the module by machine processing applications such as code generation.
     */
    name?: string;

    /**
     * Extensions for name
     */
    _name?: Element;

    /**
     * A short, descriptive, user-friendly title for the implementation guide.
     */
    title?: string;

    /**
     * Extensions for title
     */
    _title?: Element;

    /**
     * The status of this implementation guide. Enables tracking the life-cycle of the content.
     */
    status?: status;

    /**
     * Extensions for status
     */
    _status?: Element;

    /**
     * A Boolean value to indicate that this implementation guide is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
     */
    experimental?: boolean;

    /**
     * Extensions for experimental
     */
    _experimental?: Element;

    /**
     * The date  (and optionally time) when the implementation guide was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.
     */
    date?: string;

    /**
     * Extensions for date
     */
    _date?: Element;

    /**
     * The name of the organization or individual that published the implementation guide.
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
     * A free text natural language description of the implementation guide from a consumer's perspective.
     */
    description?: string;

    /**
     * Extensions for description
     */
    _description?: Element;

    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate implementation guide instances.
     */
    useContext?: UsageContext | UsageContext[];

    /**
     * A legal or geographic region in which the implementation guide is intended to be used.
     */
    jurisdiction?: CodeableConcept | CodeableConcept[];

    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
     */
    copyright?: string;

    /**
     * Extensions for copyright
     */
    _copyright?: Element;

    /**
     * The NPM package name for this Implementation Guide, used in the NPM package distribution, which is the primary mechanism by which FHIR based tooling manages IG dependencies. This value must be globally unique, and should be assigned with care.
     */
    packageId?: string;

    /**
     * Extensions for packageId
     */
    _packageId?: Element;

    /**
     * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
     */
    license?: license;

    /**
     * Extensions for license
     */
    _license?: Element;

    /**
     * The version(s) of the FHIR specification that this ImplementationGuide targets - e.g. describes how to use. The value of this element is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.0.0. for this version.
     */
    fhirVersion?: fhirVersion | fhirVersion[];

    /**
     * Extensions for fhirVersion
     */
    _fhirVersion?: Element | Element[];

    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependsOn?: ImplementationGuide_DependsOn | ImplementationGuide_DependsOn[];

    /**
     * A set of profiles that all resources covered by this implementation guide must conform to.
     */
    global?: ImplementationGuide_Global | ImplementationGuide_Global[];

    /**
     * The information needed by an IG publisher tool to publish the whole implementation guide.
     */
    definition?: ImplementationGuide_Definition;

    /**
     * Information about an assembled implementation guide, created by the publication tooling.
     */
    manifest?: ImplementationGuide_Manifest;


}

/**
 * The status of this implementation guide. Enables tracking the life-cycle of the content.
 */
export enum status
{
    "draft",
    "active",
    "retired",
    "unknown"
}


/**
 * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
 */
export enum license
{
    "AAL",
    "Abstyles",
    "ADSL",
    "Afmparse",
    "Aladdin",
    "AMDPLPA",
    "AML",
    "AMPAS",
    "APAFML",
    "Bahyph",
    "Barr",
    "Beerware",
    "Borceux",
    "Caldera",
    "ClArtistic",
    "Crossword",
    "CrystalStacker",
    "Cube",
    "curl",
    "diffmark",
    "DOC",
    "Dotseqn",
    "DSDP",
    "dvipdfm",
    "eGenix",
    "Entessa",
    "EUDatagrid",
    "Eurosym",
    "Fair",
    "FreeImage",
    "FSFAP",
    "FSFUL",
    "FSFULLR",
    "FTL",
    "Giftware",
    "GL2PS",
    "Glide",
    "Glulxe",
    "gnuplot",
    "HaskellReport",
    "HPND",
    "ICU",
    "IJG",
    "ImageMagick",
    "iMatix",
    "Imlib2",
    "Intel",
    "IPA",
    "ISC",
    "JSON",
    "Latex2e",
    "Leptonica",
    "LGPLLR",
    "Libpng",
    "libtiff",
    "MakeIndex",
    "MirOS",
    "MIT",
    "MITNFA",
    "Motosoto",
    "mpich2",
    "MTLL",
    "Multics",
    "Mup",
    "Naumen",
    "NCSA",
    "NetCDF",
    "Newsletr",
    "NGPL",
    "NLPL",
    "Nokia",
    "NOSL",
    "Noweb",
    "NRL",
    "NTP",
    "OGTSL",
    "OML",
    "OpenSSL",
    "Plexus",
    "PostgreSQL",
    "psfrag",
    "psutils",
    "Qhull",
    "Rdisc",
    "RSCPL",
    "Ruby",
    "Saxpath",
    "SCEA",
    "Sendmail",
    "SISSL",
    "Sleepycat",
    "SMLNJ",
    "SMPPL",
    "SNIA",
    "SWL",
    "TCL",
    "TMate",
    "TOSL",
    "Unlicense",
    "Vim",
    "VOSTROM",
    "W3C",
    "Wsuipa",
    "WTFPL",
    "X11",
    "Xerox",
    "xinetd",
    "Xnet",
    "xpp",
    "XSkat",
    "Zed",
    "Zlib"
}


/**
 * The version(s) of the FHIR specification that this ImplementationGuide targets - e.g. describes how to use. The value of this element is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.0.0. for this version.
 */
export enum fhirVersion
{

}


