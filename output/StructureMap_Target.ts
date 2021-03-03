import Extension from './Extension';
import Element from './Element';
import StructureMap_Parameter from './StructureMap_Parameter';

/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export default class StructureMap_Target {
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
     * Type or variable this rule applies to.
     */
    context?: string;

    /**
     * Extensions for context
     */
    _context?: Element;

    /**
     * How to interpret the context.
     */
    contextType?: contextType;

    /**
     * Extensions for contextType
     */
    _contextType?: Element;

    /**
     * Field to create in the context.
     */
    element?: string;

    /**
     * Extensions for element
     */
    _element?: Element;

    /**
     * Named context for field, if desired, and a field is specified.
     */
    variable?: string;

    /**
     * Extensions for variable
     */
    _variable?: Element;

    /**
     * If field is a list, how to manage the list.
     */
    listMode?: listMode | listMode[];

    /**
     * Extensions for listMode
     */
    _listMode?: Element | Element[];

    /**
     * Internal rule reference for shared list items.
     */
    listRuleId?: string;

    /**
     * Extensions for listRuleId
     */
    _listRuleId?: Element;

    /**
     * How the data is copied / created.
     */
    transform?: transform;

    /**
     * Extensions for transform
     */
    _transform?: Element;

    /**
     * Parameters to the transform.
     */
    parameter?: StructureMap_Parameter | StructureMap_Parameter[];


}

/**
 * How to interpret the context.
 */
export enum contextType
{
    "type",
    "variable"
}


/**
 * If field is a list, how to manage the list.
 */
export enum listMode
{
    "first",
    "share",
    "last",
    "collate"
}


/**
 * How the data is copied / created.
 */
export enum transform
{
    "create",
    "copy",
    "truncate",
    "escape",
    "cast",
    "append",
    "translate",
    "reference",
    "dateOp",
    "uuid",
    "pointer",
    "evaluate",
    "cc",
    "c",
    "qty",
    "id",
    "cp"
}


