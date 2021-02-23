/**
 * Maps the "#/definitions" object type to the actual object name
 * @param mapping Mapping (found in the schema file under schema.discriminator.mapping)
 *                This will be a format like: mapping["Account"] = "#/definitions/Account"
 * @returns Object in a format like: typeMappings["#/definitions/Account"] = "Account"
 */
export function getTypeMappings(mapping: { [key: string]: string}): { [key: string]: string } {
    const definitions: { [key: string]: string } = {};

    // [#/defintions/...] = <object type>
    Object.keys(mapping).map((key) => {
        const val = mapping[key];
        definitions[val] = key;
    });

    return definitions;
}

/**
 * Returns information about the data type given the data key.
 * Examples:
 *      #/definitions/boolean           ==> boolean
 *      #/definitions/integer           ==> number
 *      #/definitions/CodeableConcept   ==> CodeableConcept
 * @param typeKey Name of type. Should be in the format like: "#/definitions/string"
 * @param typeMappings Type Mappings from getTypeMappings. Dictionary like: typeMappings["#/definitions/Account"] = "Account"
 * @param typeDefinitions Type Definitions from fhirSchema.definitions. Primitive types will have any entry with a "type" property.
 */
export function getDataTypeDetails(typeKey: string, typeMappings: { [key: string]: string}, typeDefinitions: any): { isPrimitive: boolean, typeName: string }
{
    // Strip off the "#/definitions/" portion...
    const shortTypeKey = typeKey.replace("#/definitions/", "");

    // Special handling for "ResourceList" since it's just a long list of possible resources
    // TODO: We could make this like Account | ActivityDefinition | ...
    if (shortTypeKey === "ResourceList") { return { isPrimitive: true, typeName: "any" }; }

    // Special handling for xhtml...
    if (shortTypeKey === "xhtml") { return { isPrimitive: true, typeName: "string" }; }

    // Find the type details in our typeDefinitions object. If it has a "type", just return that...
    const typeDetails = typeDefinitions[shortTypeKey];
    if (typeDetails && typeDetails.type)  {
        return { isPrimitive: true, typeName: typeDetails.type };
    }

    // Otherwise, look it up in the typeMappings, and return that object type...
    const typeName = typeMappings[typeKey];
    if (typeName) { 
        return { isPrimitive: false, typeName: typeName };
    }

    // If all else fails, just return the shortened typeKey...
    return { isPrimitive: false, typeName: shortTypeKey };
}