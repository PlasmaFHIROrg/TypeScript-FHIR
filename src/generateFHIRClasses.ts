
import { FHIRClass, FHIRConstant, FHIRProperty, FHIREnum } from "./FHIRClass";
import { getTypeMappings, getDataTypeDetails } from "./util";
const fs = require("fs");

// Options...
const INPUT_FILE = "fhir.schema.json";
const OUTPUT_DIR = "./models";  // Don't change this

// Parse input json file...
const fhirSchema = JSON.parse(fs.readFileSync(INPUT_FILE, "utf8"));

// Get the set of types and the type mappings...
const typeDefinitions = fhirSchema.definitions;
const typeMappings = getTypeMappings(fhirSchema.discriminator.mapping);

// Remove any types that don't have properties...
const typeDefinitionsToCreate: { [key: string]: any } = {};
Object.keys(typeDefinitions).forEach((definitionKey) => {
    // If it doesn't have properties, don't create it...
    if (!typeDefinitions[definitionKey].hasOwnProperty("properties")) {
        console.log(`*** Warning: Definition name ${definitionKey} does not have properties.`);
        return;
    }
    
    // Copy into our object of types to create...
    typeDefinitionsToCreate[definitionKey] = typeDefinitions[definitionKey];    
});

// Loop over every type and collect information about it...
const fhirClasses: FHIRClass[] = [];
Object.keys(typeDefinitionsToCreate).forEach((definitionKey) => {

    // Get data about this type...
    const typeDefinition = typeDefinitionsToCreate[definitionKey];
    const description: string = typeDefinition.description;
    const fhirClass: FHIRClass = new FHIRClass(definitionKey, description);

    // Loop over every property and collect information about it...
    Object.keys(typeDefinition.properties).forEach((propertyKey) => {
        // Get data about this property...
        const property = typeDefinition.properties[propertyKey];
        const propertyDescription = property.description;
        const isRequired: boolean = typeDefinition.hasOwnProperty("required") && typeDefinition.required.indexOf(propertyKey) >= 0;
        const isArray: boolean = property.hasOwnProperty("type") && property.type === "array";        
        const isPrimitive: boolean = property.hasOwnProperty("type") && !isArray;
        const isConstant: boolean = property.hasOwnProperty("const");
        const isEnum: boolean = property.hasOwnProperty("enum");

        // Handle property based on what we've determined about it...
        if (isConstant)
        {
            // Create a FHIRConstant...
            const fhirConst: FHIRConstant = new FHIRConstant(propertyKey, property.const, propertyDescription);
            fhirClass.constants.push(fhirConst);
        }
        else if (isEnum) 
        {
            // Add the enum definition...
            const fhirEnum: FHIREnum = new FHIREnum(propertyKey, property.enum, propertyDescription);
            fhirClass.enums.push(fhirEnum);

            // Also add it as a property...
            const fhirProp: FHIRProperty = new FHIRProperty(propertyKey, propertyKey, propertyDescription, isArray, isRequired);
            fhirClass.properties.push(fhirProp);
        }
        else if (isPrimitive)
        {
            // Create a FHIRProperty...
            const dataType = property.type;
            const fhirProp: FHIRProperty = new FHIRProperty(propertyKey, dataType, propertyDescription, isArray, isRequired);
            
            // Add to our properties (don't add to imports because it's a primitive)...
            fhirClass.properties.push(fhirProp);
        }
        else
        {
            // Create a FHIRProperty...
            const typeRef = (isArray) ? property.items["$ref"] : property["$ref"];

            // If we didn't find $ref, it might be an enum array...
            if (!typeRef && isArray) {
                if (property.items.enum) {
                    // Add the enum definition...
                    const fhirEnum: FHIREnum = new FHIREnum(propertyKey, property.items.enum, propertyDescription);
                    fhirClass.enums.push(fhirEnum);

                    // Also add it as a property...
                    const fhirProp: FHIRProperty = new FHIRProperty(propertyKey, propertyKey, propertyDescription, isArray, isRequired);
                    fhirClass.properties.push(fhirProp);

                    return;
                }
            }

            const dataTypeDetails = getDataTypeDetails(typeRef, typeMappings, typeDefinitions);
            const dataType = dataTypeDetails.typeName;
            const fhirProp: FHIRProperty = new FHIRProperty(propertyKey, dataType, propertyDescription, isArray, isRequired);

            // Add to our properties...
            fhirClass.properties.push(fhirProp);

            // Do one more check if this is a primitive, because some types (like boolean) still show up in the #/definitions.
            // If not a primitive, then add it to the imports.
            if (!dataTypeDetails.isPrimitive) { 
                fhirClass.addImport(dataType);
            }
        }
    });

    // If additional properties are allowed...
    if (typeDefinition.additionalProperties) {
        const fhirProp: FHIRProperty = new FHIRProperty("[x: string]", "any", "Allow additional properties", false, true);
        fhirClass.properties.push(fhirProp);
    }

    // Add to our collection of classes...
    fhirClasses.push(fhirClass);
});

if (!fs.existsSync(OUTPUT_DIR)) { fs.mkdirSync(OUTPUT_DIR); }

// Write all the classes to files...
fhirClasses.forEach((fhirClass) => {
    const fileName: string = `${OUTPUT_DIR}/${fhirClass.name}.ts`;
    fs.writeFileSync(fileName, fhirClass.toString());
});

// Write index.ts file to export all types...
const exportTypes = Object.keys(typeDefinitionsToCreate)
    .map((definitionName) => { return  `export { default as ${definitionName} } from './${definitionName}';`; })
    .join("\n");
const fileName = `${OUTPUT_DIR}/index.ts`;
fs.writeFileSync(fileName, exportTypes);
