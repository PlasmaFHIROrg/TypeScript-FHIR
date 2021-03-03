import Extension from './Extension';
import Element from './Element';

/**
 * An amount of economic utility in some recognized currency.
 */
export default class Money {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;

    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Extension | Extension[];

    /**
     * Numerical value (with implicit precision).
     */
    value?: number;

    /**
     * Extensions for value
     */
    _value?: Element;

    /**
     * ISO 4217 Currency Code.
     */
    currency?: string;

    /**
     * Extensions for currency
     */
    _currency?: Element;


}

