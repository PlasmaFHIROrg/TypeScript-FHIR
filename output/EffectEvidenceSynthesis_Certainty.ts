import Extension from './Extension';
import CodeableConcept from './CodeableConcept';
import Annotation from './Annotation';
import EffectEvidenceSynthesis_CertaintySubcomponent from './EffectEvidenceSynthesis_CertaintySubcomponent';

/**
 * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
 */
export default class EffectEvidenceSynthesis_Certainty {
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
     * A rating of the certainty of the effect estimate.
     */
    rating?: CodeableConcept | CodeableConcept[];

    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: Annotation | Annotation[];

    /**
     * A description of a component of the overall certainty.
     */
    certaintySubcomponent?: EffectEvidenceSynthesis_CertaintySubcomponent | EffectEvidenceSynthesis_CertaintySubcomponent[];


}

