import { getDataTypeDetails, getTypeMappings } from "./../src/util";
const fs = require("fs");

function assert(expected: any, actual: any) {
    if (expected !== actual) { throw new Error("Assertion failed"); }
}

// Prepare data for tests...
const INPUT_FILE = "fhir.schema.json";
const fhirSchema = JSON.parse(fs.readFileSync(INPUT_FILE, "utf8"));
const typeDefinitions = fhirSchema.definitions;
const typeMappings = getTypeMappings(fhirSchema.discriminator.mapping);


console.log("*** RUNNING TESTS ***");

assert("boolean", getDataTypeDetails("#/definitions/boolean", typeMappings, typeDefinitions).typeName);
assert("string", getDataTypeDetails("#/definitions/string", typeMappings, typeDefinitions).typeName);
assert("number", getDataTypeDetails("#/definitions/integer", typeMappings, typeDefinitions).typeName);
assert("string", getDataTypeDetails("#/definitions/xhtml", typeMappings, typeDefinitions).typeName);         // TODO: Check
assert("string", getDataTypeDetails("#/definitions/time", typeMappings, typeDefinitions).typeName);          // TODO: Check
assert("string", getDataTypeDetails("#/definitions/date", typeMappings, typeDefinitions).typeName);         // TODO: Check
assert("string", getDataTypeDetails("#/definitions/dateTime", typeMappings, typeDefinitions).typeName);          // TODO: Check
assert("any", getDataTypeDetails("#/definitions/ResourceList", typeMappings, typeDefinitions).typeName);          // TODO: Check (any?)
assert("CodeableConcept", getDataTypeDetails("#/definitions/CodeableConcept", typeMappings, typeDefinitions).typeName);
assert("Element", getDataTypeDetails("#/definitions/Element", typeMappings, typeDefinitions).typeName);
assert("FamilyMemberHistory", getDataTypeDetails("#/definitions/FamilyMemberHistory", typeMappings, typeDefinitions).typeName);

console.log("*** ALL TESTS PASSED ***");