import Extension from './Extension';
import Element from './Element';
import Timing from './Timing';
import Reference from './Reference';
import DataRequirement from './DataRequirement';
import Expression from './Expression';

/**
 * A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
 */
export default class TriggerDefinition {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;

    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Extension | Extension[];

    /**
     * The type of triggering event.
     */
    type?: type;

    /**
     * Extensions for type
     */
    _type?: Element;

    /**
     * A formal name for the event. This may be an absolute URI that identifies the event formally (e.g. from a trigger registry), or a simple relative URI that identifies the event in a local context.
     */
    name?: string;

    /**
     * Extensions for name
     */
    _name?: Element;

    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingTiming?: Timing;

    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingReference?: Reference;

    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingDate?: string;

    /**
     * Extensions for timingDate
     */
    _timingDate?: Element;

    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingDateTime?: string;

    /**
     * Extensions for timingDateTime
     */
    _timingDateTime?: Element;

    /**
     * The triggering data of the event (if this is a data trigger). If more than one data is requirement is specified, then all the data requirements must be true.
     */
    data?: DataRequirement | DataRequirement[];

    /**
     * A boolean-valued expression that is evaluated in the context of the container of the trigger definition and returns whether or not the trigger fires.
     */
    condition?: Expression;


}

/**
 * The type of triggering event.
 */
export enum type
{
    "periodic"
}


