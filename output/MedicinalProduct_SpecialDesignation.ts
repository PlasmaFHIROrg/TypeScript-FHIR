import Extension from './Extension';
import Identifier from './Identifier';
import CodeableConcept from './CodeableConcept';
import Reference from './Reference';
import Element from './Element';

/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export default class MedicinalProduct_SpecialDesignation {
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
     * Identifier for the designation, or procedure number.
     */
    identifier?: Identifier | Identifier[];

    /**
     * The type of special designation, e.g. orphan drug, minor use.
     */
    type?: CodeableConcept;

    /**
     * The intended use of the product, e.g. prevention, treatment.
     */
    intendedUse?: CodeableConcept;

    /**
     * Condition for which the medicinal use applies.
     */
    indicationCodeableConcept?: CodeableConcept;

    /**
     * Condition for which the medicinal use applies.
     */
    indicationReference?: Reference;

    /**
     * For example granted, pending, expired or withdrawn.
     */
    status?: CodeableConcept;

    /**
     * Date when the designation was granted.
     */
    date?: string;

    /**
     * Extensions for date
     */
    _date?: Element;

    /**
     * Animal species for which this applies.
     */
    species?: CodeableConcept;


}
