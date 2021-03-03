import Meta from './Meta';
import Element from './Element';
import Narrative from './Narrative';
import Extension from './Extension';
import Reference from './Reference';
import MedicinalProductInteraction_Interactant from './MedicinalProductInteraction_Interactant';
import CodeableConcept from './CodeableConcept';

/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export default class MedicinalProductInteraction {
    /**
     * This is a MedicinalProductInteraction resource
     */
    static readonly resourceType = "MedicinalProductInteraction";

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
     * The medication for which this is a described interaction.
     */
    subject?: Reference | Reference[];

    /**
     * The interaction described.
     */
    description?: string;

    /**
     * Extensions for description
     */
    _description?: Element;

    /**
     * The specific medication, food or laboratory test that interacts.
     */
    interactant?: MedicinalProductInteraction_Interactant | MedicinalProductInteraction_Interactant[];

    /**
     * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
     */
    type?: CodeableConcept;

    /**
     * The effect of the interaction, for example "reduced gastric absorption of primary medication".
     */
    effect?: CodeableConcept;

    /**
     * The incidence of the interaction, e.g. theoretical, observed.
     */
    incidence?: CodeableConcept;

    /**
     * Actions for managing the interaction.
     */
    management?: CodeableConcept;


}

